"use client";

import AnimatedSection from "@/components/AnimatedSection";

const entryTiers = [
  {
    name: "Pijar Gendis",
    range: "Rp750.000 – Rp1.499.999",
    orProduct: "atau 50 paket produk",
    featured: false,
    benefits: [
      "Logo S pada logistik kegiatan",
      "Logo S pada publikasi",
      "E-Sertifikat",
      "Logo S pada startkit",
      "Story Instagram Ads",
    ],
  },
  {
    name: "Pilar Gendis",
    range: "Rp1.500.000 – Rp2.999.999",
    orProduct: "atau 75 paket produk",
    featured: true,
    benefits: [
      "Logo M pada logistik kegiatan",
      "Logo M pada publikasi",
      "E-Sertifikat",
      "Logo M pada startkit",
      "Story Instagram Ads",
      "Penyebaran brosur usaha",
    ],
  },
];

const katalis = {
  name: "Katalis Semesta",
  range: "> Rp3.000.000",
  orProduct: "atau 100 paket produk",
  tagline: "Untuk mereka yang ingin meninggalkan jejak.",
  benefits: [
    "Logo L pada logistik kegiatan",
    "Logo L pada publikasi",
    "E-Sertifikat",
    "Logo L pada startkit",
    "Story Instagram Ads",
    "Penyebaran brosur usaha",
    "Video profile komunitas",
    "Special request",
  ],
};

export default function SponsorTiers() {
  return (
    <section id="tier" className="py-24 px-4" style={{ background: "#03060A" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="mb-16">
            <span className="text-xs tracking-[0.35em] uppercase text-cyan-400 font-bold border-l-2 border-cyan-400 pl-4 block mb-6">
              Pilihan Kemitraan
            </span>
            <h2
              className="font-display italic text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.5rem,6vw,5rem)", letterSpacing: "-0.03em" }}
            >
              Pilih cara kamu<br />berkontribusi.
            </h2>
          </div>
        </AnimatedSection>

        {/* Entry + Mid tiers — 2 col, separated by 1px line */}
        <div className="grid md:grid-cols-2 gap-px mb-px" style={{ background: "rgba(255,255,255,0.08)" }}>
          {entryTiers.map(({ name, range, orProduct, benefits, featured }) => (
            <AnimatedSection key={name} direction="up" delay={0.2}>
              <div
                className="relative p-10 flex flex-col h-full group"
                style={{ background: featured ? "#080F1E" : "#050B14" }}
              >
                {/* Hover cyan left sweep */}
                <div className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full bg-cyan-400 transition-all duration-500" />

                {featured && (
                  <span className="text-[10px] text-cyan-400 font-bold tracking-[0.3em] uppercase mb-5 block">
                    Paling Populer
                  </span>
                )}

                <div className="mb-8">
                  <h3
                    className="font-display italic text-white mb-3"
                    style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", letterSpacing: "-0.02em" }}
                  >
                    {name}
                  </h3>
                  <p className="text-white/80 text-xl font-bold mb-1">{range}</p>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest">{orProduct}</p>
                </div>

                <div className="border-t border-white/10 pt-8 flex-1">
                  <ul className="space-y-3">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/65">
                        <span className="w-1 h-1 bg-cyan-400 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <a
                    href="https://wa.me/6285865193598"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:translate-x-1 ${
                      featured
                        ? "bg-cyan-700 hover:bg-cyan-600 text-white"
                        : "border border-white/15 text-white hover:bg-white/8"
                    }`}
                  >
                    Pilih {name}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Katalis Semesta — full-width aspirational */}
        <AnimatedSection direction="up" delay={0.35}>
          <div
            className="relative p-10 md:p-16 group overflow-hidden"
            style={{ background: "#0A0800", borderTop: "1px solid rgba(217,119,6,0.35)" }}
          >
            {/* Amber crown glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 pointer-events-none blur-[100px]"
              style={{ background: "rgba(217,119,6,0.12)" }}
            />

            {/* Hover amber left sweep */}
            <div className="absolute left-0 top-0 w-0.5 h-0 group-hover:h-full bg-amber-400 transition-all duration-500" />

            <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
              {/* Left — identity */}
              <div>
                <span className="text-[10px] text-amber-400 font-bold tracking-[0.35em] uppercase block mb-5">
                  Top Partnership
                </span>
                <h3
                  className="font-display italic leading-[0.9] mb-4"
                  style={{ fontSize: "clamp(2.8rem,5vw,4.5rem)", letterSpacing: "-0.03em", color: "#fbbf24" }}
                >
                  {katalis.name}
                </h3>
                <p className="text-white/80 text-2xl font-bold mb-1">{katalis.range}</p>
                <p className="text-white/25 text-[10px] uppercase tracking-widest mb-8">{katalis.orProduct}</p>
                <p className="text-white/45 text-lg font-light italic leading-relaxed max-w-xs">
                  {katalis.tagline}
                </p>
              </div>

              {/* Right — benefits + CTA */}
              <div className="border-t border-amber-500/15 md:border-t-0 md:border-l md:border-amber-500/15 pt-8 md:pt-0 md:pl-12">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {katalis.benefits.map((b, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-white/65">
                      <span className="w-1 h-1 bg-amber-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/6285865193598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-5 text-black text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:translate-x-1"
                  style={{ background: "#d97706" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#fbbf24")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#d97706")}
                >
                  Jadi Katalis Semesta
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
