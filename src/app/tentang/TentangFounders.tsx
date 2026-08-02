"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";

const founders = [
  {
    name: "Martha Angelina Gunawan",
    nickname: "Angel",
    role: "Co-Founder",
    tags: ["PJ Komisi Gender"],
    note: null,
    image: "/photos/personil/Martha-Angelina.webp",
  },
  {
    name: "Nadila Salwa",
    nickname: "Nadila",
    role: "Co-Founder",
    tags: [],
    note: null,
    image: null, // No photo yet
  },
  {
    name: "Vincentius Rian",
    nickname: "Rayen",
    role: "Co-Founder",
    tags: ["PJ Komisi Anak"],
    note: null,
    image: "/photos/personil/Vincentius-Rian.webp",
  },
];

export default function TentangFounders() {
  return (
    <section
      className="relative min-h-screen px-4 overflow-hidden flex flex-col justify-center bg-pg-paper-2"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/photos/gemar-outdoor.webp"
          alt="Founder Peran Gendis"
          fill
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
      </div>

      {/* Gradient Blending Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-pg-deep via-pg-paper-2/80 to-pg-paper-2" />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-24 flex-1 flex flex-col justify-center">
        <AnimatedSection direction="up" delay={0.2} className="text-center mb-16 md:mb-24">
          <p className="inline-block text-pg-berry text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1 border border-pg-berry/25 rounded-full bg-pg-paper-2/50 backdrop-blur-sm">
            Tim Pendiri
          </p>
          <h2 className="font-display text-4xl md:text-[clamp(3rem,5vw,4.5rem)] font-bold text-pg-ink leading-tight">
            Empat orang yang <em className="text-pg-berry not-italic relative inline-block">
              <span className="relative z-10">memulai.</span>
              <div className="absolute bottom-1 left-0 w-full h-3 bg-pg-berry-soft -rotate-2 z-0" />
            </em>
          </h2>
          <p className="text-pg-ink-soft text-lg mt-6 font-light max-w-2xl mx-auto leading-relaxed">
            Mereka memilih membangun gerakan secara independenÃ¢â‚¬”dengan aksi nyata di lapangan.
          </p>
        </AnimatedSection>

        {/* Highlighted Founder - Marelta */}
        <AnimatedSection direction="up" delay={0.3} className="mb-8 md:mb-12">
          <div className="pg-card rounded-none p-0 flex flex-col md:flex-row group transition-all duration-500 border border-pg-berry/25 hover:border-pg-berry relative overflow-hidden">
            {/* Ambient Background Glow for Marelta */}
            <div className="absolute inset-0 bg-pg-berry-soft blur-3xl group-hover:bg-pg-berry-soft transition-colors duration-500 z-0" />
            
            {/* Photo Column - Using object-contain and bottom anchor to prevent blurring from zoom */}
            <div className="w-full md:w-[35%] h-[450px] relative shrink-0 border-b md:border-b-0 md:border-r border-pg-berry/25 overflow-hidden bg-gradient-to-t from-pg-paper to-transparent">
              <Image 
                src="/photos/personil/Marelta-Putri.webp" 
                alt="Marelta Putri Prihantoro" 
                fill 
                className="object-contain object-bottom filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Info Column */}
            <div className="w-full md:w-[65%] p-8 md:p-12 flex flex-col justify-center relative z-10">
              <h3 className="font-display font-bold text-4xl md:text-5xl text-pg-ink mb-2">
                Marelta Putri Prihantoro
              </h3>
              <p className="text-xl font-bold text-pg-berry mb-6 tracking-wide uppercase">
                Founder
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <span className="border border-pg-berry/25 text-pg-berry text-xs uppercase tracking-widest font-bold px-3 py-1.5 bg-pg-berry-soft">
                  PJ Komisi Disabilitas
                </span>
                <span className="border border-pg-berry/25 text-pg-berry text-xs uppercase tracking-widest font-bold px-3 py-1.5 bg-pg-berry-soft">
                  Kepala Advokasi
                </span>
              </div>

              <p className="text-lg text-pg-ink-soft font-light leading-relaxed mb-6">
                Sebagai inisiator utama, Marelta membawa visi keadilan ruang bagi kelompok rentan. Ia adalah penghubung utama untuk kolaborasi GeMar, advokasi disabilitas, dan inisiatif sponsorship.
              </p>
              
              <div className="mt-auto border-t border-pg-berry/25 pt-6">
                <p className="font-display italic text-pg-ink text-xl">
                  "Ruang aman bukan diberikan, melainkan diciptakan bersama."
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Other Founders */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {founders.map((founder, index) => (
            <AnimatedSection key={founder.name} direction="up" delay={0.4 + index * 0.1} className="h-full">
              <div className="pg-card rounded-none flex flex-col group hover:-translate-y-3 transition-all duration-500 h-full border border-pg-paper-3 hover:border-pg-berry/25 relative overflow-hidden">
                
                {/* Photo Top Half */}
                <div className="w-full h-64 relative overflow-hidden bg-gradient-to-t from-pg-paper to-pg-paper-2/50 border-b border-pg-paper-3">
                  {founder.image ? (
                    <Image 
                      src={founder.image} 
                      alt={founder.name} 
                      fill 
                      className="object-contain object-bottom filter grayscale-0 md:grayscale-[40%] md:group-hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pg-paper-2 to-pg-deep">
                      <span className="font-display italic text-pg-berry text-7xl font-bold">
                        {founder.nickname[0]}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-pg-paper-2 via-transparent to-transparent opacity-90" />
                </div>
                
                {/* Info Bottom Half */}
                <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="font-display font-bold text-2xl text-pg-ink leading-tight">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-semibold text-pg-berry mt-2 mb-5">
                    {founder.role}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.tags.map(tag => (
                      <span key={tag} className="border border-pg-berry/25 text-pg-berry text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-pg-berry-soft">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {founder.note && (
                    <p className="text-sm text-pg-ink-soft font-light mt-auto leading-relaxed border-t border-pg-paper-3 pt-5">
                      {founder.note}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Link to Team Page */}
        <AnimatedSection direction="up" delay={0.8} className="flex justify-center">
          <Link 
            href="/tim" 
            className="group flex items-center justify-center gap-4 px-8 py-4 bg-pg-berry text-white hover:bg-pg-berry transition-all duration-300 font-bold tracking-widest uppercase text-sm"
          >
            <span>Lihat Seluruh Anggota Tim</span>
            <span className="group-hover:translate-x-2 transition-transform">Ã¢â€ ’</span>
          </Link>
        </AnimatedSection>

      </div>
    </section>
  );
}
