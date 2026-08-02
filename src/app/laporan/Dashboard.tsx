"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LOCATIONS } from "../data-gemar/constants";

const rupiah = (n: number) => "Rp" + n.toLocaleString("id-ID");

// Target tahunan — angka statis dari Core (diperbarui manual saat program jalan).
const TARGETS = [
  { label: "Catatan Gendis", current: 5, target: 36, unit: "edisi/th" },
  { label: "GeRak (aksi sosial)", current: 4, target: 5, unit: "/th" },
  { label: "KoPer (reels/audiensi)", current: 3, target: 8, unit: "/th" },
  { label: "Volunteer aktif", current: 16, target: 12, unit: "(lampaui!)" },
  { label: "Lokasi GeMar", current: 5, target: 5, unit: "lokasi" },
] as const;

type Counts = Record<string, number>;

type Data = {
  students: { location: string }[];
  attendance: { session_date: string; location: string; present: boolean }[];
  materials: { subject: string | null }[];
  tentors: { id: string }[];
  tentorAtt: { tentor_name: string }[];
  sessions: { session_date: string; location: string; iuran: number; created_at: string }[];
  updates: { category: string; author: string; created_at: string }[];
  assets: { category: string }[];
};

const empty: Data = {
  students: [],
  attendance: [],
  materials: [],
  tentors: [],
  tentorAtt: [],
  sessions: [],
  updates: [],
  assets: [],
};

export default function Dashboard() {
  const [data, setData] = useState<Data>(empty);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const [students, attendance, materials, tentors, tentorAtt, sessions, updates, assets] =
        await Promise.all([
          supabase.from("students").select("location"),
          supabase.from("attendance").select("session_date,location,present").limit(5000),
          supabase.from("materials").select("subject"),
          supabase.from("tentors").select("id").eq("active", true),
          supabase.from("tentor_attendance").select("tentor_name").limit(5000),
          supabase.from("sessions").select("session_date,location,iuran,created_at").limit(5000),
          supabase.from("updates").select("category,author,created_at").limit(5000),
          supabase.from("assets").select("category"),
        ]);
      setData({
        students: (students.data as Data["students"]) || [],
        attendance: (attendance.data as Data["attendance"]) || [],
        materials: (materials.data as Data["materials"]) || [],
        tentors: (tentors.data as Data["tentors"]) || [],
        tentorAtt: (tentorAtt.data as Data["tentorAtt"]) || [],
        sessions: (sessions.data as Data["sessions"]) || [],
        updates: (updates.data as Data["updates"]) || [],
        assets: (assets.data as Data["assets"]) || [],
      });
      setLoading(false);
    })();
  }, []);

  // ---- GeMar ----
  const totalMurid = data.students.length;
  const muridPerLokasi = LOCATIONS.map((loc) => ({
    loc,
    n: data.students.filter((s) => s.location === loc).length,
  })).filter((x) => x.n > 0);

  const sesiSet = new Set(data.attendance.map((a) => `${a.session_date}|${a.location}`));
  const totalSesi = sesiSet.size;
  const hadirRows = data.attendance.filter((a) => a.present).length;
  const rate = data.attendance.length
    ? Math.round((hadirRows / data.attendance.length) * 100)
    : 0;

  const tentorAktif = data.tentors.length;
  const sesiMengajar = data.tentorAtt.length;
  const perTentor: Counts = {};
  data.tentorAtt.forEach((t) => {
    perTentor[t.tentor_name] = (perTentor[t.tentor_name] || 0) + 1;
  });
  const topTentor = Object.entries(perTentor)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // iuran: ambil baris terbaru per (tanggal|lokasi), lalu jumlahkan
  const latestIuran: Record<string, { iuran: number; created: string }> = {};
  data.sessions.forEach((s) => {
    const key = `${s.session_date}|${s.location}`;
    if (!latestIuran[key] || s.created_at > latestIuran[key].created) {
      latestIuran[key] = { iuran: s.iuran, created: s.created_at };
    }
  });
  const totalIuran = Object.values(latestIuran).reduce((sum, v) => sum + v.iuran, 0);

  const totalMateri = data.materials.length;
  const materiPerMapel: Counts = {};
  data.materials.forEach((m) => {
    const k = m.subject || "Lainnya";
    materiPerMapel[k] = (materiPerMapel[k] || 0) + 1;
  });

  // ---- Tim / Kabar ----
  const totalKabar = data.updates.length;
  const kabarPerKat: Counts = {};
  const kabarPerAuthor: Counts = {};
  data.updates.forEach((u) => {
    kabarPerKat[u.category] = (kabarPerKat[u.category] || 0) + 1;
    kabarPerAuthor[u.author] = (kabarPerAuthor[u.author] || 0) + 1;
  });
  const topAuthor = Object.entries(kabarPerAuthor)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const kabarKat = Object.entries(kabarPerKat).sort((a, b) => b[1] - a[1]);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  const kabar30 = data.updates.filter((u) => new Date(u.created_at) >= cutoff).length;

  // ---- Aset ----
  const totalAset = data.assets.length;

  const headline = [
    { label: "Murid GeMar", value: totalMurid },
    { label: "Sesi terlaksana", value: totalSesi },
    { label: "Tentor aktif", value: tentorAktif },
    { label: "Kehadiran rata-rata", value: rate + "%" },
    { label: "Iuran terkumpul", value: rupiah(totalIuran) },
    { label: "Materi terkumpul", value: totalMateri },
    { label: "Kabar tim", value: totalKabar },
    { label: "Aset tertaut", value: totalAset },
  ];

  if (loading) {
    return (
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
        <p className="text-sm text-pg-ink-mute">Memuat laporan...</p>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16 space-y-14">
      {/* Headline / pride board */}
      <div>
        <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-berry mb-5">
          Sekilas Peran Gendis
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {headline.map((h) => (
            <div
              key={h.label}
              className="p-5"
              style={{ background: "var(--color-pg-paper-2)", border: "1px solid var(--color-pg-paper-3)" }}
            >
              <div
                className="font-display font-black text-pg-ink leading-none"
                style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", letterSpacing: "-0.02em" }}
              >
                {h.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-wider text-pg-ink-mute">
                {h.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GeMar detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BarCard title="Murid per lokasi" rows={muridPerLokasi.map((x) => [x.loc, x.n])} />
        <BarCard
          title="Tentor paling aktif"
          rows={topTentor}
          empty="Belum ada presensi tentor."
          suffix=" sesi"
        />
        <BarCard
          title="Materi per mapel"
          rows={Object.entries(materiPerMapel).sort((a, b) => b[1] - a[1])}
          empty="Belum ada materi."
        />
        <div className="p-6" style={{ background: "var(--color-pg-paper-2)", border: "1px solid rgba(245,230,200,0.08)" }}>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-berry mb-4">
            Akumulasi GeMar
          </h3>
          <ul className="space-y-3 text-sm">
            <Row label="Total sesi-mengajar (tentor)" value={String(sesiMengajar)} />
            <Row label="Total sesi tercatat" value={String(totalSesi)} />
            <Row label="Kehadiran murid rata-rata" value={rate + "%"} />
            <Row label="Iuran operasional terkumpul" value={rupiah(totalIuran)} />
          </ul>
        </div>
      </div>

      {/* Tim / Kabar */}
      <div>
        <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-berry mb-5">
          Aktivitas Tim (Kabar)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BarCard title="Kabar per program" rows={kabarKat} empty="Belum ada kabar." />
          <BarCard
            title="Kontributor paling aktif"
            rows={topAuthor}
            empty="Belum ada kabar."
            suffix=" kabar"
          />
        </div>
        <p className="mt-4 text-xs text-pg-ink-mute">
          {kabar30} kabar dalam 30 hari terakhir · {totalKabar} total.
        </p>
      </div>

      {/* Target tahunan */}
      <div>
        <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-berry mb-2">
          Target Tahunan 2026
        </h2>
        <p className="text-xs text-pg-ink-mute mb-5">
          Angka dari catatan tim (Core) — diperbarui manual saat program jalan.
        </p>
        <div className="space-y-4">
          {TARGETS.map((t) => {
            const pct = Math.min(100, Math.round((t.current / t.target) * 100));
            return (
              <div key={t.label}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-sm text-pg-ink">{t.label}</span>
                  <span className="text-xs text-pg-ink-mute">
                    {t.current}/{t.target} {t.unit}
                  </span>
                </div>
                <div className="h-2 w-full" style={{ background: "rgba(245,230,200,0.08)" }}>
                  <div
                    className="h-full"
                    style={{ width: pct + "%", background: "var(--color-pg-berry)" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-pg-ink-mute leading-relaxed border-t border-pg-paper-3 pt-6">
        Data live ditarik dari modul Murid · Tentor · Kehadiran · Materi · Kabar · Aset.
        Angka membesar otomatis seiring tim mengisi. Iuran = agregat (bukan ledger per orang).
      </p>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-baseline justify-between">
      <span className="text-pg-ink-mute">{label}</span>
      <span className="text-pg-berry font-semibold">{value}</span>
    </li>
  );
}

function BarCard({
  title,
  rows,
  empty,
  suffix = "",
}: {
  title: string;
  rows: [string, number][];
  empty?: string;
  suffix?: string;
}) {
  const max = rows.reduce((m, r) => Math.max(m, r[1]), 0) || 1;
  return (
    <div className="p-6" style={{ background: "var(--color-pg-paper-2)", border: "1px solid rgba(245,230,200,0.08)" }}>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-pg-berry mb-4">{title}</h3>
      {rows.length === 0 ? (
        <p className="text-sm text-pg-ink-mute">{empty || "Belum ada data."}</p>
      ) : (
        <ul className="space-y-3">
          {rows.map(([label, n]) => (
            <li key={label}>
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-sm text-pg-ink-soft truncate pr-2">{label}</span>
                <span className="text-xs text-pg-berry shrink-0">
                  {n}
                  {suffix}
                </span>
              </div>
              <div className="h-1.5 w-full" style={{ background: "rgba(245,230,200,0.07)" }}>
                <div
                  className="h-full"
                  style={{ width: Math.round((n / max) * 100) + "%", background: "var(--color-pg-berry)" }}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
