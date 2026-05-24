import PageBg from "@/components/PageBg";
import HeroSection from "@/components/HeroSection";
import HomeProgramBar from "./HomeProgramBar";
import HomeProgramShowcase from "./HomeProgramShowcase";
import HomeFeature from "./HomeFeature";
import HomeCollabs from "./HomeCollabs";
import HomeTestimonials from "./HomeTestimonials";
import HomeCTA from "./HomeCTA";

export default function Home() {
  return (
    <div
      className="relative bg-[#0d0118] text-white select-none"
      style={{ colorScheme: "dark" }}
    >
      <PageBg />
      <HeroSection />
      <HomeProgramBar />
      <HomeProgramShowcase />
      <HomeFeature />
      <HomeCollabs />
      <HomeTestimonials />
      <HomeCTA />
    </div>
  );
}
