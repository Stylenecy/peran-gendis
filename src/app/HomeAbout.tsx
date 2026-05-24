"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "@/components/CountUp";
import AnimatedSection from "@/components/AnimatedSection";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const stats = [
  { end: 4, label: "Program Kerja", suffix: "" },
  { end: 4, label: "Lokasi GeMar", suffix: "" },
  { end: 2026, label: "Tahun Berdiri", duration: 1.5 },
];

function StatItem({ end, label, duration = 1.8, index }: { end: number; label: string; duration?: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: EXPO_OUT }}
      className="py-10 pr-10 border-r last:border-r-0 first:pl-0"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div
        className="font-display font-bold leading-none"
        style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", letterSpacing: "-0.04em", color: "#d97706" }}
      >
        {inView ? <CountUp end={end} duration={duration} /> : "0"}
      </div>
      <span className="text-[10px] uppercase tracking-[0.25em] text-pg-cream/30 block mt-3">
        {label}
      </span>
    </motion.div>
  );
}

export default function HomeAbout() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#0d0118" }}
    >
      {/* Amber radial warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(217,119,6,0.07) 0%, transparent 65%)" }}
      />

      {/* Giant watermark */}
      <span
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-display font-bold italic select-none pointer-events-none leading-none"
        style={{
          fontSize: "clamp(14rem, 40vw, 36rem)",
          letterSpacing: "-0.06em",
          color: "rgba(217,119,6,0.035)",
          whiteSpace: "nowrap",
        }}
        aria-hidden
      >
        GENDIS
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 md:px-20 pt-28 pb-32">
        {/* Label */}
        <AnimatedSection direction="left">
          <span
            className="text-xs font-bold tracking-[0.35em] uppercase block mb-14 border-l-2 pl-4"
            style={{ color: "#d97706", borderColor: "#d97706" }}
          >
            Tentang Kami
          </span>
        </AnimatedSection>

        {/* MASSIVE manifesto headline */}
        <div className="mb-20 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: EXPO_OUT }}
            className="font-display italic text-pg-cream leading-[0.85]"
            style={{ fontSize: "clamp(3.8rem, 10vw, 9rem)", letterSpacing: "-0.04em" }}
          >
            Kami tidak<br />
            hanya bicara.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.08, ease: EXPO_OUT }}
            className="font-display italic leading-[0.85]"
            style={{ fontSize: "clamp(3.8rem, 10vw, 9rem)", letterSpacing: "-0.04em", color: "#d97706" }}
          >
            Kami bergerak.
          </motion.h2>
        </div>

        {/* Stats row — horizontal editorial strip */}
        <div
          className="grid grid-cols-3 border-t border-b mb-24"
          style={{ borderColor: "rgba(217,119,6,0.18)" }}
        >
          {stats.map(({ end, label, duration }, i) => (
            <StatItem key={label} end={end} label={label} duration={duration} index={i} />
          ))}
        </div>

        {/* 2-col body */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <AnimatedSection direction="left" delay={0.05}>
            <p className="text-pg-cream/50 text-xl leading-relaxed">
              Kami hadir sebagai{" "}
              <span style={{ color: "#d97706" }}>ruang belajar bersama</span>{" "}
              sekaligus platform aksi nyata — mengadvokasi isu ketimpangan
              dan ketidaksetaraan sosial di sekitar kita.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.12}>
            <p className="text-pg-cream/30 text-lg leading-relaxed mb-10">
              Didirikan awal 2026 oleh empat perempuan mantan anggota SriKandi
              UGM yang percaya bahwa langkah kecil bisa menjadi awal perubahan
              lebih baik.
            </p>
            <Link
              href="/tentang"
              className="text-sm font-bold tracking-[0.25em] uppercase inline-flex items-center gap-3 transition-all duration-300 hover:translate-x-1.5"
              style={{ color: "#d97706" }}
            >
              Pelajari lebih lanjut →
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
