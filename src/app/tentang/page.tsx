import TentangHero from "./TentangHero";
import TentangLatarBelakang from "./TentangLatarBelakang";
import TentangFilosofi from "./TentangFilosofi";
import TentangVisi from "./TentangVisi";
import TentangFounders from "./TentangFounders";

export const metadata = {
  title: "Tentang Kami | Peran Gendis",
  description: "Mengenal latar belakang, visi, dan tim pendiri komunitas Peran Gendis.",
};

export default function Tentang() {
  return (
    <div className="bg-[#1a0533]">
      <TentangHero />
      <TentangLatarBelakang />
      <TentangFilosofi />
      <TentangVisi />
      <TentangFounders />
    </div>
  );
}
