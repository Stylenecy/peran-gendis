import PageBg from "@/components/PageBg";
import KontakHero from "./KontakHero";
import KontakContacts from "./KontakContacts";

export default function Kontak() {
  return (
    <div
      className="relative bg-[#0d0118] text-white select-none"
      style={{ colorScheme: "dark" }}
    >
      <PageBg />
      <KontakHero />
      <KontakContacts />
    </div>
  );
}
