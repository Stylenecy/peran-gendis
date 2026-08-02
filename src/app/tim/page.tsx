import TimTree from "./TimTree";

export const metadata = {
  title: "Tim Peran Gendis | Struktur Organisasi",
  description: "Mengenal seluruh anggota dan struktur organisasi komunitas Peran Gendis.",
};

export default function TimPage() {
  return (
    <main className="bg-pg-paper min-h-screen selection:bg-pg-berry selection:text-pg-ink">
      <TimTree />
    </main>
  );
}
