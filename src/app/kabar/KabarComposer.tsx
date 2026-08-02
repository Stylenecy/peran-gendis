"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

type FormState = "idle" | "loading" | "success" | "error";

const CATEGORIES = [
  "GeMar",
  "GeRak",
  "Catatan Gendis",
  "KoPer",
  "Mitra",
  "Internal",
  "Keuangan",
  "Lainnya",
] as const;

const inputCls =
  "w-full bg-transparent border border-pg-paper-3 px-4 py-3 text-sm text-pg-ink placeholder-pg-ink-mute outline-none transition-all duration-200 focus:border-pg-berry";

const labelCls = "block text-xs tracking-[0.3em] uppercase text-pg-berry mb-2.5";

const emptyForm = {
  author: "",
  category: "",
  body: "",
  event_date: "",
  location: "",
  link: "",
};

export default function KabarComposer({ onPosted }: { onPosted: () => void }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<FormState>("idle");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function resetComposer() {
    setForm(emptyForm);
    setStatus("idle");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("updates").insert([{
      author: form.author.trim(),
      category: form.category,
      body: form.body.trim(),
      event_date: form.event_date || null,
      location: form.location.trim() || null,
      link: form.link.trim() || null,
    }]);

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    onPosted();
  }

  const loading = status === "loading";

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "var(--color-pg-paper)" }}
    >
      {/* Ambient amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 100% 0%, rgba(217,119,6,0.14) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-pg-berry mb-5">
            Kabar Internal
          </p>
          <h2
            className="font-display text-pg-ink leading-[1.05]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Tulis Kabar
          </h2>
          <p
            className="mt-4 text-base md:text-lg leading-relaxed text-pg-ink-soft font-body"
            style={{ fontWeight: 300 }}
          >
            Satu menit. Biar nggak hilang di chat.
          </p>
        </motion.div>

        {/* Card panel */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="mt-12 p-6 md:p-9"
          style={{
            background: "var(--color-pg-paper-2)",
            border: "1px solid var(--color-pg-paper-3)",
          }}
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="py-10 text-center"
            >
              <div
                className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  background: "var(--color-pg-berry-soft)",
                  border: "1px solid var(--color-pg-paper-3)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3.5 9.5L7 13L14.5 5"
                    stroke="var(--color-pg-gula)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="font-display text-xl text-pg-berry mb-2">
                Kabar terkirim.
              </p>
              <p className="text-sm text-pg-ink-mute font-body" style={{ fontWeight: 300 }}>
                Sudah masuk ke feed tim. Terima kasih sudah nyatet.
              </p>
              <button
                type="button"
                onClick={resetComposer}
                className="mt-8 px-6 py-3 border border-pg-berry/25 text-pg-berry text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:border-pg-berry hover:bg-pg-berry-soft"
              >
                Tulis kabar lain
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Author */}
              <div>
                <label htmlFor="kabar-author" className={labelCls}>
                  Nama kamu
                </label>
                <input
                  id="kabar-author"
                  required
                  type="text"
                  placeholder="Nama kamu"
                  value={form.author}
                  onChange={(e) => update("author", e.target.value)}
                  className={inputCls}
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="kabar-category" className={labelCls}>
                  Kategori
                </label>
                <select
                  id="kabar-category"
                  required
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                  className={inputCls}
                  style={{ background: "var(--color-pg-paper)" }}
                >
                  <option value="" disabled>
                    Pilih kategori
                  </option>
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Body */}
              <div>
                <label htmlFor="kabar-body" className={labelCls}>
                  Kabar
                </label>
                <textarea
                  id="kabar-body"
                  required
                  rows={5}
                  placeholder="Apa kabarnya? Tulis selengkap yang kamu mau."
                  value={form.body}
                  onChange={(e) => update("body", e.target.value)}
                  className={`${inputCls} resize-none leading-relaxed`}
                />
              </div>

              {/* Event date + Location — 2 cols on md */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="kabar-date" className={labelCls}>
                    Tanggal
                  </label>
                  <input
                    id="kabar-date"
                    type="date"
                    placeholder="Tanggal kejadian (opsional)"
                    value={form.event_date}
                    onChange={(e) => update("event_date", e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="kabar-location" className={labelCls}>
                    Lokasi
                  </label>
                  <input
                    id="kabar-location"
                    type="text"
                    placeholder="Lokasi (opsional)"
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Link */}
              <div>
                <label htmlFor="kabar-link" className={labelCls}>
                  Link
                </label>
                <input
                  id="kabar-link"
                  type="url"
                  placeholder="Link (opsional)"
                  value={form.link}
                  onChange={(e) => update("link", e.target.value)}
                  className={inputCls}
                />
              </div>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-sm text-pg-berry-deep font-body"
                  style={{ fontWeight: 300 }}
                >
                  Gagal mengirim. Cek koneksi lalu coba lagi — tulisanmu masih aman.
                </motion.p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-pg-berry hover:bg-pg-berry disabled:opacity-60 transition-all duration-300 text-pg-darkest text-sm font-bold tracking-wider uppercase"
              >
                {loading ? "Mengirim..." : "Kirim Kabar"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
