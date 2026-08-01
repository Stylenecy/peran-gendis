import type { Metadata } from "next";
import AsetRoom from "./AsetRoom";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Aset — Ruang Internal Tim",
  description: "Registry tautan & aset operasional Peran Gendis.",
  robots: { index: false, follow: false },
};

export default function AsetPage() {
  return <AsetRoom />;
}
