"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SplitText from "@/components/SplitText";

export default function SponsorCTA() {
  return (
    <section
      className="relative py-40 px-4 overflow-hidden"
      style={{ background: "#03060A" }}
    >
      {/* Cross light lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-[500px] blur-[8px]" style={{ background: "#06b6d4" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[500px] blur-[8px]" style={{ background: "#d97706" }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <AnimatedSection direction="up" delay={0.1} className="mb-6">
          <span className="text-xs tracking-[0.35em] uppercase text-cyan-400 font-bold border-l-2 border-cyan-400 pl-4 inline-block">
            Hubungi Kami
          </span>
        </AnimatedSection>

        <div
          className="font-display font-bold text-white leading-[0.9] mb-6"
          style={{ letterSpacing: "-0.04em", fontSize: "clamp(3.5rem,10vw,8rem)" }}
        >
          <SplitText
            text="Tertarik Bermitra?"
            className="justify-center italic"
            delay={0.2}
          />
        </div>

        <AnimatedSection direction="up" delay={0.6} className="mb-14">
          <p className="text-white/45 text-lg font-light max-w-md mx-auto leading-relaxed">
            Hubungi Marelta langsung — kami senang mendiskusikan kolaborasi yang paling sesuai untuk kamu.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.8} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6285865193598"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 text-black text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:translate-x-1"
            style={{ background: "#d97706" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#fbbf24")}
            onMouseLeave={e => (e.currentTarget.style.background = "#d97706")}
          >
            Chat Marelta
          </a>
          <a
            href="mailto:perangendis@gmail.com"
            className="px-12 py-5 border border-white/15 text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/8 transition-all duration-300"
          >
            Email Kami
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
