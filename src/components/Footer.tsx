import Link from "next/link";
import Image from "next/image";
import { Lonceng } from "@/components/Lonceng";

const programs = [
  { href: "/program/catatan", label: "Catatan Gendis" },
  { href: "/program/gemar", label: "GeMar — Gendis Mengajar" },
  { href: "/program/gerak", label: "GeRak — Gendis Beraksi" },
  { href: "/program", label: "Semua program" },
];

const contacts = [
  {
    href: "https://instagram.com/peran.gendis",
    label: "@peran.gendis",
    external: true,
  },
  {
    href: "mailto:perangendis@gmail.com",
    label: "perangendis@gmail.com",
    external: false,
  },
  {
    href: "https://wa.me/6285865193598",
    label: "WhatsApp — Marel",
    external: true,
  },
];

const ruangTim = [
  { href: "/laporan", label: "Laporan" },
  { href: "/kabar", label: "Kabar Gendis" },
  { href: "/data-gemar", label: "Data GeMar" },
  { href: "/aset", label: "Aset" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pg-deep text-pg-paper pg-grain on-deep">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <p
          className="max-w-3xl font-display leading-[1.1] text-pg-paper"
          style={{ fontSize: "clamp(1.6rem, 4.5vw, 3rem)" }}
        >
          Manisnya kebersamaan dalam kesetaraan.
        </p>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/95">
                <Image
                  src="/logo.webp"
                  alt=""
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </span>
              <span className="font-display text-base font-semibold text-pg-paper">
                Peran Gendis
              </span>
            </div>
            <p className="max-w-[30ch] text-sm leading-relaxed text-pg-paper/65">
              Komunitas advokasi isu Perempuan, Anak, Gender, dan Disabilitas di
              Yogyakarta.
            </p>
            <Link
              href="/program/gemar#relawan"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-pg-paper px-5 text-[14px] font-semibold text-pg-deep transition-colors hover:bg-white"
            >
              Ikut jadi pengajar
            </Link>
          </div>

          <nav aria-labelledby="footer-program">
            <h2
              id="footer-program"
              className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-pg-berry-soft"
            >
              <Lonceng className="h-4 w-4" />
              Program
            </h2>
            <ul className="space-y-1">
              {programs.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex min-h-9 items-center text-sm text-pg-paper/70 transition-colors hover:text-pg-paper"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-kontak">
            <h2
              id="footer-kontak"
              className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-pg-berry-soft"
            >
              <Lonceng className="h-4 w-4" />
              Hubungi kami
            </h2>
            <ul className="space-y-1">
              {contacts.map(({ href, label, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex min-h-9 items-center text-sm text-pg-paper/70 transition-colors hover:text-pg-paper"
                  >
                    {label}
                    {external && (
                      <span className="sr-only"> (buka di tab baru)</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs text-pg-paper/70">
              © 2026 Peran Gendis. Semua hak dilindungi.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="text-[11px] uppercase tracking-[0.2em] text-pg-paper/70">
                Ruang tim
              </span>
              {ruangTim.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex min-h-8 items-center text-[12px] text-pg-paper/55 transition-colors hover:text-pg-berry-soft"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <p className="font-display text-sm italic text-pg-paper/55">
            &ldquo;Lakukan untuk Tuhan, bukan sebatas untuk manusia&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
