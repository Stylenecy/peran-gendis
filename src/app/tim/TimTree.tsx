"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

// Data Structure
const timInti = [
  { name: "Arion Sudibyo", image: "/photos/personil/Arion-Sudibyo.webp" },
  { name: "Jurita", image: "/photos/personil/Jurita.webp" },
  { name: "Eunica", image: null },
  { name: "Aurellicha", image: null },
  { name: "Zaki", image: null },
  { name: "Callysta", image: null },
  { name: "Catherine Surya", image: null },
];

const volunteerGemar = [
  { name: "Farhani Kholilah", image: "/photos/personil/Farhani-Kholilah.webp" },
  { name: "Syahda Tsaqif", image: "/photos/personil/Syahda-Tsaqif.webp" },
  { name: "Rizqia Azkiya", image: null },
  { name: "Maria Imanuella Ratna", image: null },
  { name: "Zahraa Putri", image: null },
  { name: "Amalia", image: null },
  { name: "Dila", image: null },
  { name: "Latif", image: null },
  { name: "Zare", image: null },
];

const coFounders = [
  { name: "Martha Angelina Gunawan", image: "/photos/personil/Martha-Angelina.webp" },
  { name: "Nadila Salwa", image: null },
  { name: "Vincentius Rian", image: "/photos/personil/Vincentius-Rian.webp" }
];

const MemberCard = ({ name, role, image, isLarge = false }: { name: string; role: string; image: string | null; isLarge?: boolean }) => (
  <div className={`pg-card rounded-none flex flex-col group hover:-translate-y-2 hover: transition-all duration-500 border border-pg-paper-3 hover:border-pg-berry relative overflow-hidden bg-pg-paper-2 z-10 w-full h-full`}>
    <div className={`w-full relative overflow-hidden bg-gradient-to-t from-pg-paper to-transparent ${isLarge ? 'aspect-[3/4] md:aspect-square lg:aspect-[3/4]' : 'aspect-[3/4]'}`}>
      {image ? (
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-contain object-bottom filter grayscale-0 md:grayscale-[40%] md:group-hover:grayscale-0 transition-all duration-700"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-pg-paper-2/50">
          <span className="font-display italic text-pg-berry text-6xl font-bold">
            {name[0]}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-pg-paper via-pg-paper/20 to-transparent opacity-90" />
    </div>
    
    <div className="p-5 text-center flex-1 flex flex-col justify-center relative z-10 border-t border-pg-berry/25 group-hover:border-pg-berry/25 transition-colors">
      <h3 className={`font-display font-bold text-pg-ink leading-tight ${isLarge ? 'text-3xl mb-2' : 'text-xl mb-1'}`}>
        {name}
      </h3>
      <p className="text-[10px] md:text-xs font-bold text-pg-berry uppercase tracking-widest">
        {role}
      </p>
    </div>
  </div>
);

export default function TimTree() {
  return (
    <section className="relative min-h-screen px-4 pt-32 pb-24 overflow-hidden bg-pg-paper">
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-pg-berry-soft blur-[120px] rounded-full pointer-events-none fixed" />
      <div className="absolute right-0 bottom-1/3 w-[500px] h-[500px] bg-pg-berry-deep/10 blur-[120px] rounded-full pointer-events-none fixed" />

      {/* Hero Title */}
      <div className="relative z-20 max-w-4xl mx-auto text-center mb-32">
        <AnimatedSection direction="up" delay={0.1}>
          <p className="inline-block text-pg-berry text-xs font-bold tracking-[0.3em] uppercase mb-4 px-4 py-1 border border-pg-berry/25 rounded-full bg-pg-paper/50 backdrop-blur-sm">
            Struktur Organisasi
          </p>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.2}>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-bold text-pg-ink leading-[0.9] mb-8">
            Pohon <em className="text-pg-berry not-italic relative inline-block">
              <span className="relative z-10">Pergerakan.</span>
            </em>
          </h1>
        </AnimatedSection>
        <AnimatedSection direction="up" delay={0.3}>
          <p className="text-pg-ink-soft text-lg md:text-xl font-light max-w-2xl mx-auto">
            Setiap cabang dan ranting memiliki perannya masing-masing dalam mewujudkan ruang aman dan setara.
          </p>
        </AnimatedSection>
      </div>

      <div className="relative max-w-7xl mx-auto z-10 space-y-32 md:space-y-40">
        
        {/* The Golden Timeline Backbone (Left Aligned on Desktop) */}
        <div className="absolute left-4 lg:left-[33.333333%] top-0 bottom-0 w-px bg-gradient-to-b from-pg-gold via-pg-gold/20 to-transparent -translate-x-1/2 z-0 hidden lg:block" />

        {/* Level 1: Founder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          <div className="absolute top-12 left-4 lg:left-[33.333333%] -translate-x-1/2 w-3 h-3 rounded-full bg-pg-berry hidden lg:block z-10" />
          
          <div className="lg:col-span-4 flex flex-col justify-start lg:pt-8 relative">
            <AnimatedSection direction="left" delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-pg-ink mb-4 leading-tight">
                Kepala <br/>
                <em className="text-pg-berry not-italic">Pergerakan</em>
              </h2>
              <div className="h-px w-24 bg-pg-berry-soft mb-4" />
              <p className="text-pg-ink-mute font-light text-sm tracking-wide">
                Menginisiasi, mengarahkan, dan memastikan pondasi gerakan tetap teguh pada visi utamanya.
              </p>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-8">
            <AnimatedSection direction="up" delay={0.3}>
              <div className="max-w-md">
                <MemberCard 
                  name="Marelta Putri Prihantoro" 
                  role="Founder" 
                  image="/photos/personil/Marelta-Putri.webp" 
                  isLarge={true} 
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Level 2: Co-Founders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          <div className="absolute top-12 left-4 lg:left-[33.333333%] -translate-x-1/2 w-3 h-3 rounded-full border-2 border-pg-berry bg-pg-paper hidden lg:block z-10" />
          
          <div className="lg:col-span-4 flex flex-col justify-start lg:pt-8 relative">
            <AnimatedSection direction="left" delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-pg-ink mb-4 leading-tight">
                Dewan <br/>
                <em className="text-pg-berry not-italic">Co-Founder</em>
              </h2>
              <div className="h-px w-24 bg-pg-berry-soft mb-4" />
              <p className="text-pg-ink-mute font-light text-sm tracking-wide">
                Mendukung berdirinya komunitas dan merumuskan langkah awal melalui komisi dan keahlian spesifik.
              </p>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coFounders.map((cf, i) => (
                <AnimatedSection key={cf.name} direction="up" delay={0.3 + i * 0.1}>
                  <MemberCard name={cf.name} role="Co-Founder" image={cf.image} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Level 3: IT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          <div className="absolute top-12 left-4 lg:left-[33.333333%] -translate-x-1/2 w-3 h-3 rounded-full bg-pg-berry hidden lg:block z-10" />
          
          <div className="lg:col-span-4 flex flex-col justify-start lg:pt-8 relative">
            <AnimatedSection direction="left" delay={0.2}>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-pg-ink mb-4 leading-tight">
                Tim IT <br/>
                <span className="text-3xl">&</span> <em className="text-pg-berry not-italic">Digital</em>
              </h2>
              <div className="h-px w-24 bg-pg-berry-soft mb-4" />
              <p className="text-pg-ink-mute font-light text-sm tracking-wide">
                Menghidupkan eksistensi digital komunitas, membangun platform, dan merangkai kode menjadi rumah virtual yang aman.
              </p>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-8">
            <AnimatedSection direction="up" delay={0.3}>
              <div className="max-w-xs">
                <MemberCard 
                  name="Dex Bennett" 
                  role="Lead Web Developer" 
                  image="/photos/personil/Dex-Bennett.webp" 
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Level 4: Tim Inti */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          <div className="absolute top-12 left-4 lg:left-[33.333333%] -translate-x-1/2 w-3 h-3 rounded-full border-2 border-pg-berry bg-pg-paper hidden lg:block z-10" />

          <div className="lg:col-span-4 flex flex-col justify-start lg:pt-8 relative">
            <div className="sticky top-32">
              <AnimatedSection direction="left" delay={0.2}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-pg-ink mb-4 leading-tight">
                  Tim <br/>
                  <em className="text-pg-berry not-italic">Inti</em>
                </h2>
                <div className="h-px w-24 bg-pg-berry-soft mb-4" />
                <p className="text-pg-ink-mute font-light text-sm tracking-wide">
                  Mesin utama pergerakan. Mereka yang mengadvokasi, mengorganisir, dan mewujudkan ide menjadi realita.
                </p>
              </AnimatedSection>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {timInti.map((member, i) => (
                <AnimatedSection key={member.name} direction="up" delay={0.1 * (i % 6)}>
                  <MemberCard name={member.name} role="Anggota" image={member.image} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Level 5: Volunteer GeMar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          <div className="absolute top-12 left-4 lg:left-[33.333333%] -translate-x-1/2 w-3 h-3 rounded-full bg-pg-berry-soft hidden lg:block z-10" />

          <div className="lg:col-span-4 flex flex-col justify-start lg:pt-8 relative">
            <div className="sticky top-32">
              <AnimatedSection direction="left" delay={0.2}>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-pg-ink mb-4 leading-tight">
                  Volunteer <br/>
                  <em className="text-pg-berry not-italic">GeMar</em>
                </h2>
                <div className="h-px w-24 bg-pg-berry-soft mb-4" />
                <p className="text-pg-ink-mute font-light text-sm tracking-wide">
                  Mereka yang turun langsung Ã¢â‚¬” mengajar, mendampingi, dan menghadirkan ruang belajar bagi anak-anak Yogyakarta.
                </p>
              </AnimatedSection>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {volunteerGemar.map((member, i) => (
                <AnimatedSection key={member.name} direction="up" delay={0.1 * (i % 6)}>
                  <MemberCard name={member.name} role="Volunteer GeMar" image={member.image} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
