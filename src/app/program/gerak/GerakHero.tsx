"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

export default function GerakHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--color-pg-paper)" }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#fbe9f2_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-20 flex flex-col items-center text-center">
        <motion.span
          className="text-xs font-bold tracking-[0.35em] uppercase mb-12 block"
          style={{ color: "var(--color-pg-berry)", borderLeft: "2px solid var(--color-pg-berry)", paddingLeft: "1rem", alignSelf: "flex-start" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          GeRak · Gendis Bergerak
        </motion.span>

        {/* Big stat */}
        <div className="mb-6 relative">
          <div
            className="font-display font-bold text-pg-ink flex items-baseline justify-center"
            style={{ fontSize: "clamp(5rem, 22vw, 18rem)", letterSpacing: "-0.04em", lineHeight: 0.85 }}
          >
            <CountUp end={11441} duration={2.5} />
          </div>
          <motion.div
            className="h-px mx-auto mt-4"
            style={{ background: "var(--color-pg-berry)", maxWidth: "200px" }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.8, duration: 0.8 }}
          />
        </div>

        <motion.p
          className="text-pg-ink-mute text-lg font-light mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          kasus kekerasan perempuan dan anak dalam 5 tahun terakhir
        </motion.p>
        <motion.p
          className="text-[10px] uppercase tracking-widest mb-16"
          style={{ color: "var(--color-pg-berry)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Sumber: Kemen PPPA, 2024
        </motion.p>

        <motion.h1
          className="font-display italic text-pg-ink leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.5rem,7vw,6rem)", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Gendis Bergerak.<br />
          <span style={{ color: "var(--color-pg-berry)" }}>Turun ke lapangan.</span>
        </motion.h1>

        <motion.p
          className="text-pg-ink-mute text-lg font-light max-w-xl leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Aksi sosial nyata yang langsung menyentuh kelompok rentan — minimal 5 kali setiap tahunnya.
        </motion.p>

        {/* Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="px-5 py-2.5 border text-sm font-bold" style={{ borderColor: "var(--color-pg-paper-3)", color: "var(--color-pg-gula)" }}>
            4 Aksi Terlaksana
          </div>
          <div className="px-5 py-2.5 border text-sm font-light text-pg-ink-mute" style={{ borderColor: "var(--color-pg-paper-3)" }}>
            7 Direncanakan 2026
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-20 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="h-8 w-px" style={{ background: "linear-gradient(to bottom, transparent, var(--color-pg-berry))" }} />
          <span className="text-[10px] uppercase tracking-widest" style={{ color: "var(--color-pg-berry)" }}>↓</span>
        </motion.div>
      </div>
    </section>
  );
}
