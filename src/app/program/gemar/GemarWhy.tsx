"use client";
import { motion } from "framer-motion";

const stats = [
  { number: "12.956", label: "anak tidak bersekolah di DIY",  sub: "BPMP DIY & BPS, 2025" },
  { number: "4",      label: "lokasi bimbel aktif",           sub: "dan terus berkembang" },
  { number: "1",      label: "sesi sudah dimulai",            sub: "17 Mei 2026" },
];

export default function GemarWhy() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#1a0533" }}
    >
      {/* Top amber edge */}
      <div className="w-full h-px bg-pg-gold/25" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-36">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <span className="text-pg-gold text-xs tracking-[0.3em] uppercase">
            Mengapa GeMar Ada
          </span>
        </motion.div>

        {/* Asymmetric 12-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="md:col-span-7 md:pr-12"
          >
            <h2
              className="font-display font-bold text-pg-cream leading-[1.15]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}
            >
              Pendidikan bukan hak istimewa.
              <br />
              <em className="text-pg-gold">Itu hak dasar.</em>
            </h2>
          </motion.div>

          {/* Right — body text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="md:col-span-5 md:pt-3"
          >
            <p
              className="text-base md:text-lg leading-relaxed text-pg-cream-warm/80"
              style={{ fontWeight: 300 }}
            >
              Di Daerah Istimewa Yogyakarta, ribuan anak usia sekolah tidak
              mendapatkan pendidikan yang layak — bukan karena mereka tidak mau
              belajar, tapi karena sistemnya belum menjangkau mereka.
            </p>
            <p
              className="mt-5 text-base md:text-lg leading-relaxed text-pg-cream-warm/80"
              style={{ fontWeight: 300 }}
            >
              GeMar hadir bukan sebagai solusi sementara, tapi sebagai pernyataan:{" "}
              <strong className="text-pg-cream font-semibold">
                setiap anak berhak ditemani dalam belajar.
              </strong>
            </p>
          </motion.div>
        </div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-pg-gold/30"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="pt-10 pb-8 md:pr-8"
              style={{
                borderRight: i < 2 ? "1px solid rgba(217,119,6,0.15)" : "none",
              }}
            >
              <div
                className="font-display font-black text-pg-cream leading-none"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                {stat.number}
              </div>
              <p className="mt-3 text-sm md:text-base text-pg-cream-warm">
                {stat.label}
              </p>
              <p className="mt-1 text-xs tracking-wide text-pg-cream/35">
                {stat.sub}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Watermark */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none font-display font-black leading-none"
        style={{
          fontSize: "clamp(6rem, 18vw, 16rem)",
          color: "rgba(59,18,99,0.25)",
          letterSpacing: "-0.05em",
          transform: "translateX(8%) translateY(15%)",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        GeMar
      </div>
    </section>
  );
}
