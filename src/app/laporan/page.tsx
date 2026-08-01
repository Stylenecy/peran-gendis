import type { Metadata } from "next";
import LaporanRoom from "./LaporanRoom";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Laporan — Dashboard KPI Tim",
  description: "Dashboard KPI internal Peran Gendis.",
  robots: { index: false, follow: false },
};

export default function LaporanPage() {
  return <LaporanRoom />;
}
