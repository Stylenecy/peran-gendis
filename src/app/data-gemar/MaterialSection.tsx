"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  SUBJECTS,
  MATERIAL_LEVELS,
  MATERIAL_KINDS,
  inputCls,
  labelCls,
  type Material,
} from "./constants";

type FormState = "idle" | "loading" | "success" | "error";

const emptyForm = {
  title: "",
  subject: "",
  level: "",
  kind: "",
  link: "",
  body: "",
  author: "",
};

export default function MaterialSection({
  refreshToken,
  onChange,
}: {
  refreshToken: number;
  onChange: () => void;
}) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loadingList, setLoadingList] = useState(true);
  const [filter, setFilter] = useState<string>("Semua");

  const fetchMaterials = useCallback(async () => {
    setLoadingList(true);
    const { data } = await supabase
      .from("materials")
      .select("*")
      .order("created_at", { ascending: false });
    setMaterials((data as Material[]) || []);
    setLoadingList(false);
  }, []);

  useEffect(() => {
    fetchMaterials();
  }, [fetchMaterials, refreshToken]);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("materials").insert([
      {
        title: form.title.trim(),
        subject: form.subject || null,
        level: form.level || null,
        kind: form.kind || null,
        link: form.link.trim() || null,
        body: form.body.trim() || null,
        author: form.author.trim() || null,
      },
    ]);
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(emptyForm);
    onChange();
    fetchMaterials();
    setTimeout(() => setStatus("idle"), 2500);
  }

  const filtered =
    filter === "Semua"
      ? materials
      : materials.filter((m) => m.subject === filter);

  return (
    <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
      {/* Form tambah materi */}
      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-8 space-y-6"
        style={{ background: "var(--color-pg-paper-2)", border: "1px solid var(--color-pg-paper-3)" }}
      >
        <div>
          <h2 className="font-display text-xl text-pg-ink">Tambah Materi</h2>
          <p className="mt-1.5 text-sm text-pg-ink-mute font-body" style={{ fontWeight: 300 }}>
            Satu bank materi ajar. Ganti Docs/Canva yang kepecah.
          </p>
        </div>

        <div>
          <label htmlFor="m-title" className={labelCls}>Judul materi</label>
          <input
            id="m-title"
            required
            type="text"
            placeholder="mis. Penjumlahan Bersusun — SD Kelas 1"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            className={inputCls}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label htmlFor="m-subject" className={labelCls}>Mapel</label>
            <select
              id="m-subject"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
              className={inputCls}
              style={{ background: "var(--color-pg-paper)" }}
            >
              <option value="">— pilih</option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="m-level" className={labelCls}>Jenjang</label>
            <select
              id="m-level"
              value={form.level}
              onChange={(e) => update("level", e.target.value)}
              className={inputCls}
              style={{ background: "var(--color-pg-paper)" }}
            >
              <option value="">— pilih</option>
              {MATERIAL_LEVELS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="m-kind" className={labelCls}>Jenis</label>
            <select
              id="m-kind"
              value={form.kind}
              onChange={(e) => update("kind", e.target.value)}
              className={inputCls}
              style={{ background: "var(--color-pg-paper)" }}
            >
              <option value="">— pilih</option>
              {MATERIAL_KINDS.map((k) => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="m-link" className={labelCls}>Link (Canva / Drive / Docs)</label>
          <input
            id="m-link"
            type="url"
            placeholder="https://… (opsional)"
            value={form.link}
            onChange={(e) => update("link", e.target.value)}
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="m-body" className={labelCls}>Isi / catatan tentor</label>
          <textarea
            id="m-body"
            rows={4}
            placeholder="Ringkasan materi, langkah ngajar, atau catatan (opsional)"
            value={form.body}
            onChange={(e) => update("body", e.target.value)}
            className={`${inputCls} resize-none leading-relaxed`}
          />
        </div>

        <div>
          <label htmlFor="m-author" className={labelCls}>Pembuat</label>
          <input
            id="m-author"
            type="text"
            placeholder="Nama kamu (opsional)"
            value={form.author}
            onChange={(e) => update("author", e.target.value)}
            className={inputCls}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-pg-berry-deep">Gagal menyimpan. Cek koneksi lalu coba lagi.</p>
        )}
        {status === "success" && (
          <p className="text-sm text-pg-berry">Materi tersimpan ✓</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-pg-berry hover:bg-pg-berry disabled:opacity-60 transition-all duration-300 text-pg-darkest text-sm font-bold tracking-wider uppercase"
        >
          {status === "loading" ? "Menyimpan..." : "Simpan Materi"}
        </button>
      </form>

      {/* Daftar materi */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-5">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-berry">
            Bank Materi
          </h3>
          <span className="text-xs text-pg-ink-mute">{materials.length} materi</span>
        </div>

        {/* Filter mapel */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["Semua", ...SUBJECTS].map((s) => {
            const active = filter === s;
            return (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-1.5 text-[11px] uppercase tracking-wider transition-all duration-200 ${
                  active
                    ? "bg-pg-berry text-pg-darkest"
                    : "text-pg-ink-mute hover:text-pg-ink border border-pg-paper-3"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>

        {loadingList ? (
          <p className="text-sm text-pg-ink-mute">Memuat...</p>
        ) : filtered.length === 0 ? (
          <p className="text-sm text-pg-ink-mute">
            {materials.length === 0
              ? "Belum ada materi. Tambah di atas — mulai pindahkan dari Docs/Canva."
              : "Tidak ada materi untuk filter ini."}
          </p>
        ) : (
          <ul className="space-y-3">
            {filtered.map((m) => (
              <li
                key={m.id}
                className="p-4 md:p-5"
                style={{ background: "var(--color-pg-paper-2)", border: "1px solid rgba(245,230,200,0.08)" }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-pg-ink">{m.title}</p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-pg-ink-mute">
                      {m.subject && <span className="text-pg-berry">{m.subject}</span>}
                      {m.level && <span>· {m.level}</span>}
                      {m.author && <span>· oleh {m.author}</span>}
                    </div>
                  </div>
                  {m.kind && (
                    <span className="shrink-0 text-[10px] uppercase tracking-wider text-pg-berry border border-pg-berry/25 px-2 py-1">
                      {m.kind}
                    </span>
                  )}
                </div>
                {m.body && (
                  <p className="mt-3 text-sm leading-relaxed text-pg-ink-mute whitespace-pre-line">
                    {m.body}
                  </p>
                )}
                {m.link && (
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs text-pg-berry hover:text-pg-berry transition-colors"
                  >
                    Buka materi ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
