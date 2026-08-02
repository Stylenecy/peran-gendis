"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lonceng } from "@/components/Lonceng";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Menggantikan ProgramClock — widget "jam" berputar yang isinya teks 9px,
 * warna krem 20% opasitas, dan bilah setinggi 6px sebagai area klik. Cantik di
 * tangkapan layar, tapi tidak bisa dibaca, tidak bisa disentuh dengan nyaman,
 * dan tidak bisa dipakai lewat keyboard. Diganti daftar biasa yang isinya jauh
 * lebih lengkap.
 *
 * Semua isi dari Core §8. Perhatikan: porsi target 2026 memang timpang
 * (Catatan Gendis 72%, GeMar 2%) — itu angka rencana, ditampilkan apa adanya.
 */
const program = [
  {
    nama: "Catatan Gendis",
    arti: "Publikasi tulisan",
    href: "/program/catatan",
    teks: "Catatan, artikel opini, dan tanggapan atas isu gender, anak, maupun disabilitas. Terbit setiap minggu — lebih cepat kalau isunya mendesak.",
    detail: [
      ["Frekuensi", "1 minggu sekali"],
      ["Target 2026", "36 publikasi/tahun"],
      ["Kanal", "Instagram @peran.gendis"],
      ["Sudah terbit", "5 edisi"],
    ],
  },
  {
    nama: "GeMar",
    arti: "Gendis Mengajar",
    href: "/program/gemar",
    utama: true,
    teks: "Kelas bimbingan belajar gratis untuk anak usia TK–SD, sebagai jawaban langsung atas isu kesejahteraan dan pendidikan inklusif.",
    detail: [
      ["Jadwal", "Minggu & Senin, 16.00–17.30"],
      ["Mata pelajaran", "Matematika · IPAS · B. Inggris"],
      ["Biaya murid", "Gratis — bawa buku/pakaian bekas"],
      ["Berjalan sejak", "17 Mei 2026"],
    ],
  },
  {
    nama: "GeRak",
    arti: "Gendis Beraksi",
    href: "/program/gerak",
    teks: "Kegiatan aksi sosial tematik yang mewakili bidang gender, anak, dan disabilitas — turun langsung ke lapangan.",
    detail: [
      ["Bentuk", "Aksi sosial tematik"],
      ["Kolaborasi", "Yayasan Sayap Ibu"],
    ],
  },
  {
    nama: "KoPer",
    arti: "Komunikasi Peran Gendis",
    href: "/kontak",
    teks: "Wawancara dan pendapat dari ahli, teman sebaya, dan anggota Peran Gendis. Bisa juga berupa audiensi ke NGO atau dinas terkait.",
    detail: [
      ["Target 2026", "8 project/tahun"],
      ["Bentuk", "Reels, wawancara, audiensi"],
    ],
  },
];

export default function ProgramList() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-[var(--pg-rhythm)]">
      <ul className="space-y-4">
        {program.map((p, i) => (
          <motion.li
            key={p.nama}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
            className={`rounded-[1.5rem] border p-7 md:p-9 ${
              p.utama
                ? "border-pg-berry/25 bg-pg-berry-soft"
                : "border-pg-paper-3 bg-white"
            }`}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h2 className="font-display text-2xl font-semibold text-pg-ink md:text-3xl">
                {p.nama}
              </h2>
              <p className="text-[14px] text-pg-ink-mute">{p.arti}</p>
              {p.utama && (
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-pg-berry px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  <Lonceng className="h-3.5 w-3.5" />
                  Butuh pengajar
                </span>
              )}
            </div>

            <p className="mt-4 max-w-2xl leading-relaxed text-pg-ink-soft">
              {p.teks}
            </p>

            <dl className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {p.detail.map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-wrap items-baseline gap-x-2 border-t border-pg-paper-3 pt-2.5"
                >
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-pg-ink-mute">
                    {k}
                  </dt>
                  <dd className="text-[15px] font-medium text-pg-ink">{v}</dd>
                </div>
              ))}
            </dl>

            <Link
              href={p.href}
              className="mt-7 inline-flex min-h-11 items-center rounded-full border border-pg-berry px-5 text-[14px] font-semibold text-pg-berry transition-colors hover:bg-pg-berry hover:text-white"
            >
              Selengkapnya tentang {p.nama}
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
