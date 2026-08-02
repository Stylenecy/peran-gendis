"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lonceng } from "@/components/Lonceng";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Semua angka & jadwal di bawah berasal dari Peran-Gendis-Core.md §8D.
   Nama venue sengaja TIDAK dicantumkan per hari: Core mencatat kemungkinan
   perpindahan lokasi Senin yang belum dikonfirmasi, dan menerbitkan alamat
   yang salah berarti ada orang datang ke tempat kosong. Wilayah + ajakan
   konfirmasi ke CP lebih aman dan tetap berguna. */
const fakta = [
  { angka: "16.00–17.30", label: "Jam kelas", detail: "Tiap sesi, semua lokasi" },
  { angka: "TK–SD", label: "Usia murid", detail: "Matematika · IPAS · B. Inggris" },
  { angka: "Gratis", label: "Biaya murid", detail: "Cukup bawa buku atau pakaian bekas layak pakai" },
  { angka: "5", label: "Titik belajar", detail: "Bantul · Kota Yogyakarta · Sleman" },
];

export default function HomeLapangan() {
  return (
    <section
      aria-labelledby="lapangan-judul"
      className="relative z-10 mx-auto max-w-5xl px-6 py-[var(--pg-rhythm)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pg-leaf">
          <Lonceng className="h-4 w-4" />
          GeMar — Gendis Mengajar
        </p>
        <h2
          id="lapangan-judul"
          className="mt-5 max-w-2xl font-display text-3xl leading-tight text-pg-ink md:text-5xl"
        >
          Bukan wacana. Tiap minggu, di ruang yang bisa kamu datangi.
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-pg-ink-soft">
          Di DIY tercatat{" "}
          <strong className="font-semibold text-pg-ink">12.956 anak</strong>{" "}
          tidak bersekolah — putus sekolah, lulus tapi tidak melanjutkan, atau
          belum pernah sekolah sama sekali.{" "}
          <span className="text-pg-ink-mute">(BPMP DIY, 2025)</span> GeMar
          adalah jawaban kecil kami: kelas belajar gratis yang berjalan sejak 17
          Mei 2026.
        </p>
      </motion.div>

      <dl className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {fakta.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
            className="pg-card p-5"
          >
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-pg-ink-mute">
              {f.label}
            </dt>
            <dd className="mt-2 font-display text-2xl font-semibold leading-none text-pg-berry">
              {f.angka}
            </dd>
            <dd className="mt-2.5 text-[13px] leading-snug text-pg-ink-soft">
              {f.detail}
            </dd>
          </motion.div>
        ))}
      </dl>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-7 text-[13px] leading-relaxed text-pg-ink-mute"
      >
        Kelas berjalan hari <strong className="text-pg-ink-soft">Minggu</strong>{" "}
        dan <strong className="text-pg-ink-soft">Senin</strong> sore. Titik
        belajar sesekali berpindah mengikuti kesepakatan warga — pastikan lokasi
        minggu berjalan lewat{" "}
        <Link
          href="/kontak"
          className="font-semibold text-pg-berry underline underline-offset-4 hover:text-pg-berry-deep"
        >
          kontak kami
        </Link>{" "}
        sebelum berangkat.
      </motion.p>
    </section>
  );
}
