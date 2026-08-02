"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import { Lonceng } from "@/components/Lonceng";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Versi lama halaman ini membuka dengan angka "12956" setinggi layar penuh,
 * lalu memunculkan isinya bertahap sampai detik ke-2,8 — dan tidak punya <h1>
 * sama sekali. Untuk halaman yang tugasnya merekrut pengajar, itu menunda
 * ajakan justru di tempat paling menentukan.
 *
 * Angkanya tetap dipakai karena kuat, tapi sekarang mendampingi judul dan
 * tombol, bukan menggantikannya.
 */
export default function GemarHero() {
  return (
    <section className="relative overflow-hidden border-b border-pg-paper-3 bg-pg-paper-2/50 pg-grain">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 12% 0%, #fdf4e6 0%, transparent 60%), radial-gradient(70% 60% at 100% 15%, #fbe9f2 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-pg-berry"
        >
          <Lonceng className="h-4 w-4" />
          GeMar — Gendis Mengajar
          <span className="rounded-full bg-pg-berry-soft px-2.5 py-1 text-pg-berry">
            Berjalan sejak 17 Mei 2026
          </span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
          className="mt-6 max-w-3xl font-display font-semibold leading-[1.02] text-pg-ink"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.25rem)" }}
        >
          Kelas belajar gratis, tiap{" "}
          <span className="pg-underline text-pg-berry">Minggu &amp; Senin</span>{" "}
          sore.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="#relawan"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-pg-berry px-7 text-[15px] font-semibold text-white transition-colors hover:bg-pg-berry-deep"
          >
            Daftar jadi pengajar
          </Link>
          <Link
            href="#lokasi"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-pg-paper-3 px-7 text-[15px] font-semibold text-pg-ink transition-colors hover:bg-pg-paper-2"
          >
            Jadwal &amp; lokasi
          </Link>
        </motion.div>

        {/* Angka pembuka lama, sekarang jadi pendamping */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26, ease: EASE }}
          className="mt-14 flex flex-col gap-4 border-t border-pg-paper-3 pt-8 sm:flex-row sm:items-center sm:gap-8"
        >
          <CountUp
            end={12956}
            duration={2.2}
            className="font-display font-semibold leading-none text-pg-berry"
            style={{ fontSize: "clamp(3rem, 9vw, 5.5rem)", letterSpacing: "-0.03em" }}
          />
          <figcaption className="max-w-sm">
            <p className="font-display text-lg leading-snug text-pg-ink">
              anak di Yogyakarta tidak bersekolah.
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-pg-ink-mute">
              Sumber: BPMP DIY &amp; BPS, 2025 · usia 7–15 tahun. Kami tidak bisa
              mengubah angka itu sendirian — tapi bisa mulai dari satu anak.
            </p>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
