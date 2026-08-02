"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

const requirements = [
  { label: "Follow Instagram",       detail: "@peran.gendis",                                    required: true },
  { label: "Bisa datang rutin",      detail: "Minimal satu sore per minggu, Minggu atau Senin",   required: true },
  { label: "Kemampuan mengajar",     detail: "Matematika, IPAS, atau Bahasa Inggris level TK–SD", required: true },
  { label: "Kontribusi operasional", detail: "Rp15.000/bulan (opsional, bisa dinegosiasikan)",    required: false },
];

type FormState = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full bg-transparent border px-4 py-3 text-sm text-pg-ink placeholder-pg-ink-mute outline-none transition-all duration-200 focus:border-pg-berry";
const borderIdleCls = "border-pg-paper-3";
const borderFocusCls = "focus:border-pg-berry";

export default function GemarVolunteer() {
  const [form, setForm] = useState({ name: "", phone: "", availability: "Minggu", location: "Balai Budaya Karangkitri (Kedai Tanya)", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("volunteers").insert([{
      name: form.name.trim(),
      phone: form.phone.trim(),
      availability: form.availability,
      location: form.location,
      message: form.message.trim() || null,
    }]);
    setStatus(error ? "error" : "success");
  }

  return (
    <section
      id="relawan"
      className="relative overflow-hidden border-t border-pg-paper-3"
      style={{ background: "var(--color-pg-paper-2)" }}
    >
      {/* Anchor lama tetap dipertahankan supaya tautan yang sudah
          tersebar (mis. di bio Instagram) tidak mati. */}
      <span id="volunteer" className="sr-only" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 0% 100%, #fbe9f2 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-36">
        {/* Urgent badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-pg-berry/25 bg-pg-berry-soft px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-pg-berry" />
          <span className="text-xs font-semibold uppercase tracking-widest text-pg-berry">
            Pendaftaran pengajar dibuka
          </span>
        </motion.div>

        {/* Asymmetric 12-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-0">
          {/* Left — pitch */}
          <div className="md:col-span-6 md:pr-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display font-black text-pg-ink leading-[1.1]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", letterSpacing: "-0.03em" }}
            >
              Ini bukan sekadar
              <br />
              volunteering.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="mt-6 text-base md:text-lg leading-relaxed text-pg-ink-soft"
              style={{ fontWeight: 300 }}
            >
              Ini adalah kesempatan untuk membuktikan bahwa perubahan bisa dimulai
              dari satu orang duduk bersama satu anak, setiap minggu.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="mt-4 text-base md:text-lg leading-relaxed text-pg-ink-soft"
              style={{ fontWeight: 300 }}
            >
              Kami mencari relawan yang serius — yang hadir bukan karena CV, tapi
              karena{" "}
              <em className="font-display text-pg-ink">
                mereka percaya anak-anak ini layak mendapatkan yang terbaik.
              </em>
            </motion.p>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
              className="mt-10 relative overflow-hidden"
              style={{ height: "280px" }}
            >
              <Image
                src="/photos/gemar-mentoring.webp"
                alt="Relawan mendampingi anak belajar"
                fill
                className="object-cover"
                style={{ filter: "brightness(0.8) saturate(0.85)" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom right, transparent 40%, rgba(42,17,41,0.55) 100%)",
                }}
              />
              <div className="absolute bottom-4 right-4 text-right">
                <p className="font-display italic text-xs text-pg-ink-soft">
                  Satu anak. Satu relawan. Satu perubahan.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — requirements + apply */}
          <div
            className="md:col-span-6 md:pl-8 md:border-l"
            style={{ borderColor: "var(--color-pg-paper-3)" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <h3 className="text-pg-berry text-xs tracking-[0.3em] uppercase mb-8">
                Persyaratan Relawan
              </h3>

              <div>
                {requirements.map((req, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i + 0.3, ease: "easeOut" }}
                    className="flex items-start gap-4 py-5 border-b"
                    style={{ borderColor: "var(--color-pg-berry-soft)" }}
                  >
                    {/* Checkbox indicator */}
                    <div
                      className="mt-1 w-4 h-4 shrink-0 flex items-center justify-center"
                      style={{
                        background: req.required ? "var(--color-pg-berry)" : "transparent",
                        border: req.required ? "none" : "1px solid var(--color-pg-paper-3)",
                      }}
                    >
                      {req.required && (
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1 4L3 6L7 2"
                            stroke="#ffffff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-pg-ink">
                        {req.label}
                        {!req.required && (
                          <span className="ml-2 text-xs font-normal text-pg-ink-mute">
                            opsional
                          </span>
                        )}
                      </p>
                      <p className="mt-0.5 text-sm text-pg-ink-mute" style={{ fontWeight: 300 }}>
                        {req.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Period block */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                className="mt-8 rounded-r-xl border-l-[3px] border-pg-berry bg-white px-5 py-5"
              >
                <p className="mb-1 text-sm font-semibold text-pg-ink">
                  Komitmen yang kami minta
                </p>
                <p className="text-[15px] leading-relaxed text-pg-ink-soft">
                  Datang rutin minimal satu sore per minggu selama tiga bulan.
                  Kalau jadwalmu berubah di tengah jalan, kabari saja — yang
                  penting anak-anak tidak menunggu tanpa kepastian.
                </p>
              </motion.div>

              {/* Apply block — inline form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
                className="mt-8"
              >
                <p className="text-pg-ink-mute text-xs tracking-[0.25em] uppercase mb-6">
                  Daftar Volunteer
                </p>

                {status === "success" ? (
                  <div
                    role="status"
                    className="rounded-2xl border border-pg-leaf/30 bg-pg-leaf-soft px-5 py-8 text-center"
                  >
                    <p className="mb-2 font-display text-lg font-semibold text-pg-leaf">
                      Pendaftaran diterima!
                    </p>
                    <p className="text-sm text-pg-ink-soft">
                      Tim kami akan menghubungimu secepatnya lewat WhatsApp.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Setiap isian punya <label> sungguhan. Versi sebelumnya
                        hanya mengandalkan placeholder — begitu pengguna mulai
                        mengetik, keterangan isian hilang, dan pembaca layar
                        tidak pernah mendapat namanya sama sekali. */}
                    <div>
                      <label
                        htmlFor="v-nama"
                        className="mb-1.5 block text-[13px] font-semibold text-pg-ink"
                      >
                        Nama lengkap <span className="text-pg-berry">*</span>
                      </label>
                      <input
                        id="v-nama"
                        required
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className={`${inputCls} ${borderIdleCls} ${borderFocusCls}`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="v-wa"
                        className="mb-1.5 block text-[13px] font-semibold text-pg-ink"
                      >
                        Nomor WhatsApp <span className="text-pg-berry">*</span>
                      </label>
                      <input
                        id="v-wa"
                        required
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="08xx-xxxx-xxxx"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        className={`${inputCls} ${borderIdleCls} ${borderFocusCls}`}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="v-hari"
                        className="mb-1.5 block text-[13px] font-semibold text-pg-ink"
                      >
                        Kamu bisa hari apa? <span className="text-pg-berry">*</span>
                      </label>
                      <select
                        id="v-hari"
                        required
                        value={form.availability}
                        onChange={e => setForm(f => ({ ...f, availability: e.target.value }))}
                        className={`${inputCls} ${borderIdleCls} ${borderFocusCls}`}
                        style={{ background: "var(--color-pg-paper)" }}
                      >
                      <option value="Minggu">Setiap Minggu (Kedai Tanya / Kelurahan Klitren)</option>
                      <option value="Senin">Setiap Senin (Omah Kopi Tunggak / RTHP Klitren / Sokonandi)</option>
                      <option value="Keduanya">Keduanya</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="v-lokasi"
                        className="mb-1.5 block text-[13px] font-semibold text-pg-ink"
                      >
                        Lokasi terdekat denganmu{" "}
                        <span className="text-pg-berry">*</span>
                      </label>
                      <select
                        id="v-lokasi"
                        required
                        value={form.location}
                        onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                        className={`${inputCls} ${borderIdleCls} ${borderFocusCls}`}
                        style={{ background: "var(--color-pg-paper)" }}
                      >
                      <option value="Balai Budaya Karangkitri (Kedai Tanya)">Balai Budaya Karangkitri (Kedai Tanya) — Panggungharjo, Bantul</option>
                      <option value="Omah Kopi Tunggak">Omah Kopi Tunggak — Sleman (Berbah)</option>
                      <option value="RTHP Klitren">RTHP Klitren — Kota Yogyakarta</option>
                      <option value="Kantor Kelurahan Klitren">Kantor Kelurahan Klitren — Kota Yogyakarta</option>
                      <option value="SD Muhammadiyah Sokonandi">SD Muhammadiyah Sokonandi — Gunungketur, Kota Yogyakarta</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="v-pesan"
                        className="mb-1.5 block text-[13px] font-semibold text-pg-ink"
                      >
                        Pesan atau motivasi{" "}
                        <span className="font-normal text-pg-ink-mute">
                          (opsional)
                        </span>
                      </label>
                      <textarea
                        id="v-pesan"
                        rows={3}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className={`${inputCls} ${borderIdleCls} ${borderFocusCls} resize-none`}
                      />
                    </div>

                    {/* role="alert" supaya galat dibacakan, bukan cuma terlihat */}
                    {status === "error" && (
                      <p role="alert" className="text-sm font-medium text-pg-berry-deep">
                        Terjadi kesalahan saat mengirim. Coba lagi, atau hubungi
                        kami langsung lewat WhatsApp di bawah.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full rounded-full bg-pg-berry px-5 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-pg-berry-deep disabled:opacity-60"
                    >
                      {status === "loading" ? "Mengirim…" : "Daftar sekarang →"}
                    </button>

                    <p className="text-center text-[13px] text-pg-ink-soft">
                      atau{" "}
                      <a
                        href="https://wa.me/6285865193598"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-pg-berry underline underline-offset-4 hover:text-pg-berry-deep"
                      >
                        chat langsung via WhatsApp
                        <span className="sr-only"> (buka di tab baru)</span>
                      </a>
                    </p>
                  </form>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
