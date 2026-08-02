"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DataGate from "./DataGate";
import StudentSection from "./StudentSection";
import AttendanceSection from "./AttendanceSection";
import MaterialSection from "./MaterialSection";
import TentorSection from "./TentorSection";
import RoomNav from "@/components/internal/RoomNav";

type Tab = "murid" | "tentor" | "kehadiran" | "materi";

export default function DataRoom() {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [tab, setTab] = useState<Tab>("murid");
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("kabar_unlocked") === "1") setUnlocked(true);
    } catch {
      // localStorage tidak tersedia — biarkan gate menangani
    }
    setReady(true);
  }, []);

  if (!ready) {
    return <div style={{ minHeight: "100vh", background: "var(--color-pg-paper)" }} />;
  }

  if (!unlocked) {
    return <DataGate onUnlock={() => setUnlocked(true)} />;
  }

  const tabs: { key: Tab; label: string }[] = [
    { key: "murid", label: "Murid" },
    { key: "tentor", label: "Tentor" },
    { key: "kehadiran", label: "Kehadiran" },
    { key: "materi", label: "Materi" },
  ];

  return (
    <main className="min-h-screen" style={{ background: "var(--color-pg-paper)" }}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #fbe9f2 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 pt-28 md:pt-32 pb-6 text-center">
          <RoomNav />
          <span className="block text-pg-berry text-[11px] font-medium uppercase tracking-[0.3em]">
            Ruang Internal
          </span>
          <h1
            className="mt-4 font-display font-black leading-none text-pg-ink"
            style={{ fontSize: "clamp(2.2rem, 6vw, 3.4rem)", letterSpacing: "-0.03em" }}
          >
            Data GeMar
          </h1>
          <p className="mt-4 font-body font-light text-pg-ink-mute text-sm md:text-base">
            Murid, tentor, kehadiran &amp; materi tiap lokasi. Biar tumbuh kembang kelas kelihatan.
          </p>
        </div>

        {/* Tabs */}
        <div className="relative max-w-3xl mx-auto px-6 md:px-8 flex justify-center gap-2 pb-2">
          {tabs.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  active
                    ? "bg-pg-berry text-pg-darkest"
                    : "text-pg-ink-mute hover:text-pg-ink border border-pg-paper-3"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </section>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {tab === "murid" && (
          <StudentSection
            refreshToken={refreshToken}
            onChange={() => setRefreshToken((t) => t + 1)}
          />
        )}
        {tab === "tentor" && (
          <TentorSection
            refreshToken={refreshToken}
            onChange={() => setRefreshToken((t) => t + 1)}
          />
        )}
        {tab === "kehadiran" && <AttendanceSection refreshToken={refreshToken} />}
        {tab === "materi" && (
          <MaterialSection
            refreshToken={refreshToken}
            onChange={() => setRefreshToken((t) => t + 1)}
          />
        )}
      </motion.div>
    </main>
  );
}
