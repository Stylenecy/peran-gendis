"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { ASSET_CATEGORIES, inputCls, labelCls, type Asset } from "./constants";

type FormState = "idle" | "loading" | "success" | "error";

const emptyForm = { label: "", category: "", url: "", owner: "", note: "" };

export default function AsetSection({
  refreshToken,
  onChange,
}: {
  refreshToken: number;
  onChange: () => void;
}) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loadingList, setLoadingList] = useState(true);
  const [filter, setFilter] = useState<string>("Semua");

  const fetchAssets = useCallback(async () => {
    setLoadingList(true);
    const { data } = await supabase
      .from("assets")
      .select("*")
      .order("category", { ascending: true })
      .order("created_at", { ascending: false });
    setAssets((data as Asset[]) || []);
    setLoadingList(false);
  }, []);

  useEffect(() => {
    fetchAssets();
  }, [fetchAssets, refreshToken]);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("assets").insert([
      {
        label: form.label.trim(),
        category: form.category,
        url: form.url.trim(),
        owner: form.owner.trim() || null,
        note: form.note.trim() || null,
      },
    ]);
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(emptyForm);
    onChange();
    fetchAssets();
    setTimeout(() => setStatus("idle"), 2500);
  }

  const cats = ["Semua", ...ASSET_CATEGORIES];
  const filtered = filter === "Semua" ? assets : assets.filter((a) => a.category === filter);
  const byCategory = ASSET_CATEGORIES.map((c) => ({
    cat: c,
    items: filtered.filter((a) => a.category === c),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
      {/* Form tambah aset */}
      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-8 space-y-6"
        style={{ background: "var(--color-pg-paper-2)", border: "1px solid var(--color-pg-paper-3)" }}
      >
        <div>
          <h2 className="font-display text-xl text-pg-ink">Tambah Tautan / Aset</h2>
          <p className="mt-1.5 text-sm text-pg-ink-mute font-body" style={{ fontWeight: 300 }}>
            Satu pintu ke semua Drive, Sheet, Form, Canva, sosmed. Biar nggak nyari di chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="as-label" className={labelCls}>Nama aset</label>
            <input
              id="as-label"
              required
              type="text"
              placeholder="mis. Sheet Jadwal Mengajar"
              value={form.label}
              onChange={(e) => update("label", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="as-cat" className={labelCls}>Kategori</label>
            <select
              id="as-cat"
              required
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className={inputCls}
              style={{ background: "var(--color-pg-paper)" }}
            >
              <option value="" disabled>Pilih kategori</option>
              {ASSET_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="as-url" className={labelCls}>Link</label>
          <input
            id="as-url"
            required
            type="url"
            placeholder="https://…"
            value={form.url}
            onChange={(e) => update("url", e.target.value)}
            className={inputCls}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="as-owner" className={labelCls}>Penanggung jawab</label>
            <input
              id="as-owner"
              type="text"
              placeholder="mis. PDD / Marel (opsional)"
              value={form.owner}
              onChange={(e) => update("owner", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="as-note" className={labelCls}>Catatan</label>
            <input
              id="as-note"
              type="text"
              placeholder="Konteks singkat (opsional)"
              value={form.note}
              onChange={(e) => update("note", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>

        {status === "error" && (
          <p className="text-sm text-pg-berry-deep">Gagal menyimpan. Cek koneksi lalu coba lagi.</p>
        )}
        {status === "success" && (
          <p className="text-sm text-pg-berry">Aset tersimpan ✓</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-pg-berry hover:bg-pg-berry disabled:opacity-60 transition-all duration-300 text-pg-darkest text-sm font-bold tracking-wider uppercase"
        >
          {status === "loading" ? "Menyimpan..." : "Simpan Aset"}
        </button>
      </form>

      {/* Daftar aset */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-5">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-berry">
            Daftar Aset
          </h3>
          <span className="text-xs text-pg-ink-mute">{assets.length} aset</span>
        </div>

        {/* Filter kategori */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cats.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-wider transition-all duration-200 ${
                  active
                    ? "bg-pg-berry text-pg-darkest"
                    : "text-pg-ink-mute hover:text-pg-ink border border-pg-paper-3"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {loadingList ? (
          <p className="text-sm text-pg-ink-mute">Memuat...</p>
        ) : assets.length === 0 ? (
          <p className="text-sm text-pg-ink-mute">
            Belum ada aset. Tambah di atas, atau jalankan seed-assets.sql untuk pra-isi.
          </p>
        ) : byCategory.length === 0 ? (
          <p className="text-sm text-pg-ink-mute">Tidak ada aset untuk filter ini.</p>
        ) : (
          <div className="space-y-8">
            {byCategory.map((g) => (
              <div key={g.cat}>
                <div className="flex items-baseline gap-3 mb-3 border-l-2 border-pg-berry pl-3">
                  <span className="text-sm font-semibold text-pg-ink">{g.cat}</span>
                  <span className="text-xs text-pg-ink-mute">{g.items.length}</span>
                </div>
                <ul className="space-y-2">
                  {g.items.map((a) => (
                    <li
                      key={a.id}
                      className="flex items-start justify-between gap-3 px-4 py-3"
                      style={{ background: "var(--color-pg-paper-2)" }}
                    >
                      <div className="min-w-0">
                        <a
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-pg-ink hover:text-pg-berry transition-colors"
                        >
                          {a.label} ↗
                        </a>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[11px] text-pg-ink-mute">
                          {a.owner && <span>{a.owner}</span>}
                          {a.note && <span>· {a.note}</span>}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
