"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function GerakCTA() {
  return (
    <section
      className="py-32 px-4 relative overflow-hidden"
      style={{ background: "#1a0533" }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(59,18,99,0.6),transparent)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection direction="up" delay={0.1}>
          <span className="text-xs font-bold tracking-[0.35em] uppercase border-l-2 pl-4 inline-block mb-8" style={{ color: "#d97706", borderColor: "#d97706" }}>
            Ikut Bergerak
          </span>
          <h2
            className="font-display italic text-pg-cream leading-[0.9] mb-6"
            style={{ fontSize: "clamp(2.5rem,7vw,6rem)", letterSpacing: "-0.04em" }}
          >
            Aksimu<br />dibutuhkan.
          </h2>
          <p className="text-pg-cream/45 text-lg font-light max-w-md mx-auto leading-relaxed mb-12">
            Bergabung sebagai relawan GeRak atau tanya lebih lanjut soal aksi yang sedang berjalan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285865193598"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-black text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:translate-x-1"
              style={{ background: "#d97706" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#fbbf24")}
              onMouseLeave={e => (e.currentTarget.style.background = "#d97706")}
            >
              Hubungi Marel
            </a>
            <a
              href="mailto:perangendis@gmail.com"
              className="px-10 py-4 border text-pg-cream text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/8 transition-all duration-300"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              Email Kami
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
