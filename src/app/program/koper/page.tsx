import PageBg from "@/components/PageBg";
import KoperHero from "./KoperHero";
import KoperContent from "./KoperContent";
import GerakCTA from "../gerak/GerakCTA";

export default function KoPer() {
  return (
    <div
      className="relative bg-[#0d0118] text-white select-none"
      style={{ colorScheme: "dark" }}
    >
      <PageBg />
      <div className="relative z-10">
        <KoperHero />
        <KoperContent />
        <GerakCTA />
      </div>
    </div>
  );
}
