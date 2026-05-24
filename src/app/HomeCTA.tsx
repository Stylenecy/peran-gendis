"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const EXPO_OUT = [0.22, 1, 0.36, 1] as const;

export default function HomeCTA() {
  return (
    <section className="relative z-20 max-w-6xl mx-auto px-6 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EXPO_OUT }}
        className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
      >
        {/* Amber glow inside */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-20"
          style={{
            background:
              "radial-gradient(800px circle at 50% 0%, rgba(217,119,6,0.3), transparent 70%)",
          }}
        />

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8 text-xs font-bold tracking-[0.35em] uppercase text-amber-500">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          Bergabung
        </div>

        <h2
          className="font-display font-semibold tracking-tight leading-[1.05] text-pg-cream"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
        >
          Jadilah bagian
          <br />
          <span style={{ color: "#d97706" }}>dari langkah ini.</span>
        </h2>

        <p className="mt-6 text-pg-cream/60 max-w-md mx-auto text-sm md:text-base leading-[1.6]">
          Bergabung sebagai relawan, sponsor, atau pendukung komunitas yang
          bergerak untuk kesetaraan.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <Link
            href="/sponsor"
            className="px-8 py-3.5 text-sm font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#b45309] bg-[#d97706] text-black rounded-full inline-flex items-center gap-2"
          >
            Jadi Sponsor →
          </Link>
          <Link
            href="/program/gemar"
            className="px-8 py-3.5 text-sm font-bold tracking-[0.15em] uppercase rounded-full border transition-all duration-300 hover:bg-white/5"
            style={{ borderColor: "rgba(217,119,6,0.4)", color: "#d97706" }}
          >
            Volunteer GeMar →
          </Link>
          <a
            href="https://instagram.com/peran.gendis"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-sm font-bold tracking-[0.15em] uppercase rounded-full border transition-all duration-300 hover:bg-white/5 hover:text-pg-cream/70"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "rgba(254,243,199,0.35)",
            }}
          >
            @peran.gendis →
          </a>
        </div>

        <p
          className="font-display italic mt-12"
          style={{
            fontSize: "clamp(0.85rem, 1.5vw, 1.2rem)",
            color: "rgba(254,243,199,0.10)",
          }}
        >
          &ldquo;Manisnya Kebersamaan dalam Kesetaraan&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
