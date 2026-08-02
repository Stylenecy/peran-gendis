import PageHero from "@/components/PageHero";
import ProgramList from "./ProgramList";

export const metadata = {
  title: "Program",
  description:
    "Empat program kerja Peran Gendis: Catatan Gendis, GeMar, GeRak, dan KoPer.",
};

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Pilar aksi"
        // Core §8 mencatat EMPAT program kerja. Halaman lama menulis "tiga pilar".
        title={
          <>
            Empat cara kami{" "}
            <span className="pg-underline text-pg-berry">bergerak</span>.
          </>
        }
        lead="Dari tulisan mingguan sampai kelas belajar tiap Minggu sore — ini yang kami kerjakan, beserta angkanya."
      />
      <ProgramList />
    </>
  );
}
