"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SplitText from "@/components/SplitText";
import { supabase } from "@/lib/supabase";

type FormState = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full bg-transparent border px-4 py-3 text-sm text-pg-ink placeholder-pg-ink-mute outline-none transition-all duration-200 focus:border-pg-leaf";
const borderIdle = "border-pg-paper-3";

export default function SponsorCTA() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    type: "Sponsor",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const { error } = await supabase.from("inquiries").insert([{
      name: form.name.trim(),
      organization: form.organization.trim() || null,
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      type: form.type,
      message: form.message.trim(),
    }]);
    setStatus(error ? "error" : "success");
  }

  return (
    <section
      className="relative py-32 px-4 overflow-hidden"
      style={{ background: "var(--color-pg-paper)" }}
    >
      {/* Cross light lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-[500px] blur-[8px]" style={{ background: "var(--color-pg-leaf)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[500px] blur-[8px]" style={{ background: "var(--color-pg-berry)" }} />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <AnimatedSection direction="up" delay={0.1} className="mb-6 text-center">
          <span className="text-xs tracking-[0.35em] uppercase text-pg-leaf font-bold border-l-2 border-pg-leaf pl-4 inline-block">
            Hubungi Kami
          </span>
        </AnimatedSection>

        <div
          className="font-display font-bold text-pg-ink leading-[0.9] mb-10 text-center"
          style={{ letterSpacing: "-0.04em", fontSize: "clamp(2.8rem,8vw,6rem)" }}
        >
          <SplitText
            text="Tertarik Bermitra?"
            className="justify-center italic"
            delay={0.2}
          />
        </div>

        {status === "success" ? (
          <AnimatedSection direction="up" delay={0.1}>
            <div
              className="py-14 text-center"
              style={{ border: "1px solid var(--color-pg-leaf-soft)", background: "var(--color-pg-leaf-soft)" }}
            >
              <p className="text-pg-leaf font-display font-semibold text-2xl mb-3">Pesan diterima!</p>
              <p className="text-pg-ink-mute text-sm">Tim Peran Gendis akan menghubungimu dalam 1–3 hari kerja.</p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection direction="up" delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Nama lengkap *"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={`${inputCls} ${borderIdle}`}
                />
                <input
                  type="text"
                  placeholder="Organisasi / Instansi"
                  value={form.organization}
                  onChange={e => setForm(f => ({ ...f, organization: e.target.value }))}
                  className={`${inputCls} ${borderIdle}`}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className={`${inputCls} ${borderIdle}`}
                />
                <input
                  type="tel"
                  placeholder="Nomor WhatsApp"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className={`${inputCls} ${borderIdle}`}
                />
              </div>
              <select
                required
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                className={`${inputCls} ${borderIdle}`}
                style={{ background: "var(--color-pg-paper)" }}
              >
                <option value="Sponsor">Sponsor</option>
                <option value="Donasi">Donasi</option>
                <option value="Kolaborasi">Kolaborasi Program</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              <textarea
                required
                rows={5}
                placeholder="Ceritakan bagaimana kamu ingin berkolaborasi... *"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className={`${inputCls} ${borderIdle} resize-none`}
              />
              {status === "error" && (
                <p className="text-pg-berry-deep text-xs">Terjadi kesalahan. Coba lagi atau hubungi via WhatsApp.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-pg-berry py-5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-pg-berry-deep disabled:opacity-60"
              >
                {status === "loading" ? "Mengirim..." : "Kirim Pesan →"}
              </button>
              <p className="text-center text-xs text-pg-ink-mute">
                atau{" "}
                <a href="https://wa.me/6285865193598" target="_blank" rel="noopener noreferrer" className="underline text-pg-ink-mute hover:text-pg-leaf transition-colors">
                  chat Marelta via WhatsApp
                </a>
              </p>
            </form>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
