#!/usr/bin/env node
// ============================================================
// sync-kabar.mjs — Tarik update "Kabar Gendis" (Supabase) -> digest untuk Core
// ------------------------------------------------------------
// Ritual pengganti harvest WA manual. Tim posting di /kabar -> tabel `updates`.
// Script ini menarik baris BARU (belum pernah disync), memformat jadi blok
// markdown, dan menampilkannya supaya bisa dimasukkan ke Peran-Gendis-Core.md.
//
// Dedupe via ledger lokal (scripts/kabar-synced.json) -> TIDAK butuh anon UPDATE
// policy. Kalau SUPABASE_SERVICE_ROLE_KEY tersedia, baris juga ditandai
// status='masuk-core' di DB (server-side, bypass RLS, aman).
//
// PEMAKAIAN:
//   node scripts/sync-kabar.mjs            # tarik + tampilkan + tandai sudah-sync
//   node scripts/sync-kabar.mjs --dry      # preview saja (tidak ubah ledger/DB)
//   node scripts/sync-kabar.mjs --all      # tampilkan SEMUA (abaikan ledger)
//
// Env dibaca dari perangendis-web/.env.local:
//   NEXT_PUBLIC_SUPABASE_URL        (wajib)
//   NEXT_PUBLIC_SUPABASE_ANON_KEY   (wajib — untuk SELECT)
//   SUPABASE_SERVICE_ROLE_KEY       (opsional — untuk menandai status di DB)
// ============================================================

import { readFileSync, writeFileSync, existsSync, appendFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ENV_PATH = join(__dirname, "..", ".env.local");
const LEDGER_PATH = join(__dirname, "kabar-synced.json");
const LOG_PATH = join(__dirname, "kabar-sync-log.md");

const argv = process.argv.slice(2);
const DRY = argv.includes("--dry");
const ALL = argv.includes("--all");

// ---- 1. Baca env ----
function parseEnv(path) {
  if (!existsSync(path)) {
    console.error(`[sync-kabar] .env.local tidak ditemukan di ${path}`);
    process.exit(1);
  }
  const out = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return out;
}
const env = parseEnv(ENV_PATH);
const URL = env.NEXT_PUBLIC_SUPABASE_URL;
const ANON = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SERVICE = env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || "";
if (!URL || !ANON) {
  console.error("[sync-kabar] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY belum diset di .env.local");
  process.exit(1);
}
const READ_KEY = SERVICE || ANON; // service_role bisa baca semua tanpa RLS

// ---- 2. Ledger lokal (id yang sudah pernah disync) ----
function loadLedger() {
  if (!existsSync(LEDGER_PATH)) return { ids: [] };
  try { return JSON.parse(readFileSync(LEDGER_PATH, "utf8")); }
  catch { return { ids: [] }; }
}
const ledger = loadLedger();
const synced = new Set(ledger.ids || []);

// ---- 3. Tarik updates ----
async function fetchUpdates() {
  const u = `${URL}/rest/v1/updates?select=*&order=created_at.asc`;
  const res = await fetch(u, {
    headers: { apikey: READ_KEY, Authorization: `Bearer ${READ_KEY}` },
  });
  if (!res.ok) {
    throw new Error(`Supabase ${res.status} ${res.statusText}: ${await res.text()}`);
  }
  return res.json();
}

// ---- 4. Tandai status='masuk-core' (hanya kalau service_role ada) ----
async function markMasukCore(id) {
  if (!SERVICE) return false;
  const res = await fetch(`${URL}/rest/v1/updates?id=eq.${id}`, {
    method: "PATCH",
    headers: {
      apikey: SERVICE,
      Authorization: `Bearer ${SERVICE}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ status: "masuk-core" }),
  });
  return res.ok;
}

// ---- 5. Format satu update jadi blok markdown ----
function fmt(u) {
  const lines = [];
  const when = (u.created_at || "").slice(0, 16).replace("T", " ");
  lines.push(`#### [${u.category || "?"}] ${u.author || "?"} — ${when}`);
  if (u.event_date) lines.push(`- **Tanggal kegiatan:** ${u.event_date}`);
  if (u.location) lines.push(`- **Lokasi:** ${u.location}`);
  if (u.link) lines.push(`- **Link:** ${u.link}`);
  lines.push("");
  lines.push((u.body || "").trim());
  lines.push("");
  return lines.join("\n");
}

// ---- main ----
(async () => {
  let rows;
  try { rows = await fetchUpdates(); }
  catch (e) {
    console.error(`[sync-kabar] Gagal tarik dari Supabase: ${e.message}`);
    process.exit(2);
  }

  const fresh = rows.filter((r) => {
    if (ALL) return true;
    if (synced.has(r.id)) return false;
    if (r.status === "masuk-core") return false;
    return true;
  });

  console.log(`\n=== Kabar Gendis Sync ===`);
  console.log(`Total di DB: ${rows.length} · Baru untuk disync: ${fresh.length}` +
    (SERVICE ? " · mode: service_role" : " · mode: anon (ledger-only)") +
    (DRY ? " · [DRY RUN]" : "") + "\n");

  if (fresh.length === 0) {
    console.log("Tidak ada update baru. Core sudah up-to-date dengan Kabar Gendis.\n");
    return;
  }

  const digest = fresh.map(fmt).join("\n---\n\n");
  console.log("------ DIGEST (tinjau, lalu masukkan yang relevan ke Peran-Gendis-Core.md) ------\n");
  console.log(digest);
  console.log("------------------------------------------------------------------------------\n");

  if (DRY) {
    console.log("[DRY RUN] ledger & DB tidak diubah. Jalankan tanpa --dry untuk menandai sudah-sync.\n");
    return;
  }

  // Tandai di DB (opsional) + update ledger
  let marked = 0;
  for (const r of fresh) {
    if (await markMasukCore(r.id)) marked++;
    synced.add(r.id);
  }
  writeFileSync(LEDGER_PATH, JSON.stringify({ ids: [...synced] }, null, 2));

  const stamp = new Date().toISOString().slice(0, 16).replace("T", " ");
  appendFileSync(LOG_PATH,
    `\n## Sync ${stamp} — ${fresh.length} update\n\n${digest}\n`);

  console.log(`✅ ${fresh.length} update ditandai sudah-sync di ledger.` +
    (SERVICE ? ` ${marked} ditandai status='masuk-core' di DB.` : " (status DB tidak diubah — service_role tidak diset.)"));
  console.log(`   Ledger: scripts/kabar-synced.json · Log: scripts/kabar-sync-log.md\n`);
})();
