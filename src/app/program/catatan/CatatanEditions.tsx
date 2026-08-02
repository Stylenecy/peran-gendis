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
    note: null,
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
    <section style={{ background: "var(--color-pg-paper-2)" }} className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="right" delay={0.1}>
          <div className="mb-14 pb-6 border-b border-pg-paper-3">
            <span
              className="text-xs tracking-[0.35em] uppercase font-bold block mb-4 border-l-2 pl-4"
              style={{ color: "var(--color-pg-berry-deep)", borderColor: "var(--color-pg-berry-deep)" }}
            >
              Edisi Terbit
            </span>
            <h2
              className="font-display italic text-pg-ink leading-[0.9]"
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
                className="relative group grid grid-cols-12 gap-4 py-8 border-b border-pg-paper-3 cursor-default"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div
                  className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500"
                  style={{ background: "var(--color-pg-berry-deep)" }}
                />

                {/* Number */}
                <div className="col-span-2 md:col-span-1 flex items-start pt-1">
                  <span
                    className="font-display font-bold text-xl"
                    style={{ color: "var(--color-pg-berry)", letterSpacing: "-0.02em" }}
                  >
                    #{no}
                  </span>
                </div>

                {/* Title + theme */}
                <div className="col-span-10 md:col-span-8">
                  <p
                    className="font-display italic text-pg-ink text-lg md:text-xl leading-snug mb-2"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {title}
                  </p>
                  {note && (
                    <p className="text-xs font-light mb-1.5" style={{ color: "var(--color-pg-berry)" }}>
                      {note}
                    </p>
                  )}
                  <p className="text-xs uppercase tracking-widest text-pg-ink-mute">{theme}</p>
                </div>

                {/* Read CTA */}
                {/* Tautan ini dulu hanya muncul saat kursor lewat
                    (opacity-0 group-hover) — tidak pernah bisa dijangkau di
                    layar sentuh maupun lewat keyboard. Sekarang selalu tampil. */}
                <div className="col-span-12 md:col-span-3 flex items-center md:justify-end">
                  <a
                    href="https://instagram.com/peran.gendis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-pg-berry transition-colors hover:text-pg-berry-deep"
                  >
                    Baca →<span className="sr-only"> (buka Instagram di tab baru)</span>
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
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-pg-berry px-10 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-pg-berry-deep"
            >
              Buka @peran.gendis
              <span aria-hidden="true">→</span>
              <span className="sr-only">(buka Instagram di tab baru)</span>
            </a>
            <p className="text-pg-ink-mute text-sm font-light">
              Semua edisi tersedia di Instagram kami.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
