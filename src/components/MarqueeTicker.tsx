"use client";
import { motion } from "framer-motion";

const keywords = [
  "PEREMPUAN",
  "ANAK",
  "GENDER",
  "DISABILITAS",
  "KESETARAAN",
  "ADVOKASI",
  "YOGYAKARTA",
  "INKLUSIF",
];

const items = [...keywords, ...keywords];

export default function MarqueeTicker() {
  return (
    <div className="overflow-hidden bg-pg-purple py-4 flex items-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {items.map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 text-pg-cream/50 font-semibold tracking-[0.3em] text-xs uppercase px-5"
          >
            {word}
            <span className="text-pg-gold text-sm">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
