import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* Fraunces menggantikan Playfair Display.
   Playfair terbaca "majalah mode / mewah" — nada yang justru menjauh dari
   komunitas akar rumput. Fraunces punya lengkung yang hangat (manis) tapi
   sanggup jadi tebal dan lantang saat dibesarkan — persis dualitas logo. */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Alias produksi yang aktif di Vercel. Dipakai metadataBase supaya URL
// gambar Open Graph absolut dan benar saat ditautkan di WhatsApp / IG.
const SITE = "https://perangendis-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Peran Gendis — Manisnya Kebersamaan dalam Kesetaraan",
    template: "%s · Peran Gendis",
  },
  description:
    "Komunitas advokasi Perempuan, Anak, Gender, dan Disabilitas di Yogyakarta. Kami mengajar anak-anak tiap minggu — dan kami sedang butuh lebih banyak pengajar.",
  keywords: [
    "Peran Gendis",
    "relawan Jogja",
    "volunteer mengajar",
    "advokasi gender",
    "anak",
    "disabilitas",
    "Yogyakarta",
    "GeMar",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE,
    title: "Peran Gendis — Manisnya Kebersamaan dalam Kesetaraan",
    description:
      "Tiap minggu kami mengajar anak-anak di Jogja. Bangku pengajar sering kosong — ikut isi satu.",
    siteName: "Peran Gendis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peran Gendis",
    description: "Manisnya Kebersamaan dalam Kesetaraan",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-body antialiased bg-pg-paper text-pg-ink">
        <MotionProvider>
          <a href="#konten" className="skip-link">
            Lewati ke konten utama
          </a>
          <Navbar />
          <main id="konten" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
