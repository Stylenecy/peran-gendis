"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const subjects = [
  { subject: "Matematika",     detail: "Berhitung dan logika dasar (TK–SD)" },
  { subject: "IPAS",           detail: "Ilmu Pengetahuan Alam & Sosial (SD)" },
  { subject: "Bahasa Inggris", detail: "Fondasi untuk dunia yang lebih luas (semua kelas)" },
];

export default function GemarForStudents() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed 50/50 split — no centering container */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-0">

        {/* Left panel — deep dark */}
        <div
          className="relative flex flex-col justify-center px-8 md:px-16 py-24 md:py-36"
          style={{ background: "var(--color-pg-paper-2)" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="block text-pg-berry text-xs tracking-[0.3em] uppercase mb-8"
          >
            Untuk Peserta Didik
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-display font-bold text-pg-ink leading-[1.15]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            Gratis.
            <br />
            Sungguhan.
            <br />
            <em className="text-pg-berry">Tanpa syarat.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="mt-8 text-base md:text-lg leading-relaxed max-w-sm text-pg-ink-soft"
            style={{ fontWeight: 300 }}
          >
            GeMar terbuka untuk semua anak TK sampai SD kelas 6, usia 5–12 tahun,
            di Yogyakarta. Tidak ada tes masuk. Tidak ada biaya tersembunyi.
          </motion.p>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 relative overflow-hidden"
            style={{ height: "220px" }}
          >
            <Image
              src="/photos/gemar-outdoor.webp"
              alt="Anak-anak belajar dengan penuh semangat di luar ruangan"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.85) saturate(0.9)" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, var(--color-pg-paper-2) 0%, transparent 50%)",
              }}
            />
          </motion.div>
        </div>

        {/* Panel kanan — pita pekat, jadi teksnya warna kertas */}
        <div
          className="on-deep flex flex-col justify-center px-8 md:px-16 py-24 md:py-36"
          style={{ background: "var(--color-pg-deep)" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Subject list */}
            <div>
              {subjects.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i + 0.3, ease: "easeOut" }}
                  className="border-b py-7"
                  style={{ borderColor: "var(--color-pg-paper-3)" }}
                >
                  <p
                    className="font-display font-semibold text-pg-paper"
                    style={{
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.subject}
                  </p>
                  <p
                    className="mt-1 text-sm text-pg-paper/75"
                    style={{ fontWeight: 300 }}
                  >
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Payment note — amber left-border sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
              className="mt-10 pl-5 border-l-2 border-pg-berry-soft/50"
            >
              <p className="text-sm font-medium mb-2 text-pg-berry-soft" style={{ letterSpacing: "0.05em" }}>
                &ldquo;Pembayaran&rdquo; opsional
              </p>
              <p className="text-sm leading-relaxed text-pg-paper/80" style={{ fontWeight: 300 }}>
                Jika kamu mau berbagi, bawa baju bekas atau buku layak pakai.
                Itu bukan syarat — itu pilihan. Bawa semangat belajar saja sudah cukup.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="mt-10"
            >
              <a
                href="https://wa.me/6285865193598"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full bg-pg-paper px-6 text-sm font-semibold text-pg-deep transition-colors hover:bg-white"
                style={{ letterSpacing: "0.05em" }}
              >
                Daftarkan anakmu →<span className="sr-only"> (buka WhatsApp di tab baru)</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
