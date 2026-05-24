"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const schedule = [
  { month: "Jul", name: 'KoPer "Hari Anak"' },
  { month: "Jul", name: "KoPer × Dialog Srikandi" },
  { month: "Ags", name: 'KoPer "Hari Pariwisata Sedunia"' },
  { month: "Ags", name: 'KoPer "Hari Pangan Sedunia"' },
  { month: "Sep", name: "KoPer × Diskusi Komunitas Disabilitas UGM" },
  { month: "Okt", name: 'KoPer "Hari Disabilitas"' },
  { month: "Nov", name: 'KoPer "Kebangkitan dan Pergerakan Perempuan"' },
];

export default function KoperContent() {
  return (
    <>
      {/* Format section — split 50/50 */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ minHeight: "60vh" }}
      >
        {/* Left — what is KoPer */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-20"
          style={{ background: "#1a0533" }}
        >
          <AnimatedSection direction="right" delay={0.1}>
            <span className="text-xs tracking-[0.35em] uppercase font-bold block mb-6 border-l-2 pl-4" style={{ color: "#d97706", borderColor: "#d97706" }}>
              Format
            </span>
            <h2
              className="font-display italic text-pg-cream leading-[0.95] mb-6"
              style={{ fontSize: "clamp(1.8rem,4vw,3.5rem)", letterSpacing: "-0.03em" }}
            >
              Wawancara yang<br />jujur. Dialog yang<br />
              <em style={{ color: "#d97706" }}>nyata.</em>
            </h2>
            <p className="text-pg-cream/55 font-light leading-relaxed text-base">
              KoPer hadir dalam format <strong className="text-pg-cream/80">reels pendek</strong> — wawancara dan diskusi dengan berbagai perspektif: ahli, teman sebaya, dan anggota Peran Gendis sendiri.
            </p>
            <p className="text-pg-cream/55 font-light leading-relaxed text-base mt-4">
              Selain konten digital, KoPer juga mencakup <strong className="text-pg-cream/80">audiensi langsung</strong> ke NGO dan dinas terkait untuk mendorong perubahan nyata.
            </p>
          </AnimatedSection>
        </div>

        {/* Right — stat + sub */}
        <div
          className="flex flex-col justify-center px-10 md:px-16 py-20"
          style={{ background: "#3b1263" }}
        >
          <AnimatedSection direction="left" delay={0.2}>
            <div className="border-l-2 pl-6" style={{ borderColor: "rgba(217,119,6,0.5)" }}>
              <p className="text-[10px] uppercase tracking-widest mb-3 font-bold" style={{ color: "#d97706" }}>
                Topik yang dibahas
              </p>
              {["Gender & Patriarki", "Isu Perempuan", "Hak Anak", "Disabilitas", "Isu Sosial Lokal"].map((t, i) => (
                <div key={t} className="flex items-center gap-3 py-2.5 border-b border-white/8">
                  <span className="w-1 h-1 shrink-0" style={{ background: "#d97706" }} />
                  <span className="text-pg-cream/70 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Schedule */}
      <section style={{ background: "#0d0118" }} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="right" delay={0.1}>
            <div className="mb-14 pb-6 border-b border-white/8">
              <span className="text-xs tracking-[0.35em] uppercase font-bold block mb-4 border-l-2 pl-4" style={{ color: "#d97706", borderColor: "#d97706" }}>
                Jadwal 2026
              </span>
              <h2
                className="font-display italic text-pg-cream leading-[0.9]"
                style={{ fontSize: "clamp(2rem,5vw,4rem)", letterSpacing: "-0.03em" }}
              >
                Yang akan datang.
              </h2>
            </div>
          </AnimatedSection>

          <div>
            {schedule.map(({ month, name }, i) => (
              <AnimatedSection key={name} direction="up" delay={0.08 + i * 0.06}>
                <motion.div
                  className="relative group grid grid-cols-12 items-center gap-4 py-7 border-b border-white/8"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500" style={{ background: "#d97706" }} />

                  {/* Month */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: "rgba(217,119,6,0.6)" }}>
                      {month}
                    </span>
                  </div>

                  {/* Event name */}
                  <div className="col-span-10 md:col-span-9">
                    <p className="font-display italic text-pg-cream text-lg md:text-xl" style={{ letterSpacing: "-0.01em" }}>
                      {name}
                    </p>
                  </div>

                  {/* Index */}
                  <div className="hidden md:block col-span-2 text-right">
                    <span className="text-pg-cream/20 text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection direction="up" delay={0.5}>
            <div className="mt-16 flex justify-center">
              <a
                href="https://instagram.com/peran.gendis"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-3"
                style={{ background: "#d97706", color: "#0d0118" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#fbbf24")}
                onMouseLeave={e => (e.currentTarget.style.background = "#d97706")}
              >
                Ikuti @peran.gendis
                <span>→</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
