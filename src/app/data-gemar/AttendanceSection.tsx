"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  LOCATIONS,
  IURAN_DEFAULT,
  inputCls,
  labelCls,
  type Student,
  type Attendance,
  type Tentor,
} from "./constants";

type FormState = "idle" | "loading" | "success" | "error";

const rupiah = (n: number) => "Rp" + n.toLocaleString("id-ID");

export default function AttendanceSection({ refreshToken }: { refreshToken: number }) {
  const [sessionDate, setSessionDate] = useState("");
  const [location, setLocation] = useState("");
  const [roster, setRoster] = useState<Student[]>([]);
  const [present, setPresent] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [recent, setRecent] = useState<Attendance[]>([]);

  // Tentor + iuran
  const [tentors, setTentors] = useState<Tentor[]>([]);
  const [tentorPresent, setTentorPresent] = useState<Record<string, boolean>>({});
  const [iuran, setIuran] = useState("");
  const [iuranTouched, setIuranTouched] = useState(false);

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

  // Muat semua tentor aktif sekali (tentor bisa ngajar lintas lokasi)
  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("tentors")
        .select("*")
        .eq("active", true)
        .order("name", { ascending: true });
      const list = (data as Tentor[]) || [];
      setTentors(list);
      setTentorPresent(Object.fromEntries(list.map((t) => [t.id, false])));
    })();
  }, [refreshToken]);

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
  function toggleTentor(id: string) {
    setTentorPresent((p) => ({ ...p, [id]: !p[id] }));
  }

  const presentCount = roster.filter((s) => present[s.id]).length;
  const tentorPresentCount = tentors.filter((t) => tentorPresent[t.id]).length;

  // Iuran tersaran = jumlah tentor hadir × Rp15.000 (boleh dioverride)
  const suggestedIuran = tentorPresentCount * IURAN_DEFAULT;
  const iuranValue = iuranTouched ? iuran : suggestedIuran ? String(suggestedIuran) : "";

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!sessionDate || !location || roster.length === 0) return;
    setStatus("loading");

    // 1) Kehadiran murid (semua murid lokasi ini, dengan flag present)
    const studentRows = roster.map((s) => ({
      session_date: sessionDate,
      location,
      student_id: s.id,
      student_name: s.name,
      present: !!present[s.id],
    }));
    const { error: e1 } = await supabase.from("attendance").insert(studentRows);
    if (e1) {
      setStatus("error");
      return;
    }

    // 2) Presensi tentor — hanya yang hadir (KPI keaktifan)
    const tentorRows = tentors
      .filter((t) => tentorPresent[t.id])
      .map((t) => ({
        session_date: sessionDate,
        location,
        tentor_id: t.id,
        tentor_name: t.name,
        present: true,
      }));
    if (tentorRows.length > 0) {
      await supabase.from("tentor_attendance").insert(tentorRows);
    }

    // 3) Meta sesi + iuran agregat (insert-only; dashboard ambil yg terbaru)
    const iuranNum = parseInt(iuranValue || "0", 10) || 0;
    await supabase
      .from("sessions")
      .insert([{ session_date: sessionDate, location, iuran: iuranNum }]);

    setStatus("success");
    setIuranTouched(false);
    setIuran("");
    setTentorPresent(Object.fromEntries(tentors.map((t) => [t.id, false])));
    fetchRecent();
    setTimeout(() => setStatus("idle"), 2500);
  }

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
        style={{ background: "var(--color-pg-paper-2)", border: "1px solid var(--color-pg-paper-3)" }}
      >
        <h2 className="font-display text-xl text-pg-ink">Catat Sesi</h2>

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
              style={{ background: "var(--color-pg-paper)" }}
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
            <p className="text-sm text-pg-ink-mute">
              Belum ada murid terdaftar di lokasi ini. Tambah dulu di tab Murid.
            </p>
          ) : (
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <span className={labelCls}>Murid hadir</span>
                <span className="text-xs text-pg-berry">{presentCount}/{roster.length} hadir</span>
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
                          background: on ? "var(--color-pg-berry-soft)" : "var(--color-pg-paper)",
                          border: on
                            ? "1px solid var(--color-pg-paper-3)"
                            : "1px solid rgba(245,230,200,0.1)",
                        }}
                      >
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center"
                          style={{
                            background: on ? "var(--color-pg-berry)" : "transparent",
                            border: on ? "none" : "1px solid rgba(245,230,200,0.3)",
                          }}
                        >
                          {on && (
                            <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                              <path d="M3.5 9.5L7 13L14.5 5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className={on ? "text-pg-ink" : "text-pg-ink-mute"}>{s.name}</span>
                        {s.level && (
                          <span className="ml-auto text-[10px] uppercase tracking-wider text-pg-ink-mute">
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

        {/* Checklist tentor */}
        {location && (
          <div>
            <div className="flex items-baseline justify-between mb-3">
              <span className={labelCls}>Tentor yang ngajar</span>
              <span className="text-xs text-pg-berry">{tentorPresentCount} tentor</span>
            </div>
            {tentors.length === 0 ? (
              <p className="text-sm text-pg-ink-mute">
                Belum ada tentor. Tambah dulu di tab Tentor.
              </p>
            ) : (
              <ul className="space-y-2">
                {tentors.map((t) => {
                  const on = !!tentorPresent[t.id];
                  return (
                    <li key={t.id}>
                      <button
                        type="button"
                        onClick={() => toggleTentor(t.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors"
                        style={{
                          background: on ? "var(--color-pg-berry-soft)" : "var(--color-pg-paper)",
                          border: on
                            ? "1px solid var(--color-pg-paper-3)"
                            : "1px solid rgba(245,230,200,0.1)",
                        }}
                      >
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center"
                          style={{
                            background: on ? "var(--color-pg-berry)" : "transparent",
                            border: on ? "none" : "1px solid rgba(245,230,200,0.3)",
                          }}
                        >
                          {on && (
                            <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                              <path d="M3.5 9.5L7 13L14.5 5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className={on ? "text-pg-ink" : "text-pg-ink-mute"}>{t.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}

        {/* Iuran terkumpul */}
        {location && (
          <div>
            <label htmlFor="a-iuran" className={labelCls}>Iuran terkumpul (Rp)</label>
            <input
              id="a-iuran"
              type="number"
              min={0}
              step={1000}
              inputMode="numeric"
              placeholder="0"
              value={iuranValue}
              onChange={(e) => {
                setIuran(e.target.value);
                setIuranTouched(true);
              }}
              className={inputCls}
            />
            <p className="mt-2 text-[11px] text-pg-ink-mute">
              Tersaran {rupiah(suggestedIuran)} ({tentorPresentCount} tentor × {rupiah(IURAN_DEFAULT)}). Boleh diubah.
            </p>
          </div>
        )}

        {status === "error" && (
          <p className="text-sm text-pg-berry-deep">Gagal menyimpan. Cek koneksi lalu coba lagi.</p>
        )}
        {status === "success" && (
          <p className="text-sm text-pg-berry">Sesi tersimpan ✓</p>
        )}

        <button
          type="submit"
          disabled={status === "loading" || !location || roster.length === 0}
          className="w-full py-4 bg-pg-berry hover:bg-pg-berry disabled:opacity-50 transition-all duration-300 text-pg-darkest text-sm font-bold tracking-wider uppercase"
        >
          {status === "loading" ? "Menyimpan..." : "Simpan Sesi"}
        </button>
      </form>

      {/* Ringkasan kehadiran terakhir */}
      <div className="mt-12">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-berry mb-6">
          Kehadiran Terakhir
        </h3>
        {grouped.length === 0 ? (
          <p className="text-sm text-pg-ink-mute">Belum ada catatan kehadiran.</p>
        ) : (
          <ul className="space-y-2">
            {grouped.map((g) => (
              <li
                key={`${g.date}|${g.location}`}
                className="flex items-center justify-between px-4 py-3 text-sm"
                style={{ background: "var(--color-pg-paper-2)" }}
              >
                <div>
                  <span className="text-pg-ink">{g.date}</span>
                  <span className="text-pg-ink-mute"> · {g.location}</span>
                </div>
                <span className="shrink-0 ml-3 text-pg-berry">{g.hadir}/{g.total} hadir</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
