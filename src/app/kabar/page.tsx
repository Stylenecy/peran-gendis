import type { Metadata } from "next";
import KabarRoom from "./KabarRoom";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kabar Gendis — Ruang Internal Tim",
  description: "Ruang kabar internal tim Peran Gendis.",
  robots: { index: false, follow: false },
};

export default function KabarPage() {
  return <KabarRoom />;
}
