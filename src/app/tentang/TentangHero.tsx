"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SplitText from "@/components/SplitText";

export default function TentangHero() {
  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-[#0d0118]"
    >
      {/* Cinematic Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 w-full h-full scale-110 opacity-60 mix-blend-screen"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Gradient Transition Overlays */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0d0118]/60 via-[#0d0118]/30 to-[#0d0118] z-0" />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,18,99,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex-1 flex flex-col justify-center items-center">
        <AnimatedSection direction="up" delay={0.2} className="mb-6">
          <div className="inline-flex items-center gap-2 liquid-glass p-1 pr-4 rounded-none border-l-2 border-pg-gold relative overflow-hidden group">
            {/* Animated Glow inside badge */}
            <div className="absolute inset-0 bg-pg-gold/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="bg-pg-gold text-white text-[11px] md:text-xs font-semibold px-3 py-1.5 uppercase tracking-widest select-none relative z-10">
              Tentang Kami
            </span>
            <span className="text-xs md:text-sm text-pg-cream/90 font-medium tracking-wide relative z-10">
              Mengenal lebih dekat
            </span>
          </div>
        </AnimatedSection>

        <div className="w-full max-w-4xl mx-auto font-display font-bold leading-[0.9] tracking-[-0.03em] text-pg-cream mb-8 relative">
          {/* Subtle backglow for text */}
          <div className="absolute inset-0 bg-pg-gold/10 blur-3xl rounded-full" />
          <SplitText
            text="Bukan sekadar komunitas diskusi."
            className="text-[clamp(3.5rem,8vw,7rem)] justify-center relative z-10"
            delay={0.4}
          />
        </div>

        <AnimatedSection direction="up" delay={0.8} className="max-w-2xl">
          <p className="text-base md:text-xl text-pg-cream/80 font-light leading-relaxed">
            Kami hadir sebagai ruang belajar bersama — dan platform aksi nyata
            untuk isu-isu yang sering luput dari perhatian.
          </p>
        </AnimatedSection>
      </div>
      
      {/* Scroll indicator */}
      <AnimatedSection
        direction="none"
        delay={1.2}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float"
      >
        <div className="w-px h-20 bg-gradient-to-b from-pg-gold via-pg-gold/50 to-transparent" />
      </AnimatedSection>
    </section>
  );
}
