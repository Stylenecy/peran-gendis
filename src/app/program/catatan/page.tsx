import PageBg from "@/components/PageBg";
import CatatanHero from "./CatatanHero";
import CatatanEditions from "./CatatanEditions";

export default function CatatanGendis() {
  return (
    <div
      className="relative bg-[#0d0118] text-white select-none"
      style={{ colorScheme: "dark" }}
    >
      <PageBg />
      <div className="relative z-10">
        <CatatanHero />
        <CatatanEditions />
      </div>
    </div>
  );
}
