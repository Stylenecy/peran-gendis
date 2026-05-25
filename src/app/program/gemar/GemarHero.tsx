"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/CountUp";

export default function GemarHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: "#0d0118" }}
    >
      {/* Top bar */}
      <motion.div
        className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <Link
          href="/program"
          className="text-pg-cream/30 text-[11px] tracking-[0.25em] uppercase hover:text-pg-cream/65 transition-colors"
        >
          ← Program Kerja
        </Link>
        <span className="text-pg-gold/70 text-[10px] font-medium tracking-[0.2em] uppercase border border-pg-gold/20 px-3 py-1">
          Mulai 17 Mei 2026
        </span>
      </motion.div>

      {/* Centre — the number */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,18,99,0.6) 0%, transparent 70%)",
          }}
        />

        {/* Program label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mb-8 md:mb-12"
        >
          <span className="text-pg-gold text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
            Gendis Mengajar
          </span>
        </motion.div>

        {/* The number */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="leading-none"
          >
            <CountUp
              end={12956}
              duration={2.2}
              className="font-display font-black text-pg-cream"
              style={{
                fontSize: "clamp(5rem, 22vw, 18rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            />
          </motion.div>

          {/* Amber underline */}
          <motion.div
            className="absolute -bottom-2 left-0 h-0.5 bg-pg-gold"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          />
        </div>

        {/* Descriptor */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="mt-8 md:mt-10 max-w-lg"
        >
          <p
            className="font-display italic text-pg-cream-warm leading-snug"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
          >
            anak di Yogyakarta tidak bersekolah
          </p>
          <p className="mt-3 text-[11px] tracking-wider text-pg-cream/35">
            Sumber: BPMP DIY &amp; BPS, 2025 · Usia 7–15 tahun
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
          className="mt-14 md:mt-20 max-w-2xl"
        >
          <p
            className="font-display text-pg-cream leading-relaxed"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", fontWeight: 400 }}
          >
            Kami tidak bisa mengubah angka itu sendirian.
            <br />
            <span className="text-pg-gold">Tapi kita bisa mulai dari satu anak.</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center pb-10 gap-3"
      >
        <span className="text-pg-cream/25 text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, #d97706, transparent)" }}
        />
      </motion.div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
        className="absolute right-6 bottom-24 md:right-12 md:bottom-28 text-right"
      >
        <div className="border-l-2 border-pg-gold pl-4">
          <p className="text-pg-gold text-[10px] tracking-wider uppercase">
            Sesi pertama
          </p>
          <p className="font-display font-semibold text-pg-cream-warm text-sm">
            17 Mei 2026
          </p>
          <p className="text-pg-cream/40 text-[11px]">3 lokasi aktif</p>
        </div>
      </motion.div>
    </section>
  );
}
