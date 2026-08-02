"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LoncengDivider } from "@/components/Lonceng";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HomeCTA() {
  return (
    <section
      aria-labelledby="cta-judul"
      className="relative z-10 mx-auto max-w-3xl px-6 py-[var(--pg-rhythm)] text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <LoncengDivider className="mx-auto max-w-[14rem]" />

        <h2
          id="cta-judul"
          className="mt-9 font-display text-3xl leading-tight text-pg-ink md:text-5xl"
        >
          Langkah kecil ini bisa jadi awal perubahan.
        </h2>

        <p className="mx-auto mt-6 max-w-lg leading-relaxed text-pg-ink-soft">
          Kamu bisa ikut dengan tiga cara: datang mengajar, mendukung lewat
          donasi atau sponsor, atau sekadar menyebarkan apa yang kami tulis.
          Semuanya berarti.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/program/gemar#relawan"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-pg-berry px-7 text-[15px] font-semibold text-white transition-colors hover:bg-pg-berry-deep sm:w-auto"
          >
            Ikut jadi pengajar
          </Link>
          <Link
            href="/sponsor"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-pg-paper-3 px-7 text-[15px] font-semibold text-pg-ink transition-colors hover:bg-pg-paper-2 sm:w-auto"
          >
            Dukung sebagai sponsor
          </Link>
        </div>

        <p className="mt-8 font-display text-lg italic text-pg-ink-mute">
          &ldquo;Lakukan untuk Tuhan, bukan sebatas untuk manusia.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
