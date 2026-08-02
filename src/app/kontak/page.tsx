import PageBg from "@/components/PageBg";
import KontakHero from "./KontakHero";
import KontakContacts from "./KontakContacts";

export default function Kontak() {
  return (
    <div
      className="relative bg-pg-paper text-pg-ink"
    >
      <PageBg />

      {/* Teal overlay — Kontak identity */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 50% 35%, var(--color-pg-leaf-soft) 0%, transparent 70%)",
        }}
      />

      <KontakHero />
      <KontakContacts />
    </div>
  );
}
