import PageBg from "@/components/PageBg";
import KontakHero from "./KontakHero";
import KontakContacts from "./KontakContacts";

export default function Kontak() {
  return (
    <div
      className="relative bg-[#0d0118] text-white"
      style={{ colorScheme: "dark" }}
    >
      <PageBg />

      {/* Teal overlay — Kontak identity */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 50% 35%, rgba(6,182,212,0.09) 0%, transparent 70%)",
        }}
      />

      <KontakHero />
      <KontakContacts />
    </div>
  );
}
