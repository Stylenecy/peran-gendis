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
      className="relative min-h-screen px-4 overflow-hidden flex items-center bg-pg-deep on-deep"
    >

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-10 py-24">
        
        {/* Left Column: Tujuan */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatedSection direction="up" delay={0.2}>
            <p className="inline-block text-pg-berry-soft text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1 border border-pg-berry-soft/30 rounded-full bg-white/10">
              Fokus Utama
            </p>
            <h2 className="font-display text-4xl font-bold text-pg-paper mb-8">
              Yang kami <em className="text-pg-berry-soft not-italic inline-block relative">
                <span className="relative z-10">perjuangkan.</span>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-pg-berry-soft/70" />
              </em>
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {tujuan.map((item, i) => (
              <AnimatedSection key={i} direction="up" delay={0.3 + i * 0.1}>
                <div className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300">
                  <div className="w-12 h-12 border border-pg-berry-soft/30 flex items-center justify-center text-pg-berry-soft font-display italic text-xl group-hover:bg-pg-berry-soft group-hover:text-pg-deep group-hover: transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-pg-berry-soft/70 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative z-10">{i + 1}</span>
                  </div>
                  <span className="text-pg-paper/80 text-xl font-light tracking-wide group-hover:text-pg-berry-soft transition-colors">
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
            <p className="inline-block text-pg-berry-soft text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1 border border-pg-berry-soft/30 rounded-full bg-white/10">
              Visi 2030
            </p>
            <h2 className="font-display text-4xl font-bold text-pg-paper mb-12">
              Ke mana kami <em className="text-pg-berry-soft not-italic relative inline-block">
                <span className="relative z-10">berjalan.</span>
                <div className="absolute bottom-1 left-0 w-full h-3 bg-pg-berry-soft/70 -rotate-2 z-0" />
              </em>
            </h2>
          </AnimatedSection>

          <div className="relative border-l-2 border-pg-berry-soft/30 pl-8 md:pl-12 space-y-12 py-4">
            {timeline.map(({ year, label }, i) => (
              <AnimatedSection key={year} direction="left" delay={0.5 + i * 0.1}>
                <div className="relative group">
                  {/* Timeline Node Indicator */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 bg-pg-deep border-2 border-pg-berry-soft rounded-full group-hover:bg-pg-berry-soft group-hover:scale-125 group-hover: transition-all duration-300" />
                  
                  {/* Pulse Effect Behind Node on Hover */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-pg-berry opacity-0 group-hover:animate-ping" />
                  
                  <h3 className="font-display font-bold text-3xl text-pg-berry-soft mb-3 group-hover: transition-all">
                    {year}
                  </h3>
                  <div className="bg-white/5 rounded-xl p-5 border-l-2 border-transparent group-hover:border-pg-berry-soft transition-colors duration-300">
                    <p className="text-pg-paper/80 text-base md:text-lg font-light leading-relaxed">
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
