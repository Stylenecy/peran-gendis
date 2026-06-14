"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const PASS = process.env.NEXT_PUBLIC_KABAR_PASSCODE || "gendis2026";

export default function KabarGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (value === PASS) {
      try {
        localStorage.setItem("kabar_unlocked", "1");
      } catch {
        // localStorage may be unavailable (private mode) — unlock anyway
      }
      onUnlock();
      return;
    }

    setError(true);
    setShake(true);
    setTimeout(() => setShake(false), 450);
  }

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      style={{ background: "#0d0118" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 45%, rgba(59,18,99,0.5) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm text-center"
      >
        {/* Small amber label */}
        <span className="block text-pg-gold text-[11px] font-medium uppercase tracking-[0.3em]">
          Ruang Internal
        </span>

        {/* Display title */}
        <h1
          className="mt-4 font-display font-black leading-none text-pg-cream"
          style={{ fontSize: "clamp(2rem, 6vw, 2.8rem)", letterSpacing: "-0.03em" }}
        >
          Kabar Gendis
        </h1>

        <p className="mt-4 font-body font-light text-pg-cream/60 leading-relaxed text-sm">
          Masukkan passcode untuk membuka ruang ini.
        </p>

        {/* Passcode form */}
        <motion.form
          onSubmit={handleSubmit}
          animate={shake ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-8"
        >
          <input
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Passcode"
            autoComplete="off"
            aria-label="Passcode"
            className="w-full bg-transparent border border-pg-cream/15 px-4 py-3 text-sm text-pg-cream placeholder-pg-cream/30 outline-none transition-all duration-200 focus:border-pg-gold"
          />

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-3 text-left text-xs text-pg-gold-light"
            >
              Passcode salah
            </motion.p>
          )}

          <button
            type="submit"
            className="mt-5 w-full bg-pg-gold hover:bg-pg-gold-light text-pg-darkest font-bold tracking-wider uppercase px-4 py-3 text-sm transition-colors duration-200"
          >
            Masuk
          </button>
        </motion.form>

        {/* Footnote */}
        <p className="mt-8 text-[11px] tracking-wide text-pg-cream/35">
          Ruang internal. Minta passcode ke Marel / Dex.
        </p>
      </motion.div>
    </section>
  );
}
