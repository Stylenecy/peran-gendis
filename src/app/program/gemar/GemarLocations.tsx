"use client";
import { motion } from "framer-motion";

const locations = [
  {
    number: "01",
    name: "Balai Budaya Karangkitri (Kedai Tanya)",
    area: "Panggungharjo, Bantul",
    day: "Setiap Minggu",
    time: "16:00 – 17:30 WIB",
    note: "Balai budaya warga, ruang berkumpul terbuka untuk komunitas",
    mapsUrl: "https://share.google/1Y8o2rpGJL1xYrWLD",
  },
  {
    number: "02",
    name: "Omah Kopi Tunggak",
    area: "Sleman (Berbah)",
    day: "Setiap Senin",
    time: "16:00 – 17:30 WIB",
    note: "Kedai kopi yang nyaman, suasana santai untuk belajar bersama",
    mapsUrl: "https://share.google/0qbeShnocGFvt4NjS",
  },
  {
    number: "03",
    name: "RTHP Klitren",
    area: "Kota Yogyakarta",
    day: "Setiap Senin",
    time: "16:00 – 17:30 WIB",
    note: "Ruang terbuka hijau publik, belajar di udara segar",
    mapsUrl: "https://share.google/T0GLGGVgP9QpGKydO",
  },
  {
    number: "04",
    name: "Kantor Kelurahan Klitren",
    area: "Kota Yogyakarta",
    day: "Setiap Minggu",
    time: "16:00 – 17:30 WIB",
    note: "Ruang kantor kelurahan, dukungan resmi dari pemerintah setempat",
    mapsUrl: "https://share.google/7GbgK1op2eUAqVn1V",
  },
  {
    number: "05",
    name: "SD Muhammadiyah Sokonandi",
    area: "Gunungketur, Kota Yogyakarta",
    day: "Setiap Senin (tentatif)",
    time: "16:00 – 17:30 WIB",
    note: "Lingkungan sekolah dasar, jadwal masih tentatif",
    mapsUrl: "https://share.google/xz1IQfuhqbHd0J2Ij",
  },
];

export default function GemarLocations() {
  return (
    <section
      id="lokasi"
      className="relative overflow-hidden"
      style={{ background: "var(--color-pg-paper)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-36">
        {/* Header — off-center */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-16 md:mb-24">
          <div className="md:col-span-8">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="block text-pg-berry text-xs tracking-[0.3em] uppercase mb-6"
            >
              5 Lokasi Aktif
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-bold text-pg-ink leading-[1.2]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Kami hadir di sekitar kamu,
              <br />
              <em className="text-pg-ink-mute">setiap minggu, tanpa jeda.</em>
            </motion.h2>
          </div>
        </div>

        {/* Editorial table */}
        <div className="border-t border-pg-berry/25">
          {locations.map((loc, i) => (
            <motion.a
              key={loc.number}
              href={loc.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-0 border-b border-pg-paper-3 py-8 md:py-10"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-pg-paper-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div
                className="absolute left-0 top-0 h-0 w-0.5 bg-pg-berry transition-all duration-500 group-hover:h-full"
                aria-hidden="true"
              />

              {/* Number */}
              <div className="relative md:w-16 shrink-0">
                <span className="font-display text-base font-semibold text-pg-berry">
                  {loc.number}
                </span>
              </div>

              {/* Name + area */}
              <div className="relative flex-1 md:mr-8">
                <h3
                  className="font-display font-semibold text-pg-ink leading-[1.2]"
                  style={{
                    fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm text-pg-berry">{loc.area}</p>
              </div>

              {/* Note — desktop only */}
              <div className="relative hidden md:block flex-1 px-4">
                <p
                  className="font-display italic text-sm text-pg-ink-mute"
                >
                  {loc.note}
                </p>
              </div>

              {/* Day + time */}
              <div className="relative md:text-right shrink-0">
                <p className="text-sm font-medium text-pg-ink">{loc.day}</p>
                <p className="text-xs mt-0.5 text-pg-ink-mute">{loc.time}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 max-w-2xl text-sm leading-relaxed text-pg-ink-soft"
        >
          * Semua sesi berlangsung pukul 16:00 – 17:30 WIB. Tidak ada biaya
          masuk. Titik belajar sesekali berpindah mengikuti kesepakatan warga —
          kalau kamu baru pertama datang,{" "}
          <a
            href="https://wa.me/6285865193598"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pg-berry underline underline-offset-4 hover:text-pg-berry-deep"
          >
            pastikan dulu lewat WhatsApp
            <span className="sr-only"> (buka di tab baru)</span>
          </a>{" "}
          supaya tidak salah tempat.
        </motion.p>
      </div>
    </section>
  );
}
