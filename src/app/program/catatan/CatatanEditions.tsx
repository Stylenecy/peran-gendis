"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const editions = [
  {
    no: "01",
    title: "Kemiskinan Struktural dan Disabilitas",
    theme: "Disabilitas · Kemiskinan",
    note: null,
  },
  {
    no: "02",
    title: "Transformasi Digital: AI Sebagai Ruang Baru Pelecehan Seksual",
    theme: "Gender · Teknologi",
    note: null,
  },
  {
    no: "03",
    title: "Patriarki Juga Merugikan Laki-Laki",
    theme: "Gender · Patriarki",
    note: "Kolaborasi Srikandi 360 · 208 likes",
  },
  {
    no: "04",
    title: "Perempuan Sebagai Korban Kapitalisme dan Patriarki Global",
    theme: "Gender · Kapitalisme",
    note: null,
  },
  {
    no: "05",
    title: "Ibuisme Negara",
    theme: "Gender · Politik",
    note: null,
  },
];

export default function CatatanEditions() {
  return (
    <section style={{ background: "#1a0533" }} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="right" delay={0.1}>
          <div className="mb-14 pb-6 border-b border-white/10">
            <span
              className="text-xs tracking-[0.35em] uppercase font-bold block mb-4 border-l-2 pl-4"
              style={{ color: "#b45309", borderColor: "#b45309" }}
            >
              Edisi Terbit
            </span>
            <h2
              className="font-display italic text-pg-cream leading-[0.9]"
              style={{ fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-0.03em" }}
            >
              5 catatan.<br />Isu nyata.
            </h2>
          </div>
        </AnimatedSection>

        <div>
          {editions.map(({ no, title, theme, note }, i) => (
            <AnimatedSection key={no} direction="up" delay={0.1 + i * 0.07}>
              <motion.div
                className="relative group grid grid-cols-12 gap-4 py-8 border-b border-white/10 cursor-default"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div
                  className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500"
                  style={{ background: "#b45309" }}
                />

                {/* Number */}
                <div className="col-span-2 md:col-span-1 flex items-start pt-1">
                  <span
                    className="font-display font-bold text-xl"
                    style={{ color: "rgba(180,83,9,0.5)", letterSpacing: "-0.02em" }}
                  >
                    #{no}
                  </span>
                </div>

                {/* Title + theme */}
                <div className="col-span-10 md:col-span-8">
                  <p
                    className="font-display italic text-pg-cream text-lg md:text-xl leading-snug mb-2"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {title}
                  </p>
                  {note && (
                    <p className="text-xs font-light mb-1.5" style={{ color: "rgba(180,83,9,0.7)" }}>
                      {note}
                    </p>
                  )}
                  <p className="text-xs uppercase tracking-widest text-pg-cream/30">{theme}</p>
                </div>

                {/* Read CTA */}
                <div className="hidden md:flex col-span-3 items-center justify-end">
                  <a
                    href="https://instagram.com/peran.gendis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ color: "#b45309" }}
                  >
                    Baca →
                  </a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection direction="up" delay={0.5}>
          <div className="mt-16 flex flex-col sm:flex-row items-center gap-6">
            <a
              href="https://instagram.com/peran.gendis"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-black text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-3"
              style={{ background: "#b45309" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#d97706")}
              onMouseLeave={e => (e.currentTarget.style.background = "#b45309")}
            >
              Buka @peran.gendis
              <span>→</span>
            </a>
            <p className="text-pg-cream/30 text-sm font-light">
              Semua edisi tersedia di Instagram kami.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
