"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Nama "Peran Gendis" adalah akronim dari keempat isu ini (Core §3).
   Hurufnya ditonjolkan supaya pengunjung langsung paham kenapa
   komunitas ini bernama begitu — sebelumnya tidak pernah dijelaskan
   di halaman depan. */
const isu = [
  {
    huruf: "Pe",
    label: "Perempuan",
    teks: "Kekerasan berbasis gender dan akses pendidikan yang tidak setara.",
  },
  {
    huruf: "A",
    label: "Anak",
    teks: "Perlindungan anak, literasi, dan ruang tumbuh yang aman.",
  },
  {
    huruf: "N",
    label: "Gender",
    teks: "Edukasi gender responsif dan komunitas yang inklusif.",
  },
  {
    huruf: "Dis",
    label: "Disabilitas",
    teks: "Aksesibilitas ruang publik dan hak penyandang disabilitas.",
  },
];

export default function HomeIsu() {
  return (
    <section
      aria-labelledby="isu-judul"
      className="relative z-10 border-y border-pg-paper-3 bg-pg-paper-2/60"
    >
      <div className="mx-auto max-w-5xl px-6 py-[var(--pg-rhythm)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2
            id="isu-judul"
            className="max-w-2xl font-display text-3xl leading-tight text-pg-ink md:text-5xl"
          >
            Nama kami adalah daftar tugasnya.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-pg-ink-soft">
            <strong className="font-semibold text-pg-ink">Peran Gendis</strong>{" "}
            dirangkai dari empat kelompok yang kami perjuangkan. Kami tidak
            memilih satu — kesetaraan tidak bisa setengah-setengah.
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {isu.map((it, i) => (
            <motion.li
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
              className="pg-card flex gap-4 p-6"
            >
              <span
                aria-hidden="true"
                className="font-display text-3xl font-semibold leading-none text-pg-berry"
              >
                {it.huruf}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-pg-ink">
                  {it.label}
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-pg-ink-soft">
                  {it.teks}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
