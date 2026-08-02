"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isTentangActive = pathname === "/tentang" || pathname === "/tim";

  // Tutup menu saat pindah halaman.
  useEffect(() => setOpen(false), [pathname]);

  // Esc menutup menu — pengguna keyboard tidak boleh terkunci di dalamnya.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-pg-paper-3 bg-pg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-full py-1 pr-3"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-pg-paper-3">
            <Image
              src="/logo.webp"
              alt=""
              width={36}
              height={36}
              priority
              className="object-cover"
            />
          </span>
          <span className="font-display text-[16px] font-semibold tracking-tight text-pg-ink">
            Peran Gendis
          </span>
        </Link>

        <nav aria-label="Navigasi utama" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active =
                pathname === href || (href === "/tentang" && pathname === "/tim");
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-10 items-center rounded-full px-4 text-[14px] font-medium transition-colors ${
                      active
                        ? "bg-pg-berry-soft text-pg-berry"
                        : "text-pg-ink-soft hover:bg-pg-paper-2 hover:text-pg-ink"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/program/gemar#relawan"
            className="hidden min-h-10 items-center rounded-full bg-pg-berry px-5 text-[14px] font-semibold text-white transition-colors hover:bg-pg-berry-deep sm:inline-flex"
          >
            Jadi pengajar
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-ponsel"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-pg-paper-3 bg-white/70 transition-colors hover:bg-pg-paper-2 md:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-pg-ink transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-pg-ink transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-pg-ink transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Sub-menu Tentang → Tim (desktop) */}
      {isTentangActive && (
        <div className="hidden border-t border-pg-paper-3 bg-pg-paper/80 md:block">
          <nav
            aria-label="Bagian Tentang"
            className="mx-auto max-w-6xl px-6 py-2"
          >
            <ul className="flex items-center gap-2">
              {[
                { href: "/tentang", label: "Identitas" },
                { href: "/tim", label: "Tim Kami" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={pathname === href ? "page" : undefined}
                    className={`inline-flex min-h-9 items-center rounded-full px-4 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                      pathname === href
                        ? "bg-pg-berry text-white"
                        : "text-pg-ink-soft hover:bg-pg-paper-2"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-ponsel"
            aria-label="Navigasi utama"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-t border-pg-paper-3 bg-pg-paper/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto max-w-6xl px-4 py-3">
              {navLinks.map(({ href, label }) => {
                const active =
                  pathname === href ||
                  (href === "/tentang" && pathname === "/tim");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-12 items-center rounded-xl px-4 text-[15px] font-medium transition-colors ${
                        active
                          ? "bg-pg-berry-soft text-pg-berry"
                          : "text-pg-ink-soft hover:bg-pg-paper-2"
                      }`}
                    >
                      {label}
                    </Link>

                    {href === "/tentang" && active && (
                      <ul className="mb-1 ml-4 border-l-2 border-pg-berry/25 pl-4">
                        {[
                          { href: "/tentang", label: "Identitas" },
                          { href: "/tim", label: "Tim Kami" },
                        ].map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              aria-current={
                                pathname === sub.href ? "page" : undefined
                              }
                              className={`flex min-h-11 items-center rounded-lg px-3 text-[13px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                                pathname === sub.href
                                  ? "text-pg-berry"
                                  : "text-pg-ink-mute hover:text-pg-ink"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}

              <li className="mt-2">
                <Link
                  href="/program/gemar#relawan"
                  className="flex min-h-12 items-center justify-center rounded-full bg-pg-berry px-5 text-[15px] font-semibold text-white"
                >
                  Jadi pengajar
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
