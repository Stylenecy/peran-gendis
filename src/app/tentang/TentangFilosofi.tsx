"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export default function TentangFilosofi() {
  return (
    <section
      className="relative min-h-screen px-4 overflow-hidden flex items-center bg-[#0d0118]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/photos/IMG_8258.jpg"
          alt="Filosofi Peran Gendis"
          fill
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
      </div>

      {/* Gradient Blending Overlay */}
      {/* Transitions from previous section (#1a0533) to this one (#0d0118) */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#1a0533] via-[#0d0118]/80 to-[#0d0118]" />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-24">
        <AnimatedSection direction="up" delay={0.2} className="text-center mb-16 md:mb-24">
          <p className="inline-block text-pg-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1 border border-pg-gold/30 box-glow rounded-full bg-[#0d0118]/50 backdrop-blur-sm">
            Filosofi Identitas
          </p>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-pg-cream leading-tight">
            Nama dan logo yang <br />
            <em className="text-pg-gold not-italic relative inline-block">
              <span className="relative z-10 text-glow">bukan kebetulan.</span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-pg-gold/20 -rotate-2 z-0" />
            </em>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Card 1: Nama */}
          <AnimatedSection direction="up" delay={0.3} className="h-full">
            <div className="liquid-glass rounded-none p-8 md:p-12 min-h-[450px] flex flex-col group hover:-translate-y-2 hover:box-glow transition-all duration-500 h-full border-t-2 border-transparent hover:border-pg-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pg-gold/10 blur-3xl group-hover:bg-pg-gold/20 transition-colors duration-500" />
              
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="w-14 h-14 border border-pg-gold/50 flex items-center justify-center shrink-0 group-hover:bg-pg-gold/10 transition-colors">
                  <span className="font-display italic text-pg-gold text-3xl font-bold">N</span>
                </div>
                <div className="liquid-glass px-4 py-1.5 text-[10px] text-pg-gold tracking-[0.2em] uppercase font-bold border border-pg-gold/20">
                  Akronim
                </div>
              </div>
              
              <h3 className="font-display italic text-pg-cream text-3xl mb-4 relative z-10">
                Makna "Peran Gendis"
              </h3>
              <p className="text-base text-pg-cream/70 font-light leading-relaxed mb-8 max-w-[40ch] relative z-10">
                Sebuah akronim yang merangkum kelompok-kelompok yang kami perjuangkan haknya.
              </p>
              
              <div className="space-y-4 mt-auto relative z-10">
                {[
                  { letter: "P", word: "Perempuan" },
                  { letter: "A", word: "Anak" },
                  { letter: "G", word: "Gender" },
                  { letter: "D", word: "Disabilitas" },
                ].map(({ letter, word }) => (
                  <div key={letter} className="flex items-center gap-4 group/item">
                    <span className="w-10 h-10 liquid-glass flex items-center justify-center text-pg-gold font-display font-bold text-lg shrink-0 group-hover/item:bg-pg-gold group-hover/item:text-[#0d0118] transition-colors duration-300">
                      {letter}
                    </span>
                    <span className="text-pg-cream font-medium tracking-wide text-lg group-hover/item:text-pg-gold transition-colors">{word}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2: Logo */}
          <AnimatedSection direction="up" delay={0.4} className="h-full">
            <div className="liquid-glass rounded-none p-8 md:p-12 min-h-[450px] flex flex-col group hover:-translate-y-2 hover:box-glow transition-all duration-500 h-full border-t-2 border-transparent hover:border-pg-gold relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pg-gold/10 blur-3xl group-hover:bg-pg-gold/20 transition-colors duration-500" />

              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="w-14 h-14 border border-pg-gold/50 flex items-center justify-center shrink-0 group-hover:bg-pg-gold/10 transition-colors">
                  <span className="font-display italic text-pg-gold text-3xl font-bold">L</span>
                </div>
                <div className="liquid-glass px-4 py-1.5 text-[10px] text-pg-gold tracking-[0.2em] uppercase font-bold border border-pg-gold/20">
                  Simbol
                </div>
              </div>

              <h3 className="font-display italic text-pg-cream text-3xl mb-4 relative z-10">
                Makna Logo
              </h3>
              <p className="text-base text-pg-cream/70 font-light leading-relaxed mb-8 max-w-[40ch] relative z-10">
                Kombinasi yang mencerminkan komunitas yang hangat—tapi tidak ragu untuk kritis ketika harus.
              </p>

              <div className="space-y-8 mt-auto relative z-10">
                <div className="flex gap-5 group/item">
                  <div className="w-1 h-auto bg-pg-gold/30 group-hover/item:bg-pg-gold group-hover/item:box-glow transition-all duration-300 rounded-full" />
                  <div>
                    <p className="font-medium text-pg-gold text-lg mb-1 tracking-wide">
                      Garis Lonceng
                    </p>
                    <p className="text-pg-cream/80 text-sm font-light leading-relaxed">
                      Kami hadir untuk mengadvokasi. Lonceng sebagai tanda suara yang lantang dan tidak bisa diabaikan.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group/item">
                  <div className="w-1 h-auto bg-pg-gold/30 group-hover/item:bg-pg-gold group-hover/item:box-glow transition-all duration-300 rounded-full" />
                  <div>
                    <p className="font-medium text-pg-gold text-lg mb-1 tracking-wide">
                      Bunga Bakung Lembah
                    </p>
                    <p className="text-pg-cream/80 text-sm font-light leading-relaxed">
                      Cantik, tetapi beracun. Terkesan manis, tetapi berani bersifat kritis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
