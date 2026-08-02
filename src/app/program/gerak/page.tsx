import PageBg from "@/components/PageBg";
import GerakHero from "./GerakHero";
import GerakEvents from "./GerakEvents";
import GerakCTA from "./GerakCTA";

export default function GeRak() {
  return (
    <div
      className="relative bg-pg-paper text-pg-ink"
    >
      <PageBg />
      <div className="relative z-10">
        <GerakHero />
        <GerakEvents />
        <GerakCTA />
      </div>
    </div>
  );
}
