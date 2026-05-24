"use client";
import { motion } from "framer-motion";

const locations = [
  {
    number: "01",
    name: "Kampoeng Mataram",
    area: "Bantul",
    day: "Setiap Minggu",
    time: "16:00 – 17:30 WIB",
    note: "Suasana pedesaan, ruang terbuka dengan nuansa Jawa klasik",
    mapsUrl: "https://share.google/QsgLzVltUNP9jqsbn",
  },
  {
    number: "02",
    name: "Omah Kopi Tunggak",
    area: "Sleman (Berbah)",
    day: "Setiap Senin",
    time: "16:00 – 17:30 WIB",
    note: "Ruang komunitas berbasis kopi, hangat dan informal",
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
    note: "Ruang kelurahan yang ramah anak, mudah diakses warga",
    mapsUrl: "https://share.google/7GbgK1op2eUAqVn1V",
  },
];

export default function GemarLocations() {
  return (
    <section
      id="lokasi"
      className="relative overflow-hidden"
      style={{ background: "#0d0118" }}
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
              className="block text-pg-gold text-xs tracking-[0.3em] uppercase mb-6"
            >
              4 Lokasi Aktif
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-bold text-pg-cream leading-[1.2]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Kami hadir di sekitar kamu,
              <br />
              <em className="text-pg-cream/60">setiap minggu, tanpa jeda.</em>
            </motion.h2>
          </div>
        </div>

        {/* Editorial table */}
        <div className="border-t border-pg-gold/20">
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
              className="group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-8 md:py-10 border-b"
              style={{ borderColor: "rgba(217,119,6,0.15)" }}
            >
              {/* Hover purple sweep */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "rgba(59,18,99,0.2)" }}
              />
              {/* Amber left indicator */}
              <div className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500 bg-pg-gold" />

              {/* Number */}
              <div className="md:w-16 shrink-0">
                <span
                  className="font-display text-base font-normal"
                  style={{ color: "rgba(217,119,6,0.5)" }}
                >
                  {loc.number}
                </span>
              </div>

              {/* Name + area */}
              <div className="flex-1 md:mr-8">
                <h3
                  className="font-display font-semibold text-pg-cream leading-[1.2]"
                  style={{
                    fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {loc.name}
                </h3>
                <p className="mt-1 text-sm text-pg-gold">{loc.area}</p>
              </div>

              {/* Note — desktop only */}
              <div className="hidden md:block flex-1 px-4">
                <p
                  className="font-display italic text-sm text-pg-cream-warm/45"
                >
                  {loc.note}
                </p>
              </div>

              {/* Day + time */}
              <div className="md:text-right shrink-0">
                <p className="text-sm font-medium text-pg-cream-warm">{loc.day}</p>
                <p className="text-xs mt-0.5 text-pg-cream/50">{loc.time}</p>
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
          className="mt-10 text-sm text-pg-cream-warm/35"
          style={{ fontWeight: 300 }}
        >
          * Semua sesi berlangsung pukul 16:00 – 17:30 WIB. Tidak ada biaya masuk.
        </motion.p>
      </div>
    </section>
  );
}
