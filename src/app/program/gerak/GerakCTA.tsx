"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function GerakCTA() {
  return (
    <section
      className="py-32 px-4 relative overflow-hidden"
      style={{ background: "var(--color-pg-paper-2)" }}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,#fbe9f2,transparent)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection direction="up" delay={0.1}>
          <span className="text-xs font-bold tracking-[0.35em] uppercase border-l-2 pl-4 inline-block mb-8" style={{ color: "var(--color-pg-berry)", borderColor: "var(--color-pg-berry)" }}>
            Ikut Bergerak
          </span>
          <h2
            className="font-display italic text-pg-ink leading-[0.9] mb-6"
            style={{ fontSize: "clamp(2.5rem,7vw,6rem)", letterSpacing: "-0.04em" }}
          >
            Aksimu<br />dibutuhkan.
          </h2>
          <p className="text-pg-ink-mute text-lg font-light max-w-md mx-auto leading-relaxed mb-12">
            Bergabung sebagai relawan GeRak atau tanya lebih lanjut soal aksi yang sedang berjalan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6285865193598"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-pg-berry px-10 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-pg-berry-deep"
            >
              Hubungi Marel
              <span className="sr-only"> (buka WhatsApp di tab baru)</span>
            </a>
            <a
              href="mailto:perangendis@gmail.com"
              className="px-10 py-4 border text-pg-ink text-sm font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-300"
              style={{ borderColor: "var(--color-pg-paper-3)" }}
            >
              Email Kami
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
