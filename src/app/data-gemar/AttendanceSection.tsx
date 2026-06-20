"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LOCATIONS, inputCls, labelCls, type Student, type Attendance } from "./constants";

type FormState = "idle" | "loading" | "success" | "error";

export default function AttendanceSection({ refreshToken }: { refreshToken: number }) {
  const [sessionDate, setSessionDate] = useState("");
  const [location, setLocation] = useState("");
  const [roster, setRoster] = useState<Student[]>([]);
  const [present, setPresent] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [recent, setRecent] = useState<Attendance[]>([]);

  // Set tanggal default = hari ini (client-only, hindari hydration mismatch)
  useEffect(() => {
    setSessionDate(new Date().toISOString().slice(0, 10));
  }, []);

  // Muat roster murid saat lokasi berubah
  useEffect(() => {
    if (!location) {
      setRoster([]);
      setPresent({});
      return;
    }
    (async () => {
      const { data } = await supabase
        .from("students")
        .select("*")
        .eq("location", location)
        .order("name", { ascending: true });
      const list = (data as Student[]) || [];
      setRoster(list);
      setPresent(Object.fromEntries(list.map((s) => [s.id, true])));
    })();
  }, [location]);

  const fetchRecent = useCallback(async () => {
    const { data } = await supabase
      .from("attendance")
      .select("*")
      .order("session_date", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(120);
    setRecent((data as Attendance[]) || []);
  }, []);

  useEffect(() => {
    fetchRecent();
  }, [fetchRecent, refreshToken]);

  function toggle(id: string) {
    setPresent((p) => ({ ...p, [id]: !p[id] }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!sessionDate || !location || roster.length === 0) return;
    setStatus("loading");
    const rows = roster.map((s) => ({
      session_date: sessionDate,
      location,
      student_id: s.id,
      student_name: s.name,
      present: !!present[s.id],
    }));
    const { error } = await supabase.from("attendance").insert(rows);
    if (error) {
      setStatus("error");
      return;
    }
    setStatus("success");
    fetchRecent();
    setTimeout(() => setStatus("idle"), 2500);
  }

  const presentCount = roster.filter((s) => present[s.id]).length;

  // Ringkas recent: kelompokkan per (tanggal|lokasi)
  const grouped = Object.values(
    recent.reduce<Record<string, { date: string; location: string; total: number; hadir: number }>>(
      (acc, a) => {
        const key = `${a.session_date}|${a.location}`;
        if (!acc[key]) acc[key] = { date: a.session_date, location: a.location, total: 0, hadir: 0 };
        acc[key].total += 1;
        if (a.present) acc[key].hadir += 1;
        return acc;
      },
      {}
    )
  );

  return (
    <section className="relative max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <form
        onSubmit={handleSave}
        className="p-6 md:p-8 space-y-6"
        style={{ background: "#1a0533", border: "1px solid rgba(217,119,6,0.22)" }}
      >
        <h2 className="font-display text-xl text-pg-cream">Catat Kehadiran</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="a-date" className={labelCls}>Tanggal sesi</label>
            <input
              id="a-date"
              required
              type="date"
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
              className={inputCls}
              style={{ colorScheme: "dark" }}
            />
          </div>
          <div>
            <label htmlFor="a-loc" className={labelCls}>Lokasi</label>
            <select
              id="a-loc"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={inputCls}
              style={{ background: "#0d0118" }}
            >
              <option value="" disabled>Pilih lokasi</option>
              {LOCATIONS.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Checklist murid */}
        {location && (
          roster.length === 0 ? (
            <p className="text-sm text-pg-cream/40">
              Belum ada murid terdaftar di lokasi ini. Tambah dulu di tab Murid.
            </p>
          ) : (
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <span className={labelCls}>Murid hadir</span>
                <span className="text-xs text-pg-gold">{presentCount}/{roster.length} hadir</span>
              </div>
              <ul className="space-y-2">
                {roster.map((s) => {
                  const on = !!present[s.id];
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => toggle(s.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors"
                        style={{
                          background: on ? "rgba(217,119,6,0.12)" : "#0d0118",
                          border: on
                            ? "1px solid rgba(217,119,6,0.45)"
                            : "1px solid rgba(245,230,200,0.1)",
                        }}
                      >
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center"
                          style={{
                            background: on ? "#d97706" : "transparent",
                            border: on ? "none" : "1px solid rgba(245,230,200,0.3)",
                          }}
                        >
                          {on && (
                            <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                              <path d="M3.5 9.5L7 13L14.5 5" stroke="#0d0118" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className={on ? "text-pg-cream" : "text-pg-cream/50"}>{s.name}</span>
                        {s.level && (
                          <span className="ml-auto text-[10px] uppercase tracking-wider text-pg-cream/40">
                            {s.level}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )
        )}

        {status === "error" && (
          <p className="text-sm text-red-400">Gagal menyimpan. Cek koneksi lalu coba lagi.</p>
        )}
        {status === "success" && (
          <p className="text-sm text-pg-gold-light">Kehadiran tersimpan ✓</p>
        )}

        <button
          type="submit"
          disabled={status === "loading" || !location || roster.length === 0}
          className="w-full py-4 bg-pg-gold hover:bg-pg-gold-light disabled:opacity-50 transition-all duration-300 text-pg-darkest text-sm font-bold tracking-wider uppercase"
        >
          {status === "loading" ? "Menyimpan..." : "Simpan Kehadiran"}
        </button>
      </form>

      {/* Ringkasan kehadiran terakhir */}
      <div className="mt-12">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-gold mb-6">
          Kehadiran Terakhir
        </h3>
        {grouped.length === 0 ? (
          <p className="text-sm text-pg-cream/40">Belum ada catatan kehadiran.</p>
        ) : (
          <ul className="space-y-2">
            {grouped.map((g) => (
              <li
                key={`${g.date}|${g.location}`}
                className="flex items-center justify-between px-4 py-3 text-sm"
                style={{ background: "#1a0533" }}
              >
                <div>
                  <span className="text-pg-cream">{g.date}</span>
                  <span className="text-pg-cream/40"> · {g.location}</span>
                </div>
                <span className="shrink-0 ml-3 text-pg-gold">{g.hadir}/{g.total} hadir</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
