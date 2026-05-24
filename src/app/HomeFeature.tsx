"use client";

import { motion } from "framer-motion";

const EXPO_OUT = [0.22, 1, 0.36, 1] as const;

const issues = [
  {
    label: "Perempuan",
    count: "Prioritas",
    color: "#fef3c7",
    items: ["Kekerasan berbasis gender", "Akses pendidikan setara"],
  },
  {
    label: "Anak",
    count: "Prioritas",
    color: "#d97706",
    items: ["Perlindungan anak", "Literasi dan tumbuh kembang"],
  },
  {
    label: "Gender",
    count: "Aktif",
    color: "#a855f7",
    items: ["Edukasi gender responsif", "Inklusivitas komunitas"],
  },
  {
    label: "Disabilitas",
    count: "Aktif",
    color: "#06b6d4",
    items: ["Aksesibilitas ruang publik", "Hak penyandang disabilitas"],
  },
];

export default function HomeFeature() {
  return (
    <section className="relative z-20 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EXPO_OUT }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Fokus Isu
            </span>
            <span className="px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] font-medium tracking-wide text-white/50 uppercase bg-white/5">
              4 Isu Utama
            </span>
          </div>

          <h2 className="mt-5 font-display text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-pg-cream">
            Empat isu.
            <br />
            <span className="text-pg-cream/50">Satu gerakan.</span>
          </h2>

          <p className="mt-6 text-pg-cream/60 text-base leading-[1.6] max-w-md">
            Peran Gendis tidak memilih satu isu — kami bergerak di empat garis
            depan sekaligus, karena kesetaraan tidak bisa setengah-setengah.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {["Advokasi", "Edukasi", "Dokumentasi", "Komunitas"].map((chip) => (
              <span
                key={chip}
                className="text-xs text-pg-cream/70 px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-all"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: EXPO_OUT }}
          className="liquid-glass rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-semibold text-white/40 uppercase tracking-widest">
              4 isu · aktif 2026
            </span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </div>

          <div className="space-y-3">
            {issues.map((isu) => (
              <div
                key={isu.label}
                className="liquid-glass rounded-lg p-3.5 border border-white/5 hover:border-white/20 transition-all cursor-default"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: isu.color }}
                    />
                    <span className="text-xs font-bold text-white">
                      {isu.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-white/60">
                    {isu.count}
                  </span>
                </div>
                <div className="space-y-1 text-xs text-white/55">
                  {isu.items.map((it, i) => (
                    <div key={i} className="truncate">
                      · {it}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
