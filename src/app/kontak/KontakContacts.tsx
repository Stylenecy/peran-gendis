"use client";

import { motion } from "framer-motion";

const EXPO_OUT = [0.22, 1, 0.36, 1] as const;
const TEAL = "#06b6d4";
const TEAL_LINE = "rgba(6,182,212,0.2)";

const contacts = [
  {
    channel: "Instagram",
    handle: "@peran.gendis",
    purpose: "Konten advokasi, berita terbaru, edisi Catatan Gendis",
    cta: "Buka →",
    href: "https://instagram.com/peran.gendis",
    note: null,
    color: "#d97706",
  },
  {
    channel: "Email",
    handle: "perangendis@gmail.com",
    purpose: "Sponsorship, kemitraan, korespondensi formal",
    cta: "Kirim →",
    href: "mailto:perangendis@gmail.com",
    note: null,
    color: "#a855f7",
  },
  {
    channel: "WhatsApp — Marel",
    handle: "0858-6519-3598",
    purpose: "Daftar GeMar, info volunteer, pertanyaan umum",
    cta: "Chat →",
    href: "https://wa.me/6285865193598",
    note: "Kontak Utama",
    color: "#10b981",
  },
  {
    channel: "WhatsApp — Zaky",
    handle: "0896-0225-2210",
    purpose: "Kontak alternatif untuk pertanyaan umum",
    cta: "Chat →",
    href: "https://wa.me/6289602252210",
    note: null,
    color: TEAL,
  },
];

export default function KontakContacts() {
  return (
    <section className="relative z-20 w-full pb-32 pt-4">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EXPO_OUT }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              Saluran Komunikasi
            </span>
          </div>
          <h2
            className="font-display italic text-pg-cream leading-[0.9]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.8rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Pilih cara
            <br />
            <span className="text-pg-cream/50">yang paling nyaman.</span>
          </h2>
        </motion.div>

        {/* Glass window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EXPO_OUT, delay: 0.1 }}
          className="liquid-glass rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
          style={{ border: "1px solid rgba(6,182,212,0.15)" }}
        >
          {/* Traffic lights title bar */}
          <div className="h-12 border-b border-white/5 bg-black/40 px-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span
              className="text-xs font-semibold tracking-wider"
              style={{ color: "rgba(6,182,212,0.55)" }}
            >
              Kontak — Peran Gendis
            </span>
            <div className="w-12" />
          </div>

          {/* Contact rows */}
          <div className="divide-y divide-white/5">
            {contacts.map(({ channel, handle, purpose, cta, href, note, color }, i) => (
              <motion.a
                key={channel}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: EXPO_OUT }}
                className="relative group grid grid-cols-12 gap-4 px-6 py-7 overflow-hidden hover:bg-white/[0.03] transition-colors"
              >
                <div
                  className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full transition-all duration-500"
                  style={{ background: color }}
                />

                <div className="col-span-12 sm:col-span-3 flex items-start pt-0.5 pl-2">
                  <div>
                    <span
                      className="text-xs font-bold tracking-[0.25em] uppercase block"
                      style={{ color }}
                    >
                      {channel}
                    </span>
                    {note && (
                      <span className="text-[10px] uppercase tracking-widest block mt-1 text-white/35">
                        {note}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-span-12 sm:col-span-4 flex items-center">
                  <span
                    className="font-display italic text-pg-cream text-lg md:text-xl"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {handle}
                  </span>
                </div>

                <div className="col-span-10 sm:col-span-4 flex items-center">
                  <p className="text-pg-cream/30 text-sm leading-snug">{purpose}</p>
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-center justify-end">
                  <span
                    className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color }}
                  >
                    {cta}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex items-center gap-8"
        >
          <div className="h-px w-16" style={{ background: TEAL_LINE }} />
          <p
            className="font-display italic text-pg-cream/20 text-lg"
            style={{ letterSpacing: "-0.01em" }}
          >
            &ldquo;Manisnya Kebersamaan dalam Kesetaraan&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
