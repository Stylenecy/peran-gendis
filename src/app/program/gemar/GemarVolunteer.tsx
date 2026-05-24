"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const requirements = [
  { label: "Follow Instagram",       detail: "@peran.gendis",                                    required: true },
  { label: "Komitmen periode",        detail: "Juni – Agustus 2026",                              required: true },
  { label: "Kemampuan mengajar",      detail: "Matematika, IPAS, atau Bahasa Inggris level SD",   required: true },
  { label: "Kontribusi operasional",  detail: "Rp15.000/bulan (opsional, bisa dinegosiasikan)",   required: false },
];

export default function GemarVolunteer() {
  return (
    <section
      id="volunteer"
      className="relative overflow-hidden"
      style={{ background: "#0d0118" }}
    >
      {/* Ambient purple glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 0% 100%, rgba(59,18,99,0.5) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-36">
        {/* Urgent badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-1.5"
          style={{
            background: "rgba(217,119,6,0.15)",
            border: "1px solid rgba(217,119,6,0.4)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-pg-gold" />
          <span className="text-pg-gold text-xs tracking-widest uppercase font-medium">
            Batch 1 — Pendaftaran Dibuka
          </span>
        </motion.div>

        {/* Asymmetric 12-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">
          {/* Left — pitch */}
          <div className="md:col-span-6 md:pr-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-black text-pg-cream leading-[1.1]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
            >
              Ini bukan sekadar
              <br />
              volunteering.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="mt-6 text-base md:text-lg leading-relaxed text-pg-cream-warm/75"
              style={{ fontWeight: 300 }}
            >
              Ini adalah kesempatan untuk membuktikan bahwa perubahan bisa dimulai
              dari satu orang duduk bersama satu anak, setiap minggu.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="mt-4 text-base md:text-lg leading-relaxed text-pg-cream-warm/75"
              style={{ fontWeight: 300 }}
            >
              Kami mencari relawan yang serius — yang hadir bukan karena CV, tapi
              karena{" "}
              <em className="font-display text-pg-cream-warm">
                mereka percaya anak-anak ini layak mendapatkan yang terbaik.
              </em>
            </motion.p>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
              className="mt-10 relative overflow-hidden"
              style={{ height: "280px" }}
            >
              <Image
                src="/photos/gemar-mentoring.jpg"
                alt="Relawan mendampingi anak belajar"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.8) saturate(0.85)" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom right, transparent 40%, rgba(26,5,51,0.7) 100%)",
                }}
              />
              <div className="absolute bottom-4 right-4 text-right">
                <p className="font-display italic text-xs text-pg-cream/70">
                  Satu anak. Satu relawan. Satu perubahan.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — requirements + apply */}
          <div
            className="md:col-span-6 md:pl-8 md:border-l"
            style={{ borderColor: "rgba(217,119,6,0.2)" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-pg-gold text-xs tracking-[0.3em] uppercase mb-8">
                Persyaratan Relawan
              </h3>

              <div>
                {requirements.map((req, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.3, ease: "easeOut" }}
                    className="flex items-start gap-4 py-5 border-b"
                    style={{ borderColor: "rgba(217,119,6,0.12)" }}
                  >
                    {/* Checkbox indicator */}
                    <div
                      className="mt-1 w-4 h-4 shrink-0 flex items-center justify-center"
                      style={{
                        background: req.required ? "#d97706" : "transparent",
                        border: req.required ? "none" : "1px solid rgba(217,119,6,0.4)",
                      }}
                    >
                      {req.required && (
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1 4L3 6L7 2"
                            stroke="#0d0118"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-pg-cream">
                        {req.label}
                        {!req.required && (
                          <span className="ml-2 text-xs font-normal" style={{ color: "rgba(217,119,6,0.6)" }}>
                            opsional
                          </span>
                        )}
                      </p>
                      <p className="mt-0.5 text-sm text-pg-cream-warm/55" style={{ fontWeight: 300 }}>
                        {req.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Period block */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                className="mt-8 py-5 px-5"
                style={{
                  background: "rgba(59,18,99,0.35)",
                  borderLeft: "3px solid #d97706",
                }}
              >
                <p className="text-sm font-semibold mb-1 text-pg-cream">Periode Batch 1</p>
                <p className="font-display font-semibold text-lg text-pg-gold">
                  Juni – Agustus 2026
                </p>
              </motion.div>

              {/* Apply block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                className="mt-8 space-y-3"
              >
                <p className="text-pg-cream/35 text-xs tracking-[0.25em] uppercase mb-4">
                  Cara Mendaftar
                </p>

                <a
                  href="https://wa.me/6285865193598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full py-4 px-5 bg-pg-gold hover:bg-pg-gold-light transition-all duration-300 hover:translate-x-1"
                >
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-pg-darkest/60">
                      WhatsApp
                    </p>
                    <p className="text-base font-bold text-pg-darkest">
                      0858-6519-3598 (Marelta Putri)
                    </p>
                  </div>
                  <span className="text-pg-darkest text-xl">→</span>
                </a>

                <a
                  href="mailto:perangendis@gmail.com"
                  className="group flex items-center justify-between w-full py-4 px-5 border transition-all duration-300 hover:translate-x-1"
                  style={{ borderColor: "rgba(217,119,6,0.3)" }}
                >
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-pg-cream/35">
                      Email
                    </p>
                    <p className="text-base text-pg-cream">perangendis@gmail.com</p>
                  </div>
                  <span className="text-pg-cream/35 text-xl">→</span>
                </a>

                <p className="text-center text-xs text-pg-cream/30">
                  Kirimkan CV kamu ke salah satu kontak di atas
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
