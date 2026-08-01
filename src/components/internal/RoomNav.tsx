"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Tulang punggung "satu sistem": switcher antar ruang internal, tampil sama di
// tiap ruang. Bikin Kabar / Data GeMar / Aset terasa satu kesatuan, bukan halaman lepas.
const ROOMS = [
  { href: "/laporan", label: "Laporan" },
  { href: "/kabar", label: "Kabar" },
  { href: "/data-gemar", label: "Data GeMar" },
  { href: "/aset", label: "Aset" },
] as const;

export default function RoomNav() {
  const pathname = usePathname();

  return (
    <nav className="mb-8 flex flex-wrap items-center justify-center gap-1.5">
      {ROOMS.map((r) => {
        const active = pathname === r.href || pathname.startsWith(r.href + "/");
        return (
          <Link
            key={r.href}
            href={r.href}
            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-200 ${
              active
                ? "bg-pg-gold/15 text-pg-gold border border-pg-gold/40"
                : "text-pg-cream/45 hover:text-pg-cream border border-pg-cream/12"
            }`}
          >
            {r.label}
          </Link>
        );
      })}
      <Link
        href="/"
        className="px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-pg-cream/30 hover:text-pg-cream/70 transition-colors duration-200"
      >
        ← Situs
      </Link>
    </nav>
  );
}
