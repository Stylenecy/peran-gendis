"use client";

import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import { motion } from "framer-motion";

const stats = [
  { value: 12956, suffix: "",     label: "anak DIY tidak bersekolah",                      source: "BPMP DIY, 2025" },
  { value: 11441, suffix: "",     label: "kasus kekerasan dalam 5 tahun",                  source: "Kemen PPPA, 2024" },
  { value: 66,    suffix: ",65",  label: "indeks terendah klaster pendidikan anak",         source: "Kemen PPPA, 2025" },
  { value: 29,    suffix: ",74%", label: "gap partisipasi kerja perempuan vs laki-laki",    source: "Kemen PPPA, 2025" },
];

export default function SponsorImpact() {
  return (
    <section
      id="dampak"
      className="py-32 px-4"
      style={{ background: "#050B14" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection direction="right" delay={0.1}>
          <div className="mb-16 pb-8 border-b border-white/10">
            <span className="text-xs tracking-[0.35em] uppercase text-cyan-400 font-bold border-l-2 border-cyan-400 pl-4 block mb-6">
              // Realita Angka
            </span>
            <h2
              className="font-display italic text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-0.03em" }}
            >
              Angka yang tidak<br />bisa diabaikan.
            </h2>
          </div>
        </AnimatedSection>

        {/* Editorial stat rows */}
        <div>
          {stats.map(({ value, suffix, label, source }, i) => (
            <AnimatedSection key={label} direction="up" delay={0.1 + i * 0.08}>
              <motion.div
                className="relative group grid grid-cols-12 items-baseline gap-4 py-8 border-b border-white/10 cursor-default"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Cyan left sweep */}
                <div className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full bg-cyan-400 transition-all duration-500" />

                {/* Number */}
                <div className="col-span-5 md:col-span-4">
                  <div
                    className="font-display font-bold text-white flex items-baseline"
                    style={{ fontSize: "clamp(2.2rem,7vw,5.5rem)", letterSpacing: "-0.03em" }}
                  >
                    <CountUp end={value} duration={3} />
                    {suffix && (
                      <span style={{ fontSize: "clamp(1.2rem,3.5vw,2.8rem)" }}>{suffix}</span>
                    )}
                  </div>
                </div>

                {/* Label */}
                <div className="col-span-5 md:col-span-6">
                  <p className="text-white/65 font-light text-base md:text-lg leading-snug">
                    {label}
                  </p>
                </div>

                {/* Source */}
                <div className="col-span-2 text-right hidden md:block">
                  <span className="text-[10px] text-white/25 uppercase tracking-widest">{source}</span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection direction="up" delay={0.5}>
          <p className="mt-12 text-white/35 text-sm font-light max-w-2xl leading-relaxed">
            Dengan mendukung Peran Gendis, kamu berkontribusi langsung pada aksi sosial yang menyentuh kelompok rentan ini. Kami mengubah statistik menjadi langkah konkrit.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
