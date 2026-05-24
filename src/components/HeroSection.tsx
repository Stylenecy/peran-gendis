"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EXPO_OUT = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <style>{`
        @keyframes shiny-amber {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .shiny-amber {
          background: linear-gradient(
            to right,
            #0d0118 0%,
            #b45309 15%,
            #d97706 35%,
            #fef3c7 50%,
            #d97706 65%,
            #b45309 85%,
            #0d0118 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: shiny-amber 6s linear infinite;
        }
      `}</style>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.2 }}
        className="inline-flex items-center gap-3 mb-6"
      >
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/90">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Komunitas Advokasi Gender · Anak · Disabilitas
        </span>
        <span className="px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] font-medium tracking-wide text-white/50 uppercase bg-white/5">
          Aktif 2026
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.3 }}
        className="font-display font-black text-pg-cream leading-[1.05]"
        style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.04em" }}
      >
        Untuk perempuan.
        <br />
        Untuk anak.
        <br />
        <span className="shiny-amber select-none inline-block pb-2">
          Untuk kesetaraan.
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 text-pg-cream/65 max-w-lg text-base md:text-lg leading-[1.6]"
      >
        Perempuan, Anak, Gender, dan Disabilitas — empat isu yang kami jadikan
        alasan untuk bergerak bersama.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Link
          href="/tentang"
          className="px-7 py-3.5 rounded-full bg-pg-cream text-pg-dark font-semibold text-sm hover:bg-pg-gold-light transition-colors"
        >
          Kenali Kami
        </Link>
        <Link
          href="/sponsor"
          className="px-7 py-3.5 rounded-full border border-pg-cream/20 text-pg-cream/80 text-sm hover:bg-white/5 hover:text-pg-cream transition-colors"
        >
          Dukung Gerakan →
        </Link>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-white/25">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
