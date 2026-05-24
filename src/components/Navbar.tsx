"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/program", label: "Program" },
  { href: "/sponsor", label: "Dukung" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isTentangActive = pathname === "/tentang" || pathname === "/tim";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-2">
        <div className="w-full flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link 
              href="/" 
              className="pointer-events-auto h-12 rounded-full liquid-glass flex items-center gap-3 pr-5 pl-1.5 shadow-lg hover:bg-white/5 transition-colors group"
              style={{ background: "rgba(13, 1, 24, 0.4)", backdropFilter: "blur(16px)" }}
            >
              <div className="w-9 h-9 rounded-full overflow-hidden bg-pg-cream flex items-center justify-center shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Logo Peran Gendis"
                  width={36}
                  height={36}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-pg-cream font-display font-bold text-[15px] leading-tight tracking-wide hidden sm:block">
                Peran Gendis
              </span>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav 
            className="hidden md:flex flex-none pointer-events-auto items-center gap-1 liquid-glass p-1.5 rounded-full shadow-lg relative"
            style={{ background: "rgba(13, 1, 24, 0.4)", backdropFilter: "blur(16px)" }}
          >
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href === "/tentang" && pathname === "/tim");
              return (
                <div key={href} className="relative group">
                  <Link
                    href={href}
                    className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors block ${
                      active
                        ? "bg-white/15 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right: Mobile Toggle & Spacer */}
          <div className="flex-1 flex justify-end pointer-events-auto">
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-12 h-12 rounded-full liquid-glass flex flex-col gap-1 items-center justify-center shadow-lg hover:bg-white/5 transition-colors"
              style={{ background: "rgba(13, 1, 24, 0.4)", backdropFilter: "blur(16px)" }}
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Desktop Active Sub-menu for Tentang -> Tim */}
        <AnimatePresence>
          {isTentangActive && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden md:flex pointer-events-auto"
            >
              <nav 
                className="liquid-glass p-1 rounded-full shadow-lg flex items-center gap-1"
                style={{ background: "rgba(217, 119, 6, 0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(217, 119, 6, 0.3)" }}
              >
                <Link
                  href="/tentang"
                  className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-bold transition-colors ${
                    pathname === "/tentang" ? "bg-pg-gold text-[#0d0118]" : "text-pg-gold hover:bg-pg-gold/20"
                  }`}
                >
                  Identitas
                </Link>
                <Link
                  href="/tim"
                  className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-bold transition-colors ${
                    pathname === "/tim" ? "bg-pg-gold text-[#0d0118]" : "text-pg-gold hover:bg-pg-gold/20"
                  }`}
                >
                  Tim Kami
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-16 left-4 right-4 mt-2 p-3 rounded-[1.5rem] liquid-glass shadow-2xl pointer-events-auto md:hidden flex flex-col gap-1 z-40"
            style={{ background: "rgba(13, 1, 24, 0.85)", backdropFilter: "blur(24px)" }}
          >
            {navLinks.map(({ href, label }) => {
              const isTentangLink = href === "/tentang";
              const active = pathname === href || (isTentangLink && pathname === "/tim");
              
              return (
                <div key={href} className="flex flex-col">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </Link>
                  
                  {/* Mobile Sub-menu for Tentang */}
                  {isTentangLink && active && (
                    <div className="ml-4 mt-1 mb-2 pl-4 border-l-2 border-pg-gold/30 flex flex-col gap-1">
                      <Link
                        href="/tentang"
                        onClick={() => setOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-[12px] uppercase tracking-widest font-bold transition-colors ${
                          pathname === "/tentang" ? "text-pg-gold" : "text-white/50 hover:text-white"
                        }`}
                      >
                        Identitas
                      </Link>
                      <Link
                        href="/tim"
                        onClick={() => setOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-[12px] uppercase tracking-widest font-bold transition-colors ${
                          pathname === "/tim" ? "text-pg-gold" : "text-white/50 hover:text-white"
                        }`}
                      >
                        Tim Kami
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
