import PageHero from "@/components/PageHero";

export default function TentangHero() {
  return (
    <PageHero
      eyebrow="Tentang kami"
      title={
        <>
          Bukan sekadar komunitas{" "}
          <span className="pg-underline text-pg-berry">diskusi</span>.
        </>
      }
      lead="Kami hadir sebagai ruang belajar bersama — dan platform aksi nyata untuk isu-isu yang sering luput dari perhatian."
    >
      <figure className="max-w-md border-l-2 border-pg-berry/30 pl-5">
        <blockquote className="font-display text-lg italic leading-snug text-pg-ink">
          &ldquo;Lakukan untuk Tuhan, bukan sebatas untuk manusia.&rdquo;
        </blockquote>
        <figcaption className="mt-2 text-[13px] text-pg-ink-mute">
          Motto Peran Gendis
        </figcaption>
      </figure>
    </PageHero>
  );
}
