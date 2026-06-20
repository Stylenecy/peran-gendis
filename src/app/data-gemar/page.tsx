import type { Metadata } from "next";
import DataRoom from "./DataRoom";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Data GeMar — Ruang Internal Tim",
  description: "Pencatatan murid & kehadiran GeMar Peran Gendis.",
  robots: { index: false, follow: false },
};

export default function DataGemarPage() {
  return <DataRoom />;
}
