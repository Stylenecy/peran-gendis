"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeProgramBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleString("id-ID", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="relative z-30 w-full h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs tracking-wider">
        <div className="flex items-center gap-5">
          <span className="font-extrabold text-amber-500">PG</span>
          <span className="font-extrabold text-white">Peran Gendis</span>
          <div className="hidden sm:flex items-center gap-4 text-white/70">
            {(
              [
                ["Tentang", "/tentang"],
                ["Program", "/program"],
                ["Sponsor", "/sponsor"],
                ["Kontak", "/kontak"],
              ] as [string, string][]
            ).map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-white/40 text-[10px]">
            GeMar aktif · 4 lokasi
          </span>
          {time && (
            <span className="font-medium text-[11px] text-white/80">{time}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
