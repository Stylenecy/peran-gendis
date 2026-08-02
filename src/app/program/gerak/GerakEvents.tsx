"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const completed = [
  { name: "GeRak × EmpowerHer", loc: "Yayasan Lentera, Surakarta", focus: "Pendampingan anak dengan HIV" },
  { name: "GeRak × Komunitas Resan", loc: "Gunungkidul", focus: "Pembuatan Pojok Buku" },
  { name: "GeRak × Petani Kharisma", loc: "Yogyakarta", focus: "Edukasi pertanian komunitas" },
  { name: "GeRak Diskusi Buku", loc: "Yogyakarta", focus: "Literasi & dialog terbuka" },
];

const planned = [
  'GeRak "Aksi Hari Perempuan"',
  'GeRak "Aksi Buruh"',
  'GeRak "Goes to Museum"',
  'GeRak "Audiensi ke Dinas PPPA"',
  'GeRak "Kelompok Tani Kharisma"',
  'GeRak "Audiensi dengan DPRD DIY"',
  'GeRak × Yayasan Sayap Ibu — Pengajaran Soft & Hard Skill (Juni–Agustus)',
];

export default function GerakEvents() {
  return (
    <>
      {/* Completed events */}
      <section style={{ background: "var(--color-pg-paper-2)" }} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="right" delay={0.1}>
            <div className="mb-14 pb-6 border-b border-pg-paper-3">
              <span className="text-xs tracking-[0.35em] uppercase font-bold block mb-4 border-l-2 pl-4" style={{ color: "var(--color-pg-berry)", borderColor: "var(--color-pg-berry)" }}>
                Sudah Terlaksana
              </span>
              <h2
                className="font-display italic text-pg-ink leading-[0.9]"
                style={{ fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-0.03em" }}
              >
                Aksi yang sudah<br />turun ke lapangan.
              </h2>
            </div>
          </AnimatedSection>

          <div>
            {completed.map(({ name, loc, focus }, i) => (
              <AnimatedSection key={name} direction="up" delay={0.1 + i * 0.07}>
                <motion.div
                  className="relative group grid grid-cols-12 items-center gap-4 py-7 border-b border-pg-paper-3 cursor-default"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500" style={{ background: "var(--color-pg-berry)" }} />

                  {/* Number */}
                  <div className="col-span-1">
                    <span className="font-display text-pg-ink-mute text-lg" style={{ letterSpacing: "-0.02em" }}>
                      0{i + 1}
                    </span>
                  </div>

                  {/* Name */}
                  <div className="col-span-5 md:col-span-6">
                    <p className="font-display italic text-pg-ink text-lg md:text-xl" style={{ letterSpacing: "-0.01em" }}>
                      {name}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="col-span-3 hidden md:block">
                    <p className="text-pg-ink-mute text-sm">{loc}</p>
                  </div>

                  {/* Focus */}
                  <div className="col-span-6 md:col-span-2 text-right">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "var(--color-pg-berry)" }}>
                      {focus.split(" ")[0]}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Planned events */}
      <section style={{ background: "var(--color-pg-paper)" }} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="right" delay={0.1}>
            <div className="mb-14 pb-6 border-b border-pg-paper-3">
              <span className="text-xs tracking-[0.35em] uppercase font-bold block mb-4 border-l-2 pl-4" style={{ color: "var(--color-pg-berry)", borderColor: "var(--color-pg-berry)" }}>
                Pipeline 2026
              </span>
              <h2
                className="font-display italic text-pg-ink leading-[0.9]"
                style={{ fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-0.03em" }}
              >
                Yang akan datang.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {planned.map((item, i) => (
              <AnimatedSection key={item} direction="up" delay={0.1 + i * 0.05}>
                <div className="relative group flex items-center gap-5 py-5 border-b border-pg-paper-3">
                  <div className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500" style={{ background: "var(--color-pg-berry)" }} />
                  <span className="text-xs font-bold shrink-0" style={{ color: "var(--color-pg-berry)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-pg-ink-soft text-sm font-light leading-snug">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
