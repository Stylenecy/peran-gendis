import PageBg from "@/components/PageBg";
import ProgramClock from "./ProgramClock";

export default function ProgramPage() {
  return (
    <div className="relative bg-[#0d0118] text-white" style={{ colorScheme: "dark" }}>
      <PageBg />

      <section className="relative z-10 pt-36 pb-6 px-4">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs font-bold tracking-[0.35em] uppercase block mb-8 inline-flex items-center gap-2"
            style={{ color: "#d97706" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Pilar Aksi
          </span>
          <h1
            className="font-display italic text-pg-cream leading-[0.9]"
            style={{ fontSize: "clamp(3rem,9vw,7rem)", letterSpacing: "-0.04em" }}
          >
            Program Kami.
          </h1>
          <p className="text-pg-cream/45 text-lg font-light leading-relaxed mt-6 max-w-xl">
            Empat pilar yang menjadi nafas perjuangan Peran Gendis — klik untuk
            menjelajahi.
          </p>
        </div>
      </section>

      <ProgramClock />
    </div>
  );
}
