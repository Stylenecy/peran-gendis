"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lonceng } from "@/components/Lonceng";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

export default function HeroSection() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Eyebrow */}
      <motion.p
        {...rise(0.05)}
        className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-pg-ink-mute"
      >
        <Lonceng className="h-4 w-4 text-pg-berry" />
        <span>Perempuan · Anak · Gender · Disabilitas</span>
        <span
          aria-hidden="true"
          className="h-3 w-px bg-pg-ink-mute/40"
        />
        <span>Yogyakarta</span>
      </motion.p>

      {/* Tagline resmi komunitas, akhirnya dipakai sebagai judul utama —
          sebelumnya cuma terselip di footer & metadata. */}
      <motion.h1
        {...rise(0.12)}
        className="mt-7 font-display font-semibold leading-[0.98] text-pg-ink"
        style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
      >
        Manisnya kebersamaan
        <br />
        dalam{" "}
        <span className="pg-underline text-pg-berry">kesetaraan</span>.
      </motion.h1>

      <motion.p
        {...rise(0.2)}
        className="mt-8 max-w-xl text-lg leading-relaxed text-pg-ink-soft"
      >
        Kami komunitas akar rumput di Yogyakarta. Tiap minggu kami membuka kelas
        belajar <strong className="font-semibold text-pg-ink">gratis</strong>{" "}
        untuk anak-anak TK–SD — dan kami bersuara untuk isu yang sering
        didiamkan.
      </motion.p>

      {/* Aksi utama diarahkan ke perekrutan pengajar, bukan ke "kenali kami".
          Kebutuhan paling mendesak komunitas saat ini adalah orang. */}
      <motion.div
        {...rise(0.28)}
        className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <Link
          href="/program/gemar#relawan"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-pg-berry px-7 text-[15px] font-semibold text-white transition-colors hover:bg-pg-berry-deep"
        >
          Ikut jadi pengajar
        </Link>
        <Link
          href="/tentang"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-pg-paper-3 px-7 text-[15px] font-semibold text-pg-ink transition-colors hover:bg-pg-paper-2"
        >
          Kenali kami
        </Link>
      </motion.div>

      {/* Filosofi logo dinaikkan ke permukaan — ini yang membedakan
          komunitas ini dari komunitas sosial mana pun, dan selama ini
          hanya hidup di dokumen internal. */}
      <motion.figure
        {...rise(0.4)}
        className="mt-16 max-w-md border-l-2 border-pg-berry/30 pl-5"
      >
        <blockquote className="font-display text-lg italic leading-snug text-pg-ink">
          &ldquo;Cantik, tetapi beracun. Terkesan manis, tetapi berani bersifat
          kritis.&rdquo;
        </blockquote>
        <figcaption className="mt-2 text-[13px] text-pg-ink-mute">
          Makna bunga bakung lembah pada logo kami
        </figcaption>
      </motion.figure>
    </section>
  );
}
