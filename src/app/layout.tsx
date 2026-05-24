import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Peran Gendis — Manisnya Kebersamaan dalam Kesetaraan",
  description:
    "Komunitas advokasi isu Perempuan, Anak, Gender, dan Disabilitas berbasis di Yogyakarta. Langkah kecil menuju perubahan lebih baik.",
  keywords: ["Peran Gendis", "advokasi", "gender", "anak", "disabilitas", "Yogyakarta"],
  openGraph: {
    title: "Peran Gendis",
    description: "Manisnya Kebersamaan dalam Kesetaraan",
    siteName: "Peran Gendis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
