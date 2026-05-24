"use client";

import AnimatedSection from "@/components/AnimatedSection";
import SplitText from "@/components/SplitText";
import CountUp from "@/components/CountUp";

const miniStats = [
  { value: 12956, suffix: "", label: "anak DIY tidak bersekolah" },
  { value: 11441, suffix: "", label: "kasus kekerasan 5 tahun terakhir" },
  { value: 29, suffix: ",74%", label: "gap partisipasi kerja perempuan" },
];

export default function SponsorHero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#050B14" }}
    >
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/70 via-[#050B14]/40 to-[#050B14] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_35%,rgba(6,182,212,0.1)_0%,transparent_70%)]" />

      {/* Center content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 pt-32 pb-8">
        <AnimatedSection direction="up" delay={0.1} className="w-full max-w-5xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-[0.35em] uppercase text-cyan-400 border-l-2 border-cyan-400 pl-4 text-left block">
            Kemitraan & Sponsorship
          </span>
        </AnimatedSection>

        <div className="w-full max-w-5xl mx-auto font-display font-bold leading-[0.9] tracking-[-0.03em] text-white mb-8">
          <SplitText
            text="Investasi untuk ruang aman."
            className="text-[clamp(3.2rem,8vw,7rem)] justify-center italic"
            delay={0.25}
          />
        </div>

        <AnimatedSection direction="up" delay={0.7} className="max-w-xl mb-14">
          <p className="text-white/55 text-lg font-light leading-relaxed">
            Setiap kontribusi langsung disalurkan ke aksi sosial — kembali ke kelompok yang paling membutuhkan.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.9} className="flex flex-wrap justify-center gap-4">
          <a
            href="#dampak"
            className="px-8 py-4 border border-white/20 text-white text-sm font-bold tracking-[0.2em] uppercase hover:bg-white/8 transition-all duration-300 flex items-center gap-3 group"
          >
            Lihat Dampak
            <span className="group-hover:translate-y-1 transition-transform inline-block">↓</span>
          </a>
          <a
            href="#tier"
            className="px-8 py-4 bg-cyan-700 hover:bg-cyan-600 text-white text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-3 group"
          >
            Pilih Paket
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </AnimatedSection>
      </div>

      {/* Stats strip — visible on fold */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-3 divide-x divide-white/10">
          {miniStats.map(({ value, suffix, label }) => (
            <div key={label} className="px-6 py-8 flex flex-col items-center text-center">
              <div className="font-display font-bold text-white flex items-baseline mb-2" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", letterSpacing: "-0.03em" }}>
                <CountUp end={value} duration={2.5} />
                {suffix && <span style={{ fontSize: "clamp(1rem,2vw,1.5rem)" }}>{suffix}</span>}
              </div>
              <p className="text-[11px] text-white/40 font-light leading-tight max-w-[18ch] uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
