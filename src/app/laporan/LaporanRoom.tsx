"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InternalGate from "@/components/internal/InternalGate";
import RoomNav from "@/components/internal/RoomNav";
import Dashboard from "./Dashboard";

export default function LaporanRoom() {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("kabar_unlocked") === "1") setUnlocked(true);
    } catch {
      // localStorage tidak tersedia — biarkan gate menangani
    }
    setReady(true);
  }, []);

  if (!ready) {
    return <div style={{ minHeight: "100vh", background: "#0d0118" }} />;
  }

  if (!unlocked) {
    return (
      <InternalGate
        title="Laporan"
        subtitle="Dashboard KPI Peran Gendis. Masukkan passcode untuk membuka."
        onUnlock={() => setUnlocked(true)}
      />
    );
  }

  return (
    <main className="min-h-screen" style={{ background: "#0d0118" }}>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,18,99,0.5) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 md:px-8 pt-28 md:pt-32 pb-4 text-center">
          <RoomNav />
          <span className="block text-pg-gold text-[11px] font-medium uppercase tracking-[0.3em]">
            Ruang Internal
          </span>
          <h1
            className="mt-4 font-display font-black leading-none text-pg-cream"
            style={{ fontSize: "clamp(2.2rem, 6vw, 3.4rem)", letterSpacing: "-0.03em" }}
          >
            Laporan
          </h1>
          <p className="mt-4 font-body font-light text-pg-cream/60 text-sm md:text-base">
            Seberapa membanggakan Peran Gendis — dalam angka, hidup &amp; real.
          </p>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Dashboard />
      </motion.div>
    </main>
  );
}
