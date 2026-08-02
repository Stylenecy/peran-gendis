"use client";

import PageHero from "@/components/PageHero";
import CountUp from "@/components/CountUp";

/* Angka dari Core §8D & materi proposal sponsorship. */
const miniStats = [
  { value: 12956, suffix: "", label: "anak DIY tidak bersekolah" },
  { value: 11441, suffix: "", label: "kasus kekerasan 5 tahun terakhir" },
  { value: 29, suffix: ",74%", label: "gap partisipasi kerja perempuan" },
];

export default function SponsorHero() {
  return (
    <>
      <PageHero
        eyebrow="Kemitraan & sponsorship"
        title={
          <>
            Investasi untuk{" "}
            <span className="pg-underline text-pg-berry">ruang aman</span>.
          </>
        }
        lead="Setiap kontribusi langsung disalurkan ke aksi sosial — kembali ke kelompok yang paling membutuhkan."
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#tier"
            className="inline-flex min-h-12 items-center rounded-full bg-pg-berry px-7 text-[15px] font-semibold text-white transition-colors hover:bg-pg-berry-deep"
          >
            Pilih paket
          </a>
          <a
            href="#dampak"
            className="inline-flex min-h-12 items-center rounded-full border border-pg-paper-3 px-7 text-[15px] font-semibold text-pg-ink transition-colors hover:bg-pg-paper-2"
          >
            Lihat dampak
          </a>
        </div>
      </PageHero>

      <div className="border-b border-pg-paper-3 bg-pg-paper">
        <dl className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-pg-paper-3 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {miniStats.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col items-center px-6 py-9 text-center"
            >
              <dd
                className="flex items-baseline font-display font-semibold text-pg-berry"
                style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)" }}
              >
                <CountUp end={value} duration={2.5} />
                {suffix && (
                  <span style={{ fontSize: "clamp(1rem,2vw,1.4rem)" }}>
                    {suffix}
                  </span>
                )}
              </dd>
              <dt className="mt-2 max-w-[20ch] text-[12px] uppercase tracking-[0.14em] leading-snug text-pg-ink-soft">
                {label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
