import PageBg from "@/components/PageBg";
import CatatanHero from "./CatatanHero";
import CatatanEditions from "./CatatanEditions";

export default function CatatanGendis() {
  return (
    <div
      className="relative bg-pg-paper text-pg-ink"
    >
      <PageBg />
      <div className="relative z-10">
        <CatatanHero />
        <CatatanEditions />
      </div>
    </div>
  );
}
