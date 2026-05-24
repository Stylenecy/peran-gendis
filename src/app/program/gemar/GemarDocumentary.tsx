"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "/photos/gemar-group.jpg",
    caption: "Sesi perdana, 17 Mei 2026 — Kampoeng Mataram, Bantul",
    alt: "Relawan dan anak-anak di sesi perdana GeMar",
    size: "tall",
  },
  {
    src: "/photos/gemar-tutoring.jpg",
    caption: "Belajar satu-satu: kehadiran yang nyata",
    alt: "Relawan mendampingi satu anak dalam sesi belajar",
    size: "wide",
  },
  {
    src: "/photos/gemar-kids-art.jpg",
    caption: "Hasil karya anak-anak — kreativitas tanpa batas",
    alt: "Anak-anak menunjukkan hasil karya mereka",
    size: "square",
  },
  {
    src: "/photos/gemar-classroom.jpg",
    caption: "Mewarnai dunia mereka sendiri",
    alt: "Anak-anak mewarnai di ruang kelas",
    size: "square",
  },
];

export default function GemarDocumentary() {
  return (
    <section className="relative" style={{ background: "#1a0533" }}>
      <div className="w-full h-px bg-pg-gold/20" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="block text-pg-gold text-xs tracking-[0.3em] uppercase mb-4">
              Dokumentasi
            </span>
            <h2
              className="font-display font-bold text-pg-cream leading-[1.15]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Dari lapangan,
              <br />
              <em className="text-pg-cream-warm/55">bukan dari presentasi.</em>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-sm max-w-xs md:text-right leading-relaxed text-pg-cream-warm/50"
            style={{ fontWeight: 300 }}
          >
            Foto-foto ini diambil saat sesi pertama GeMar, 17 Mei 2026.
            Ini bukan photoshoot — ini dokumentasi hari pertama kerja nyata kami.
          </motion.p>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {/* Photo 1 — 5 col tall */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5 relative overflow-hidden group"
            style={{ height: "340px" }}
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ filter: "brightness(0.88) saturate(0.9)" }}
              sizes="(max-width: 768px) 100vw, 42vw"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-pg-darkest/40" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-display italic text-xs text-pg-cream/85">{photos[0].caption}</p>
            </div>
            {/* Amber corner mark */}
            <div className="absolute top-0 left-0 w-6 h-6 bg-pg-gold" />
          </motion.div>

          {/* Photo 2 — 7 col wide */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-7 relative overflow-hidden group"
            style={{ height: "260px" }}
          >
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              style={{ filter: "brightness(0.85) saturate(0.85)" }}
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-pg-darkest/40" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="font-display italic text-xs text-pg-cream/85">{photos[1].caption}</p>
            </div>
          </motion.div>

          {/* Photos 3 & 4 — 3 col each (offset under photo 2) */}
          {[photos[2], photos[3]].map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: "easeOut" }}
              className="md:col-span-3 relative overflow-hidden group"
              style={{ height: "200px" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.85) saturate(0.85)" }}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-pg-darkest/40" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-display italic text-xs text-pg-cream/85">{photo.caption}</p>
              </div>
            </motion.div>
          ))}

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="mt-12 flex items-center justify-between flex-wrap gap-4"
        >
          <p className="text-sm text-pg-cream-warm/45" style={{ fontWeight: 300 }}>
            Foto lebih banyak di dokumentasi lapangan kami
          </p>
          <a
            href="https://www.instagram.com/peran.gendis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wider text-pg-gold hover:text-pg-gold-light transition-colors duration-300"
          >
            @peran.gendis →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
