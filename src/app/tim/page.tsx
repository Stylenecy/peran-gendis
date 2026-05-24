import TimTree from "./TimTree";

export const metadata = {
  title: "Tim Peran Gendis | Struktur Organisasi",
  description: "Mengenal seluruh anggota dan struktur organisasi komunitas Peran Gendis.",
};

export default function TimPage() {
  return (
    <main className="bg-[#0d0118] min-h-screen selection:bg-pg-gold selection:text-white">
      <TimTree />
    </main>
  );
}
