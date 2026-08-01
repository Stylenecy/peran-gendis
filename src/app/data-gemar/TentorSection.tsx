"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LOCATIONS, inputCls, labelCls, type Tentor } from "./constants";

type FormState = "idle" | "loading" | "success" | "error";

const emptyForm = { name: "", contact: "", location: "" };

export default function TentorSection({
  refreshToken,
  onChange,
}: {
  refreshToken: number;
  onChange: () => void;
}) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [tentors, setTentors] = useState<Tentor[]>([]);
  const [loadingList, setLoadingList] = useState(true);

  const fetchTentors = useCallback(async () => {
    setLoadingList(true);
    const { data } = await supabase
      .from("tentors")
      .select("*")
      .order("name", { ascending: true });
    setTentors((data as Tentor[]) || []);
    setLoadingList(false);
  }, []);

  useEffect(() => {
    fetchTentors();
  }, [fetchTentors, refreshToken]);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("tentors").insert([
      {
        name: form.name.trim(),
        contact: form.contact.trim() || null,
        location: form.location || null,
      },
    ]);
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(emptyForm);
    onChange();
    fetchTentors();
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
      {/* Form tambah tentor */}
      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-8 space-y-6"
        style={{ background: "#1a0533", border: "1px solid rgba(217,119,6,0.22)" }}
      >
        <div>
          <h2 className="font-display text-xl text-pg-cream">Tambah Tentor</h2>
          <p className="mt-1.5 text-sm text-pg-cream/50 font-body" style={{ fontWeight: 300 }}>
            Roster relawan pengajar. Dipakai buat presensi di tab Kehadiran.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="t-name" className={labelCls}>Nama tentor</label>
            <input
              id="t-name"
              required
              type="text"
              placeholder="Nama tentor"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="t-loc" className={labelCls}>Lokasi utama</label>
            <select
              id="t-loc"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              className={inputCls}
              style={{ background: "#0d0118" }}
            >
              <option value="">— (opsional)</option>
              {LOCATIONS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="t-contact" className={labelCls}>Kontak</label>
          <input
            id="t-contact"
            type="text"
            placeholder="No HP / IG (opsional)"
            value={form.contact}
            onChange={(e) => update("contact", e.target.value)}
            className={inputCls}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">Gagal menyimpan. Cek koneksi lalu coba lagi.</p>
        )}
        {status === "success" && (
          <p className="text-sm text-pg-gold-light">Tentor tersimpan ✓</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-pg-gold hover:bg-pg-gold-light disabled:opacity-60 transition-all duration-300 text-pg-darkest text-sm font-bold tracking-wider uppercase"
        >
          {status === "loading" ? "Menyimpan..." : "Simpan Tentor"}
        </button>
      </form>

      {/* Daftar tentor */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-6">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-gold">
            Daftar Tentor
          </h3>
          <span className="text-xs text-pg-cream/40">{tentors.length} tentor</span>
        </div>

        {loadingList ? (
          <p className="text-sm text-pg-cream/40">Memuat...</p>
        ) : tentors.length === 0 ? (
          <p className="text-sm text-pg-cream/40">Belum ada tentor. Tambah di atas.</p>
        ) : (
          <ul className="space-y-2">
            {tentors.map((t) => (
              <li
                key={t.id}
                className="flex items-center justify-between px-4 py-3 text-sm"
                style={{ background: "#1a0533" }}
              >
                <div>
                  <span className="text-pg-cream">{t.name}</span>
                  {t.contact && <span className="text-pg-cream/40"> · {t.contact}</span>}
                </div>
                {t.location && (
                  <span className="shrink-0 ml-3 text-[10px] uppercase tracking-wider text-pg-gold border border-pg-gold/30 px-2 py-1">
                    {t.location}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
