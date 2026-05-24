"use client";

import { motion } from "framer-motion";

const isu = [
  "STOP Kekerasan",
  "Setara Pendidikan",
  "Hak Disabilitas",
  "Lindungi Anak",
  "Gender Responsif",
  "Ruang Aman",
  "Akses Setara",
  "Komunitas Peduli",
];

export default function HomeCollabs() {
  return (
    <section className="relative z-20 max-w-6xl mx-auto px-6 py-16 md:py-20">
      <div className="text-center">
        <span className="text-[10px] uppercase tracking-widest text-white/40 font-extrabold">
          Isu yang kami perjuangkan
        </span>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center max-w-3xl mx-auto">
          {isu.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="text-xs font-bold tracking-tight text-white/45 hover:text-pg-cream transition-all cursor-default text-center py-3 px-2 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-white/[0.04] hover:border-amber-500/20"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
