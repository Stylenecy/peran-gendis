"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lonceng } from "@/components/Lonceng";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Bagian ini menggantikan tiga "testimoni" lama yang isinya karangan
 * (penuturnya cuma ditulis "Anggota GeMar", "Peserta GeRak"). Selain melanggar
 * aturan proyek sendiri — konten harus berasal dari Core, bukan dikarang —
 * testimoni palsu di situs publik organisasi advokasi itu risiko nyata.
 *
 * Penggantinya justru lebih kuat, karena benar: bangku pengajar memang sering
 * kosong. Itu pesan yang komunitas ini sudah sampaikan sendiri lewat unggahan
 * "Calling All Volunteers".
 *
 * Catatan sengaja: kutipan japri/WA internal dan angka polling ketersediaan
 * tentor TIDAK dipakai di sini. Yang pertama tidak bisa dimintakan izin oleh
 * satu orang; yang kedua data operasional internal yang tidak perlu dibaca
 * calon sponsor.
 */
export default function HomeAjakan() {
  return (
    <section
      aria-labelledby="ajakan-judul"
      className="relative z-10 mx-auto max-w-5xl px-6 py-[var(--pg-rhythm)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative overflow-hidden rounded-3xl bg-pg-deep px-7 py-12 text-pg-paper md:px-14 md:py-16 pg-grain on-deep"
      >
        <Lonceng
          className="absolute -right-8 -top-8 h-48 w-48 text-pg-berry-soft/10"
        />

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pg-berry-soft">
          Yang paling kami butuhkan sekarang
        </p>

        <h2
          id="ajakan-judul"
          className="mt-5 max-w-2xl font-display text-3xl leading-tight md:text-5xl"
        >
          Kelasnya ada. Anaknya datang.
          <br />
          Bangku pengajarnya yang sering kosong.
        </h2>

        <figure className="mt-9 max-w-lg border-l-2 border-pg-berry-soft/40 pl-5">
          <blockquote className="font-display text-xl italic leading-snug md:text-2xl">
            &ldquo;Kakak yang lain ke mana?&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm text-pg-paper/70">
            — pertanyaan yang paling sering kami dengar dari adik-adik saat
            jumlah pengajar tidak cukup
          </figcaption>
        </figure>

        <p className="mt-9 max-w-xl leading-relaxed text-pg-paper/80">
          Kami tidak butuh kamu punya pengalaman mengajar. Cukup bisa Matematika,
          IPAS, atau Bahasa Inggris setingkat TK–SD, dan mau datang. Satu sore,
          satu setengah jam.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/program/gemar#relawan"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-pg-paper px-7 text-[15px] font-semibold text-pg-deep transition-colors hover:bg-white"
          >
            Lihat cara ikut
          </Link>
          <Link
            href="/program/gemar#lokasi"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-pg-paper/25 px-7 text-[15px] font-semibold text-pg-paper transition-colors hover:bg-white/10"
          >
            Lihat jadwal &amp; lokasi
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
