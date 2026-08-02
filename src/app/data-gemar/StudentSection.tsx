"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LOCATIONS, LEVELS, inputCls, labelCls, type Student } from "./constants";

type FormState = "idle" | "loading" | "success" | "error";

const emptyForm = { name: "", location: "", level: "", guardian: "", note: "" };

export default function StudentSection({
  refreshToken,
  onChange,
}: {
  refreshToken: number;
  onChange: () => void;
}) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [students, setStudents] = useState<Student[]>([]);
  const [loadingList, setLoadingList] = useState(true);

  const fetchStudents = useCallback(async () => {
    setLoadingList(true);
    const { data } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });
    setStudents((data as Student[]) || []);
    setLoadingList(false);
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents, refreshToken]);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("students").insert([
      {
        name: form.name.trim(),
        location: form.location,
        level: form.level || null,
        guardian: form.guardian.trim() || null,
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
    fetchStudents();
    setTimeout(() => setStatus("idle"), 2500);
  }

  const byLocation = LOCATIONS.map((loc) => ({
    loc,
    items: students.filter((s) => s.location === loc),
  }));

  return (
    <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
      {/* Form tambah murid */}
      <form
        onSubmit={handleSubmit}
        className="p-6 md:p-8 space-y-6"
        style={{ background: "var(--color-pg-paper-2)", border: "1px solid var(--color-pg-paper-3)" }}
      >
        <h2 className="font-display text-xl text-pg-ink">Tambah Murid</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="s-name" className={labelCls}>Nama murid</label>
            <input
              id="s-name"
              required
              type="text"
              placeholder="Nama murid"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="s-loc" className={labelCls}>Lokasi</label>
            <select
              id="s-loc"
              required
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              className={inputCls}
              style={{ background: "var(--color-pg-paper)" }}
            >
              <option value="" disabled>Pilih lokasi</option>
              {LOCATIONS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="s-level" className={labelCls}>Jenjang</label>
            <select
              id="s-level"
              value={form.level}
              onChange={(e) => update("level", e.target.value)}
              className={inputCls}
              style={{ background: "var(--color-pg-paper)" }}
            >
              <option value="">— (opsional)</option>
              {LEVELS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="s-guardian" className={labelCls}>Ortu / Wali</label>
            <input
              id="s-guardian"
              type="text"
              placeholder="Nama ortu/wali (opsional)"
              value={form.guardian}
              onChange={(e) => update("guardian", e.target.value)}
              className={inputCls}
            />
          </div>
        </div>

        <div>
          <label htmlFor="s-note" className={labelCls}>Catatan</label>
          <input
            id="s-note"
            type="text"
            placeholder="Catatan (opsional)"
            value={form.note}
            onChange={(e) => update("note", e.target.value)}
            className={inputCls}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-pg-berry-deep">Gagal menyimpan. Cek koneksi lalu coba lagi.</p>
        )}
        {status === "success" && (
          <p className="text-sm text-pg-berry">Murid tersimpan ✓</p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-4 bg-pg-berry hover:bg-pg-berry disabled:opacity-60 transition-all duration-300 text-pg-darkest text-sm font-bold tracking-wider uppercase"
        >
          {status === "loading" ? "Menyimpan..." : "Simpan Murid"}
        </button>
      </form>

      {/* Daftar murid per lokasi */}
      <div className="mt-12">
        <div className="flex items-baseline justify-between mb-6">
          <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-berry">
            Daftar Murid
          </h3>
          <span className="text-xs text-pg-ink-mute">{students.length} murid</span>
        </div>

        {loadingList ? (
          <p className="text-sm text-pg-ink-mute">Memuat...</p>
        ) : students.length === 0 ? (
          <p className="text-sm text-pg-ink-mute">Belum ada murid. Tambah di atas.</p>
        ) : (
          <div className="space-y-8">
            {byLocation
              .filter((g) => g.items.length > 0)
              .map((g) => (
                <div key={g.loc}>
                  <div className="flex items-baseline gap-3 mb-3 border-l-2 border-pg-berry pl-3">
                    <span className="text-sm font-semibold text-pg-ink">{g.loc}</span>
                    <span className="text-xs text-pg-ink-mute">{g.items.length}</span>
                  </div>
                  <ul className="space-y-2">
                    {g.items.map((s) => (
                      <li
                        key={s.id}
                        className="flex items-center justify-between px-4 py-3 text-sm"
                        style={{ background: "var(--color-pg-paper-2)" }}
                      >
                        <div>
                          <span className="text-pg-ink">{s.name}</span>
                          {s.guardian && (
                            <span className="text-pg-ink-mute"> · wali: {s.guardian}</span>
                          )}
                          {s.note && (
                            <span className="text-pg-ink-mute"> · {s.note}</span>
                          )}
                        </div>
                        {s.level && (
                          <span className="shrink-0 ml-3 text-[10px] uppercase tracking-wider text-pg-berry border border-pg-berry/25 px-2 py-1">
                            {s.level}
                          </span>
                        )}
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
