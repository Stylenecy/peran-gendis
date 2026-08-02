import PageBg from "@/components/PageBg";
import HeroSection from "@/components/HeroSection";
import HomeAjakan from "./HomeAjakan";
import HomeLapangan from "./HomeLapangan";
import HomePrograms from "./HomePrograms";
import HomeIsu from "./HomeIsu";
import HomeCTA from "./HomeCTA";

/*
 * Urutan halaman depan mengikuti satu pertanyaan: apa yang paling dibutuhkan
 * komunitas ini dari seorang pengunjung asing?
 *
 * Jawabannya orang — bukan donasi, bukan follower. Karena itu ajakan menjadi
 * pengajar naik ke posisi kedua, tepat setelah perkenalan, bukan disimpan di
 * dasar halaman. Bukti (apa itu GeMar, angkanya, programnya) menyusul untuk
 * meyakinkan yang sudah tertarik.
 *
 * Dihapus dari susunan lama:
 *  · HomeProgramBar     — bilah jam & ticker ala terminal saham; menduplikasi
 *                         navigasi dan tidak berbunyi seperti komunitas warga.
 *  · HomeTestimonials   — tiga testimoni karangan tanpa penutur nyata.
 *  · HomeCollabs        — daftar slogan tanpa tautan atau isi.
 *  · HomeFeature        — diganti HomeIsu, tanpa gaya widget dasbor.
 */
export default function Home() {
  return (
    <div className="relative">
      <PageBg />
      <HeroSection />
      <HomeAjakan />
      <HomeLapangan />
      <HomePrograms />
      <HomeIsu />
      <HomeCTA />
    </div>
  );
}
