"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const programs = [
  {
    href: "/program/gemar",
    no: "01",
    name: "GeMar",
    full: "Gendis Mengajar",
    desc: "Bimbel gratis TK–SD · 4 lokasi Yogyakarta",
    stat: "12.956",
    statLabel: "anak butuh akses pendidikan",
    accent: "#d97706",
    featured: true,
  },
  {
    href: "/program/gerak",
    no: "02",
    name: "GeRak",
    full: "Gendis Bergerak",
    desc: "Aksi advokasi sosial · Turun ke lapangan",
    stat: "11.441",
    statLabel: "kasus kekerasan dalam 5 tahun",
    accent: "#d97706",
    featured: false,
  },
  {
    href: "/program/koper",
    no: "03",
    name: "KoPer",
    full: "Komunitas Peran",
    desc: "Ruang aman diskusi · Perempuan & kelompok marginal",
    stat: null,
    statLabel: null,
    accent: "#d97706",
    featured: false,
  },
  {
    href: "/program/catatan",
    no: "04",
    name: "Catatan Gendis",
    full: "Jurnal Aksi Komunitas",
    desc: "Artikel opini & tanggapan isu · Setiap minggu",
    stat: "5",
    statLabel: "edisi terbit",
    accent: "#b45309",
    featured: false,
  },
];

export default function HomePrograms() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#1a0533" }}
    >
      {/* Subtle top edge */}
      <div className="h-px" style={{ background: "rgba(217,119,6,0.15)" }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 pt-24 pb-20">
        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-20 gap-6">
            <div>
              <span
                className="text-xs font-bold tracking-[0.35em] uppercase block mb-4 border-l-2 pl-4"
                style={{ color: "#d97706", borderColor: "#d97706" }}
              >
                Program Kerja
              </span>
              <h2
                className="font-display italic text-pg-cream leading-[0.88]"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}
              >
                Empat cara<br />kami bergerak.
              </h2>
            </div>
            <Link
              href="/program"
              className="text-xs font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 shrink-0 self-end pb-1"
              style={{ color: "rgba(217,119,6,0.6)" }}
            >
              Lihat semua →
            </Link>
          </div>
        </AnimatedSection>

        {/* Program rows — HUGE editorial */}
        <div>
          {programs.map(({ href, no, name, full, desc, stat, statLabel, accent, featured }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: EXPO_OUT }}
              style={{
                filter: hovered !== null && hovered !== i ? "blur(1.5px)" : "none",
                opacity: hovered !== null && hovered !== i ? 0.3 : 1,
                transition: "filter 0.35s ease, opacity 0.35s ease",
              }}
            >
              <Link
                href={href}
                className="group relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-8 border-b overflow-hidden"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Amber left-line sweep */}
                <div
                  className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500"
                  style={{ background: accent }}
                />

                {/* Number */}
                <span
                  className="font-display font-bold shrink-0 w-10 pl-3"
                  style={{ fontSize: "0.75rem", color: "rgba(217,119,6,0.25)", letterSpacing: "-0.01em" }}
                >
                  {no}
                </span>

                {/* HUGE name */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-4 flex-wrap">
                    <h3
                      className="font-display italic leading-none group-hover:translate-x-2 transition-transform duration-500"
                      style={{
                        fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
                        letterSpacing: "-0.03em",
                        color: featured ? accent : "#fef3c7",
                        transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    >
                      {name}
                    </h3>
                    {featured && (
                      <span
                        className="text-[9px] font-bold tracking-[0.3em] uppercase px-2.5 py-1.5 shrink-0"
                        style={{ background: "rgba(217,119,6,0.18)", color: "#d97706" }}
                      >
                        Aktif
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    <span
                      className="text-[10px] uppercase tracking-widest block"
                      style={{ color: "rgba(254,243,199,0.18)" }}
                    >
                      {full}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.06)" }}>·</span>
                    <span
                      className="text-[10px] uppercase tracking-widest"
                      style={{ color: "rgba(254,243,199,0.18)" }}
                    >
                      {desc}
                    </span>
                  </div>
                </div>

                {/* Right: stat + arrow */}
                <div className="flex items-center gap-8 shrink-0">
                  {stat && (
                    <div className="hidden sm:block text-right">
                      <span
                        className="font-display font-bold block"
                        style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)", letterSpacing: "-0.03em", color: accent }}
                      >
                        {stat}
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-widest block leading-tight max-w-[14ch]"
                        style={{ color: "rgba(254,243,199,0.2)" }}
                      >
                        {statLabel}
                      </span>
                    </div>
                  )}
                  <span
                    className="text-xl group-hover:translate-x-2 transition-transform duration-500"
                    style={{ color: accent }}
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
