"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

export default function CatatanHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#0d0118" }}
    >
      {/* Warmer glow — bronze/amber, not purple */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(180,83,9,0.3) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col items-center text-center">
        <motion.span
          className="text-xs font-bold tracking-[0.35em] uppercase mb-12 block"
          style={{ color: "#b45309", borderLeft: "2px solid #b45309", paddingLeft: "1rem", alignSelf: "flex-start" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Catatan Gendis · Jurnal Aksi
        </motion.span>

        {/* Big stat */}
        <div className="mb-6 relative">
          <div
            className="font-display font-bold text-pg-cream flex items-baseline justify-center"
            style={{ fontSize: "clamp(5rem, 22vw, 18rem)", letterSpacing: "-0.04em", lineHeight: 0.85 }}
          >
            <CountUp end={5} duration={1.5} />
          </div>
          <motion.div
            className="h-px mx-auto mt-4"
            style={{ background: "#b45309", maxWidth: "200px" }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </div>

        <motion.p
          className="text-pg-cream/60 text-lg font-light mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          edisi terbit — dan terus bertambah setiap minggu
        </motion.p>
        <motion.p
          className="text-[10px] uppercase tracking-widest mb-16"
          style={{ color: "rgba(180,83,9,0.7)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Di Instagram @peran.gendis
        </motion.p>

        <motion.h1
          className="font-display italic text-pg-cream leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.5rem,7vw,6rem)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Isu sosial layak<br />
          <span style={{ color: "#b45309" }}>dicatat. Dibaca.</span>
        </motion.h1>

        <motion.p
          className="text-pg-cream/55 text-lg font-light max-w-xl leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Artikel opini, tanggapan isu, dan catatan advokasi — setiap minggu, dari perspektif komunitas yang turun ke lapangan.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="px-5 py-2.5 border text-sm font-bold" style={{ borderColor: "rgba(180,83,9,0.5)", color: "#d97706" }}>
            Artikel Opini
          </div>
          <div className="px-5 py-2.5 border text-sm font-light text-pg-cream/50" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            Tanggapan Isu
          </div>
          <div className="px-5 py-2.5 border text-sm font-light text-pg-cream/50" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
            Catatan Advokasi
          </div>
        </motion.div>

        <motion.div
          className="mt-20 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="h-8 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(180,83,9,0.5))" }} />
          <span className="text-[10px] uppercase tracking-widest" style={{ color: "rgba(180,83,9,0.6)" }}>↓</span>
        </motion.div>
      </div>
    </section>
  );
}
