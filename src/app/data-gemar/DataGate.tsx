"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const PASS = process.env.NEXT_PUBLIC_KABAR_PASSCODE || "gendis2026";

// Gate ruang internal Data GeMar. Memakai passcode + flag localStorage yang
// SAMA dengan Kabar Gendis ("kabar_unlocked") — sekali buka, kedua ruang terbuka.
export default function DataGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === PASS) {
      try {
        localStorage.setItem("kabar_unlocked", "1");
      } catch {
        // localStorage tidak tersedia — buka saja
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
      style={{ background: "var(--color-pg-paper)" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 50% 45%, #fbe9f2 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm text-center"
      >
        <span className="block text-pg-berry text-[11px] font-medium uppercase tracking-[0.3em]">
          Ruang Internal
        </span>

        <h1
          className="mt-4 font-display font-black leading-none text-pg-ink"
          style={{ fontSize: "clamp(2rem, 6vw, 2.8rem)", letterSpacing: "-0.03em" }}
        >
          Data GeMar
        </h1>

        <p className="mt-4 font-body font-light text-pg-ink-mute leading-relaxed text-sm">
          Pencatatan murid &amp; kehadiran. Masukkan passcode untuk membuka.
        </p>

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
            className="w-full bg-transparent border border-pg-paper-3 px-4 py-3 text-sm text-pg-ink placeholder-pg-ink-mute outline-none transition-all duration-200 focus:border-pg-berry"
          />

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-3 text-left text-xs text-pg-berry"
            >
              Passcode salah
            </motion.p>
          )}

          <button
            type="submit"
            className="mt-5 w-full bg-pg-berry hover:bg-pg-berry text-pg-darkest font-bold tracking-wider uppercase px-4 py-3 text-sm transition-colors duration-200"
          >
            Masuk
          </button>
        </motion.form>

        <p className="mt-8 text-[11px] tracking-wide text-pg-ink-mute">
          Passcode sama dengan Kabar Gendis. Minta ke Marel / Dex.
        </p>
      </motion.div>
    </section>
  );
}
