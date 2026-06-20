import { createClient } from "@supabase/supabase-js";

// Toleran dua nama env: ANON_KEY (dipakai di .env.local lokal) & PUBLISHABLE_KEY
// (dipakai di Vercel). Baca keduanya supaya jalan di prod maupun lokal.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

// Placeholder fallback: kalau env belum ada, import TIDAK meng-crash SSR (hindari
// 500 satu halaman). Operasi DB akan gagal di level form (sudah ditangani per-form),
// bukan men-crash render halaman.
export const supabase = createClient(
  url || "https://placeholder.supabase.co",
  key || "placeholder-key"
);

export const supabaseReady = Boolean(url && key);
