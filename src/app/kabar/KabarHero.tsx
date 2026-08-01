"use client";
import { motion } from "framer-motion";
import RoomNav from "@/components/internal/RoomNav";

export default function KabarHero() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 py-24 md:px-12"
      style={{ background: "#0d0118" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 40%, rgba(59,18,99,0.55) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <RoomNav />
        {/* Small amber label */}
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="block text-pg-gold text-[11px] font-medium uppercase tracking-[0.3em] md:text-xs"
        >
          Ruang Internal — Tim Peran Gendis
        </motion.span>

        {/* Big display heading */}
        <div className="relative mt-6 inline-block">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="font-display font-black leading-none text-pg-cream"
            style={{
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Kabar Gendis
          </motion.h1>

          {/* Amber underline accent */}
          <motion.div
            className="absolute -bottom-3 left-0 h-0.5 bg-pg-gold"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
          />
        </div>

        {/* Strong tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-10 font-display italic text-pg-cream-warm leading-snug"
          style={{ fontSize: "clamp(1.2rem, 3vw, 1.9rem)" }}
        >
          Satu tempat. Semua kabar.{" "}
          <span className="text-pg-gold not-italic">Tidak ada yang hilang.</span>
        </motion.p>

        {/* Warm explainer for the team */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          className="mt-7 max-w-xl font-body font-light text-pg-cream/60 leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)" }}
        >
          Info penting sering tenggelam di obrolan grup WA — ke-scroll, lupa, hilang.
          Di sini kita cukup menuliskannya sekali. Satu rumah untuk setiap kabar,
          keputusan, dan agenda tim, supaya tidak ada lagi yang terlewat.
        </motion.p>
      </div>
    </section>
  );
}
