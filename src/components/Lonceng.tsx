/**
 * Motif tanda tangan situs ini.
 *
 * Filosofi logo (Core §3) menyebut dua elemen: garis lengkung membentuk
 * LONCENG, dan BUNGA BAKUNG LEMBAH. Keduanya sebenarnya berbentuk sama —
 * bunga bakung lembah menggantung persis seperti lonceng kecil.
 *
 * Jadi satu bentuk memuat dua makna sekaligus: manis dilihat, tapi memang
 * dibuat untuk dibunyikan. Itu dipakai sebagai penanda bagian, butir daftar,
 * dan aksen di seluruh situs.
 */
export function Lonceng({
  className = "",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {/* tangkai */}
      <path
        d="M12 2c0 4.2-1.1 6.6-3.4 8.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* kelopak lonceng */}
      <path
        d="M8.6 10.2c3.1 0 5.6 2.4 5.6 5.4 0 1.6-1.3 2.9-2.8 2.9h-5.6C4.3 18.5 3 17.2 3 15.6c0-3 2.5-5.4 5.6-5.4Z"
        fill="currentColor"
        opacity="0.16"
      />
      <path
        d="M8.6 10.2c3.1 0 5.6 2.4 5.6 5.4 0 1.6-1.3 2.9-2.8 2.9h-5.6C4.3 18.5 3 17.2 3 15.6c0-3 2.5-5.4 5.6-5.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* pemukul — bagian yang membuatnya berbunyi */}
      <circle cx="8.6" cy="20.4" r="1.5" fill="currentColor" />
      {/* kuncup kedua, lebih kecil */}
      <path
        d="M17.4 13.4c1.9 0 3.4 1.5 3.4 3.3 0 1-.8 1.8-1.7 1.8h-3.4c-1 0-1.7-.8-1.7-1.8 0-1.8 1.5-3.3 3.4-3.3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}

/** Pembatas bagian: garis tipis dengan satu lonceng di tengah. */
export function LoncengDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-4 text-pg-berry ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-current opacity-40" />
      <Lonceng className="h-5 w-5 shrink-0" />
      <span className="h-px flex-1 bg-current opacity-40" />
    </div>
  );
}
