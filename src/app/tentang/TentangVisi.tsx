"use client";

import AnimatedSection from "@/components/AnimatedSection";

const timeline = [
  { year: "2026", label: "Meningkatkan partisipasi anggota internal dan jejaring kemitraan advokasi." },
  { year: "2027", label: "Aktif menjalankan program kerja advokasi & Open Batch 1 rekrutmen." },
  { year: "2028", label: "Berkontribusi dalam advokasi regulasi lokal untuk kelompok rentan." },
  { year: "2029", label: "Menciptakan satu wilayah percontohan yang ramah PAGD." },
  { year: "2030", label: "Menjadi Katalisator dalam menciptakan lingkungan yang aman dan setara." },
];

const tujuan = [
  "Edukasi kesetaraan gender",
  "Advokasi hak & perlindungan anak",
  "Edukasi penyintas disabilitas",
  "Kesadaran publik & HAM",
];

export default function TentangVisi() {
  return (
    <section
      className="relative min-h-screen px-4 overflow-hidden flex items-center bg-[#3b1263]"
    >
      {/* Cinematic Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 mix-blend-screen"
        autoPlay
        muted
        loop
        playsInline
      />
      
      {/* Gradient Blending Overlay */}
      {/* Transitions from previous section (#0d0118) to this one (#3b1263) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0d0118] via-[#3b1263]/60 to-[#3b1263] z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10 py-24">
        
        {/* Left Column: Tujuan */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatedSection direction="up" delay={0.2}>
            <p className="inline-block text-pg-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1 border border-pg-gold/30 box-glow rounded-full bg-[#3b1263]/50 backdrop-blur-sm">
              Fokus Utama
            </p>
            <h2 className="font-display text-4xl font-bold text-pg-cream mb-8">
              Yang kami <em className="text-pg-gold not-italic inline-block relative">
                <span className="relative z-10 text-glow">perjuangkan.</span>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-pg-gold/50 box-glow" />
              </em>
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {tujuan.map((item, i) => (
              <AnimatedSection key={i} direction="up" delay={0.3 + i * 0.1}>
                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 border border-pg-gold/30 flex items-center justify-center text-pg-gold font-display italic text-xl group-hover:bg-pg-gold group-hover:text-[#3b1263] group-hover:box-glow transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-pg-gold/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">{i + 1}</span>
                  </div>
                  <span className="text-pg-cream/90 text-xl font-light tracking-wide group-hover:text-pg-gold transition-colors">
                    {item}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Right Column: Visi Timeline */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pl-16">
          <AnimatedSection direction="up" delay={0.4}>
            <p className="inline-block text-pg-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1 border border-pg-gold/30 box-glow rounded-full bg-[#3b1263]/50 backdrop-blur-sm">
              Visi 2030
            </p>
            <h2 className="font-display text-4xl font-bold text-pg-cream mb-12">
              Ke mana kami <em className="text-pg-gold not-italic relative inline-block">
                <span className="relative z-10 text-glow">berjalan.</span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-pg-gold/20 -rotate-2 z-0" />
              </em>
            </h2>
          </AnimatedSection>

          <div className="relative border-l-2 border-pg-gold/20 pl-8 md:pl-12 space-y-12 py-4">
            {timeline.map(({ year, label }, i) => (
              <AnimatedSection key={year} direction="left" delay={0.5 + i * 0.1}>
                <div className="relative group">
                  {/* Timeline Node Indicator */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 bg-[#3b1263] border-2 border-pg-gold rounded-full group-hover:bg-pg-gold group-hover:scale-125 group-hover:box-glow transition-all duration-300" />
                  
                  {/* Pulse Effect Behind Node on Hover */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-pg-gold opacity-0 group-hover:animate-ping" />
                  
                  <h3 className="font-display font-bold text-3xl text-pg-gold mb-3 group-hover:text-glow transition-all">
                    {year}
                  </h3>
                  <div className="liquid-glass p-5 border-l-2 border-transparent group-hover:border-pg-gold transition-colors duration-300">
                    <p className="text-pg-cream/80 text-base md:text-lg font-light leading-relaxed">
                      {label}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
