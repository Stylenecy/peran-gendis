"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const programs = [
  { href: "/program/catatan", label: "Catatan Gendis" },
  { href: "/program/gerak", label: "GeRak" },
  { href: "/program/gemar", label: "GeMar" },
];

const contacts = [
  { href: "https://instagram.com/peran.gendis", label: "@peran.gendis", external: true },
  { href: "mailto:perangendis@gmail.com", label: "perangendis@gmail.com", external: false },
  { href: "https://wa.me/6285865193598", label: "WhatsApp — Marel", external: true },
];

export default function Footer() {
  return (
    <div className="bg-pg-dark px-4 sm:px-6 pb-8 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_110%,rgba(107,33,168,0.25),transparent)] pointer-events-none" />
      <div
        className="absolute top-0 left-[8%] right-[8%] h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(217,119,6,0.35), transparent)" }}
      />

      <motion.footer
        className="liquid-glass max-w-6xl mx-auto rounded-2xl text-pg-cream/70 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Editorial motto */}
        <div className="px-8 md:px-12 pt-10 pb-8 border-b border-white/8">
          <p
            className="font-display italic text-pg-cream/80 leading-[1.05]"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}
          >
            Untuk perempuan. Untuk anak.<br />Untuk kesetaraan.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-12 py-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 overflow-hidden shrink-0 ring-1 ring-pg-gold/25">
                <Image
                  src="/logo.jpg"
                  alt="Peran Gendis"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <span className="font-display text-base font-semibold text-pg-cream tracking-[-0.01em]">
                Peran Gendis
              </span>
            </div>
            <p className="text-sm leading-relaxed text-pg-cream/50 max-w-[24ch]">
              Komunitas advokasi isu Perempuan, Anak, Gender, dan Disabilitas di Yogyakarta.
            </p>
          </div>

          {/* Program */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.35em] text-pg-gold mb-6 border-l-2 border-pg-gold pl-3">
              Program
            </h4>
            <ul className="space-y-3 text-sm">
              {programs.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-pg-cream/50 hover:text-pg-cream hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.35em] text-pg-gold mb-6 border-l-2 border-pg-gold pl-3">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-sm">
              {contacts.map(({ href, label, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-pg-cream/50 hover:text-pg-cream hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-8 md:px-12 pb-8 border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-pg-cream/30">© 2026 Peran Gendis. Semua hak dilindungi.</p>
          <p className="text-xs italic" style={{ color: "rgba(217,119,6,0.55)" }}>
            &ldquo;Lakukan untuk Tuhan, bukan sebatas untuk manusia&rdquo;
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
