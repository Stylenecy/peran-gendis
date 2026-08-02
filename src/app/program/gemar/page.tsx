export const dynamic = "force-dynamic";

import PageBg from "@/components/PageBg";
import Link from "next/link";
import GemarHero from "./GemarHero";
import GemarWhy from "./GemarWhy";
import GemarDocumentary from "./GemarDocumentary";
import GemarForStudents from "./GemarForStudents";
import GemarLocations from "./GemarLocations";
import GemarVolunteer from "./GemarVolunteer";

export default function GeMar() {
  return (
    <div
      className="relative bg-pg-paper text-pg-ink"
    >
      <PageBg />
      <div className="relative z-10">
        <GemarHero />
        <GemarWhy />
        <GemarDocumentary />
        <GemarForStudents />
        <GemarLocations />
        <GemarVolunteer />

        <section className="border-t border-pg-paper-3 px-6 py-10 text-center">
          <Link
            href="/program"
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-pg-ink-soft transition-colors hover:text-pg-berry"
          >
            ← Lihat semua program
          </Link>
        </section>
      </div>
    </div>
  );
}
