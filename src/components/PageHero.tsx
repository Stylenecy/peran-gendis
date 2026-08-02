"use client";

import { motion } from "framer-motion";
import { Lonceng } from "@/components/Lonceng";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Kepala halaman bersama untuk semua halaman bagian.
 *
 * Menggantikan empat kepala halaman berbeda yang masing-masing memutar video
 * autoplay dari CloudFront pihak ketiga. Selain berat dan boros baterai, video
 * itu memakai `mix-blend-screen` sehingga teks di atasnya nyaris tidak terbaca
 * begitu latar diganti terang — dan kalau host luarnya mati, halamannya rusak.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-pg-paper-3 bg-pg-paper-2/50 pg-grain">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 15% 0%, #fdf4e6 0%, transparent 60%), radial-gradient(70% 60% at 100% 20%, #fbe9f2 0%, transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pg-berry"
        >
          <Lonceng className="h-4 w-4" />
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="mt-6 max-w-3xl font-display font-semibold leading-[1.02] text-pg-ink"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.25rem)" }}
        >
          {title}
        </motion.h1>

        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-pg-ink-soft"
          >
            {lead}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
            className="mt-9"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
