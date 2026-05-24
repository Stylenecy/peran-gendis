"use client";

import { motion } from "framer-motion";

const EXPO_OUT = [0.22, 1, 0.36, 1] as const;

const quotes = [
  {
    quote:
      "Peran Gendis bukan cuma komunitas — ini ruang di mana suara perempuan benar-benar didengar dan dijawab dengan tindakan nyata.",
    author: "Anggota GeMar",
    role: "Relawan Literasi",
    org: "PERAN GENDIS",
  },
  {
    quote:
      "Baru dua minggu ikut GeRak, perspektif saya tentang gender langsung berubah. Workshop-nya mengena dan tidak menggurui.",
    author: "Peserta GeRak",
    role: "Mahasiswa",
    org: "PERAN GENDIS",
  },
  {
    quote:
      "Catatan Gendis jadi salah satu media komunitas yang paling jujur dan berani bicara tentang isu disabilitas dan kesetaraan.",
    author: "Pembaca Catatan Gendis",
    role: "Aktivis Komunitas",
    org: "PERAN GENDIS",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="relative z-20 max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/5">
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((item, idx) => (
          <motion.figure
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: EXPO_OUT }}
            className="liquid-glass rounded-2xl p-6 flex flex-col justify-between border border-white/5 hover:border-white/10 transition-colors"
          >
            <blockquote className="text-sm text-white/80 leading-[1.6] italic">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <div className="text-sm font-semibold text-white">{item.author}</div>
              <div className="text-[11px] text-white/50">{item.role}</div>
              <div className="mt-1 text-[10px] text-amber-500 font-extrabold tracking-widest uppercase">
                {item.org}
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
