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
      className="relative bg-[#0d0118] text-white select-none"
      style={{ colorScheme: "dark" }}
    >
      <PageBg />
      <div className="relative z-10">
        <GemarHero />
        <GemarWhy />
        <GemarDocumentary />
        <GemarForStudents />
        <GemarLocations />
        <GemarVolunteer />

        <section className="py-10 px-6 border-t border-pg-cream/5 text-center">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 text-pg-cream/25 text-[11px] tracking-[0.2em] uppercase hover:text-pg-cream/55 transition-colors"
          >
            ← Lihat semua program
          </Link>
        </section>
      </div>
    </div>
  );
}
