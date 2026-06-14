"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

type Update = {
  id: string;
  created_at: string;
  author: string;
  category: string;
  body: string;
  event_date: string | null;
  location: string | null;
  link: string | null;
  status: string;
};

// Warna chip per kategori (display-only). Tema utama tetap void + amber.
const CATEGORY_COLORS: Record<string, string> = {
  GeMar: "#d97706",
  GeRak: "#fb7185",
  "Catatan Gendis": "#a855f7",
  KoPer: "#06b6d4",
  Mitra: "#34d399",
  Internal: "#94a3b8",
  Keuangan: "#fbbf24",
  Lainnya: "#cbb89a",
};

const CATEGORIES = Object.keys(CATEGORY_COLORS);

// rgba dengan alpha rendah untuk tint background chip.
function tint(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function colorFor(category: string): string {
  return CATEGORY_COLORS[category] ?? CATEGORY_COLORS.Lainnya;
}

// Waktu relatif Bahasa Indonesia. mis. "baru saja", "2 jam lalu", "3 hari lalu".
function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "";
  const diffMs = Date.now() - then;
  const sec = Math.floor(diffMs / 1000);

  if (sec < 45) return "baru saja";
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} menit lalu`;
  const hour = Math.floor(min / 60);
  if (hour < 24) return `${hour} jam lalu`;
  const day = Math.floor(hour / 24);
  if (day < 7) return `${day} hari lalu`;
  const week = Math.floor(day / 7);
  if (week < 5) return `${week} minggu lalu`;
  const month = Math.floor(day / 30);
  if (month < 12) return `${month} bulan lalu`;
  const year = Math.floor(day / 365);
  return `${year} tahun lalu`;
}

// Tanggal acara format id-ID ringkas, mis. "13 Jun 2026".
function formatEventDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function KabarFeed({ refreshToken }: { refreshToken: number }) {
  const [items, setItems] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [active, setActive] = useState<string>("Semua");

  useEffect(() => {
    let alive = true;

    async function load() {
      setLoading(true);
      setError(false);

      const { data, error } = await supabase
        .from("updates")
        .select("*")
        .order("created_at", { ascending: false });

      if (!alive) return;

      if (error) {
        setError(true);
        setItems([]);
      } else {
        setItems((data as Update[]) ?? []);
      }
      setLoading(false);
    }

    load();
    return () => {
      alive = false;
    };
  }, [refreshToken]);

  // Hitung jumlah per kategori untuk badge pada chip.
  const counts = useMemo(() => {
    const map: Record<string, number> = { Semua: items.length };
    for (const cat of CATEGORIES) map[cat] = 0;
    for (const it of items) {
      if (map[it.category] === undefined) map[it.category] = 0;
      map[it.category] += 1;
    }
    return map;
  }, [items]);

  const filtered = useMemo(
    () =>
      active === "Semua"
        ? items
        : items.filter((it) => it.category === active),
    [items, active]
  );

  return (
    <section
      id="kabar"
      className="relative overflow-hidden"
      style={{ background: "#0d0118" }}
    >
      {/* Ambient amber glow — atas-kanan */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 100% 0%, rgba(217,119,6,0.14) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 py-24 md:py-36">
        {/* Header — off-center */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-12 md:mb-16">
          <div className="md:col-span-9">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="block text-xs tracking-[0.3em] uppercase text-pg-gold mb-6"
            >
              Dari Lapangan
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-bold text-pg-cream leading-[1.15]"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Aliran Kabar
              <br />
              <em className="text-pg-cream/60">dari tim, untuk kamu.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="mt-5 text-sm md:text-base text-pg-cream-warm/60"
              style={{ fontWeight: 300, lineHeight: 1.7 }}
            >
              Catatan kecil, kabar besar, dan setiap langkah di antaranya — apa
              adanya, langsung dari mereka yang menjalani.
            </motion.p>
          </div>
        </div>

        {/* Chips filter kategori */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="-mx-6 px-6 md:mx-0 md:px-0 mb-14 flex gap-2 overflow-x-auto md:flex-wrap pb-2 md:pb-0"
          style={{ scrollbarWidth: "none" }}
        >
          {["Semua", ...CATEGORIES].map((cat) => {
            const isActive = active === cat;
            const accent = cat === "Semua" ? "#d97706" : colorFor(cat);
            const count = counts[cat] ?? 0;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className="group shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap"
                style={
                  isActive
                    ? {
                        background: accent,
                        color: cat === "Semua" ? "#0d0118" : "#0d0118",
                        border: `1px solid ${accent}`,
                      }
                    : {
                        background: "transparent",
                        color: "var(--color-pg-cream)",
                        border: "1px solid rgba(254,243,199,0.15)",
                      }
                }
              >
                <span style={isActive ? undefined : { opacity: 0.85 }}>
                  {cat}
                </span>
                <span
                  className="text-[10px] tabular-nums"
                  style={{
                    opacity: isActive ? 0.7 : 0.4,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* States */}
        {loading ? (
          <div className="py-20 text-center">
            <p
              className="font-display italic text-pg-cream-warm/45"
              style={{ fontSize: "1.05rem" }}
            >
              Mengumpulkan kabar terbaru...
            </p>
          </div>
        ) : error ? (
          <div
            className="py-12 px-6 text-center"
            style={{
              background: "rgba(251,113,133,0.08)",
              border: "1px solid rgba(251,113,133,0.3)",
            }}
          >
            <p className="font-display font-semibold text-base text-pg-cream mb-1">
              Kabar gagal dimuat
            </p>
            <p className="text-sm text-pg-cream/55" style={{ fontWeight: 300 }}>
              Sambungan ke server terputus. Coba muat ulang halaman sebentar lagi.
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="py-16 px-6 text-center"
            style={{
              borderTop: "1px solid rgba(217,119,6,0.2)",
              borderBottom: "1px solid rgba(217,119,6,0.12)",
            }}
          >
            <p className="font-display italic text-lg text-pg-cream-warm/55 mb-2">
              {active === "Semua"
                ? "Belum ada kabar untuk saat ini."
                : `Belum ada kabar di kategori ${active}.`}
            </p>
            <p className="text-sm text-pg-cream/45" style={{ fontWeight: 300 }}>
              {active === "Semua"
                ? "Tim sedang sibuk di lapangan — cerita pertama akan muncul di sini."
                : "Coba lihat kategori lain, atau tengok lagi nanti."}
            </p>
          </div>
        ) : (
          // Timeline — garis vertikal amber di kiri
          <div
            className="relative pl-6 md:pl-8"
            style={{ borderLeft: "1px solid rgba(217,119,6,0.25)" }}
          >
            {filtered.map((it, i) => {
              const accent = colorFor(it.category);
              return (
                <motion.article
                  key={it.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.05,
                    ease: "easeOut",
                  }}
                  className="group relative pb-12 last:pb-0"
                >
                  {/* Node di garis timeline */}
                  <span
                    className="absolute top-1.5 -left-[calc(1.5rem+5px)] md:-left-[calc(2rem+5px)] w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                    style={{
                      background: accent,
                      boxShadow: `0 0 0 4px ${tint(accent, 0.15)}`,
                    }}
                  />

                  {/* Baris atas: chip kategori + author + waktu */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium tracking-wide"
                      style={{
                        color: accent,
                        background: tint(accent, 0.12),
                        border: `1px solid ${tint(accent, 0.35)}`,
                      }}
                    >
                      {it.category}
                    </span>
                    <span className="text-sm font-semibold text-pg-cream-warm">
                      {it.author}
                    </span>
                    <span className="text-pg-cream/30">·</span>
                    <time
                      dateTime={it.created_at}
                      className="text-xs text-pg-cream/45"
                    >
                      {timeAgo(it.created_at)}
                    </time>
                  </div>

                  {/* Body */}
                  <p
                    className="text-pg-cream-warm/85 whitespace-pre-wrap"
                    style={{ fontWeight: 300, lineHeight: 1.7 }}
                  >
                    {it.body}
                  </p>

                  {/* Baris meta opsional */}
                  {(it.event_date || it.location || it.link) && (
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs">
                      {it.event_date && (
                        <span className="inline-flex items-center gap-1.5 text-pg-cream/55">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <rect
                              x="1.5"
                              y="2.5"
                              width="11"
                              height="10"
                              rx="1"
                              stroke="currentColor"
                              strokeWidth="1.2"
                            />
                            <path
                              d="M1.5 5.5h11M4.5 1v2.5M9.5 1v2.5"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            />
                          </svg>
                          {formatEventDate(it.event_date)}
                        </span>
                      )}
                      {it.location && (
                        <span className="inline-flex items-center gap-1.5 text-pg-cream/55">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M7 12.5s4.5-3.8 4.5-7A4.5 4.5 0 0 0 2.5 5.5c0 3.2 4.5 7 4.5 7Z"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinejoin="round"
                            />
                            <circle
                              cx="7"
                              cy="5.5"
                              r="1.4"
                              stroke="currentColor"
                              strokeWidth="1.2"
                            />
                          </svg>
                          {it.location}
                        </span>
                      )}
                      {it.link && (
                        <a
                          href={it.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 underline underline-offset-2 transition-colors text-pg-gold hover:text-pg-gold-light"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 14 14"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M6 8a2.5 2.5 0 0 0 3.5 0l2-2A2.5 2.5 0 1 0 8 2.5l-1 1M8 6a2.5 2.5 0 0 0-3.5 0l-2 2A2.5 2.5 0 1 0 6 11.5l1-1"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Selengkapnya
                        </a>
                      )}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
