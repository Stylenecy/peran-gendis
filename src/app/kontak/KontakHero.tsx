"use client";

import { motion } from "framer-motion";

const EXPO_OUT = [0.22, 1, 0.36, 1] as const;
const TEAL = "#06b6d4";
const TEAL_GLOW = "rgba(6,182,212,0.1)";
const TEAL_DIM = "rgba(6,182,212,0.50)";
const TEAL_LINE = "rgba(6,182,212,0.2)";

export default function KontakHero() {
  return (
    <section className="relative z-10 w-full min-h-[75vh] flex flex-col justify-center overflow-hidden">
      {/* Teal radial — full viewport width */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 15% 60%, ${TEAL_GLOW} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-6xl mx-auto w-full px-6 pt-28 pb-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.15 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Kontak
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-black text-pg-cream leading-[0.9]"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 7.5rem)",
            letterSpacing: "-0.04em",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.25 }}
        >
          Kita bisa
          <br />
          <span style={{ color: TEAL }}>ngobrol.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-8 text-pg-cream/55 text-base md:text-lg leading-[1.6] max-w-md"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EXPO_OUT, delay: 0.4 }}
        >
          Mau daftar GeMar, jadi volunteer, jadi sponsor, atau sekadar ingin
          tahu lebih banyak — kami terbuka.
        </motion.p>

        <motion.p
          className="mt-4 text-[11px] uppercase tracking-widest"
          style={{ color: TEAL_DIM }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Bukan birokrasi. Hanya ngobrol.
        </motion.p>

        <motion.div
          className="mt-16 h-px"
          style={{ background: TEAL_LINE }}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />
      </div>
    </section>
  );
}
