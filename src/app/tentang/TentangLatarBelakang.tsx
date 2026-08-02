"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export default function TentangLatarBelakang() {
  return (
    <section
      className="relative min-h-screen px-4 overflow-hidden flex items-center bg-pg-paper-2"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/photos/gemar-tutoring.webp"
          alt="Kegiatan Peran Gendis"
          fill
          className="object-cover object-center opacity-40 mix-blend-overlay"
          priority
        />
      </div>

      {/* Gradient Blending Overlay */}
      {/* Transitions from previous section (var(--color-pg-paper)) to this one (var(--color-pg-paper-2)) */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-pg-paper via-pg-paper-2/50 to-pg-paper-2" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10 py-24">
        {/* Left Column: Big Editorial Quote */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <AnimatedSection direction="left" delay={0.2}>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-pg-ink leading-[1.1] tracking-[-0.02em]">
              Dari kepedulian yang <br className="hidden md:block"/>
              <em className="not-italic inline-block font-bold">
                <span className="">tidak bisa diam.</span>
              </em>
            </h2>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4} className="mt-12 pl-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-pg-berry rounded-full" />
            <p className="font-display text-2xl md:text-3xl italic text-pg-ink">
              &ldquo;Lakukan untuk Tuhan, bukan sebatas untuk manusia.&rdquo;
            </p>
            <p className="text-xs tracking-[0.3em] uppercase text-pg-berry mt-4 font-semibold">
              Ã¢â‚¬” Motto Peran Gendis
            </p>
          </AnimatedSection>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-8">
          <AnimatedSection direction="up" delay={0.3}>
            <div className="pg-card p-6 md:p-8 border-l-2 border-pg-berry/25 hover:border-pg-berry transition-all duration-500">
              <p className="text-pg-ink-soft text-lg font-light leading-relaxed">
                Peran Gendis lahir dari empat orang yang memilih untuk tidak berhenti bergerak Ã¢â‚¬” dan membangun komunitas ini secara independen.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4}>
            <div className="pg-card p-6 md:p-8 border-l-2 border-pg-berry/25 hover:border-pg-berry transition-all duration-500">
              <p className="text-pg-ink-soft text-lg font-light leading-relaxed">
                Awal 2026, mereka membangun komunitas ini secara independen:{" "}
                <strong className="text-pg-berry font-medium">grassroots, berbasis aksi, dan punya fondasi spiritual</strong> yang eksplisit.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.5}>
            <div className="pg-card p-6 md:p-8 border-l-2 border-pg-berry/25 hover:border-pg-berry transition-all duration-500">
              <p className="text-pg-ink-soft text-lg font-light leading-relaxed">
                Bukan gerakan top-down dari kampus atau institusi. Bukan LSM yang baru berdiri.
                Hanya orang-orang yang percaya bahwa{" "}
                <em className="text-pg-ink">langkah kecil bisa menjadi awal perubahan lebih baik</em>.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 right-0 pointer-events-none opacity-[0.03] translate-x-1/4 -translate-y-1/2 z-0">
        <span className="font-display font-bold text-[30rem] md:text-[40rem] leading-none text-pg-berry">
          26
        </span>
      </div>
    </section>
  );
}
