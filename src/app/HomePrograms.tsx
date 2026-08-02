"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Keterangan program & angka target berasal dari Core §8.
   Catatan: GeRak = "Gendis Beraksi" (versi lama file ini menulis
   "Gendis Bergerak" — tidak cocok dengan Core §8C). */
const program = [
  {
    nama: "Catatan Gendis",
    arti: "Tulisan",
    teks: "Catatan, artikel opini, dan tanggapan atas isu gender, anak, dan disabilitas — terbit tiap minggu di Instagram.",
    angka: "5 edisi terbit",
    href: "/program/catatan",
  },
  {
    nama: "GeMar",
    arti: "Gendis Mengajar",
    teks: "Kelas belajar gratis untuk anak TK–SD di lima titik di Yogyakarta. Berjalan tiap Minggu dan Senin sore.",
    angka: "Sejak 17 Mei 2026",
    href: "/program/gemar",
    utama: true,
  },
  {
    nama: "GeRak",
    arti: "Gendis Beraksi",
    teks: "Aksi sosial tematik di lapangan — menyentuh langsung kelompok yang kami advokasi.",
    angka: "Kolaborasi Sayap Ibu",
    href: "/program/gerak",
  },
  {
    nama: "KoPer",
    arti: "Komunikasi Peran Gendis",
    teks: "Wawancara dan pendapat dari ahli maupun teman sebaya, serta audiensi ke NGO dan dinas terkait.",
    angka: "8 project/tahun",
    href: "/program",
  },
];

export default function HomePrograms() {
  return (
    <section
      aria-labelledby="program-judul"
      className="relative z-10 mx-auto max-w-5xl px-6 py-[var(--pg-rhythm)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex flex-wrap items-end justify-between gap-4"
      >
        <h2
          id="program-judul"
          className="font-display text-3xl leading-tight text-pg-ink md:text-5xl"
        >
          Empat cara kami bergerak
        </h2>
        <Link
          href="/program"
          className="inline-flex min-h-11 items-center text-[15px] font-semibold text-pg-berry underline underline-offset-4 hover:text-pg-berry-deep"
        >
          Lihat semua program →
        </Link>
      </motion.div>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {program.map((p, i) => (
          <motion.li
            key={p.nama}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
          >
            <Link
              href={p.href}
              className={`group flex h-full flex-col rounded-[1.25rem] border p-6 transition-colors ${
                p.utama
                  ? "border-pg-berry/25 bg-pg-berry-soft hover:bg-pg-berry-soft/70"
                  : "border-pg-paper-3 bg-white hover:bg-pg-paper-2/50"
              }`}
            >
              <div className="flex items-baseline gap-2.5">
                <h3 className="font-display text-2xl font-semibold text-pg-ink">
                  {p.nama}
                </h3>
                <span className="text-[13px] text-pg-ink-mute">{p.arti}</span>
              </div>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-pg-ink-soft">
                {p.teks}
              </p>
              <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-pg-berry">
                {p.angka}
              </p>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
