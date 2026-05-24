"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    id: "gemar",
    name: "GeMar",
    full: "Gendis Mengajar",
    type: "Aksi Pendidikan",
    accent: "#d97706",
    desc: "Ruang belajar gratis untuk anak-anak Yogyakarta di luar jam sekolah formal.",
    cta: "Jelajahi Aksi",
    href: "/program/gemar",
    stat: "12.956",
    statLabel: "anak butuh akses pendidikan",
  },
  {
    id: "gerak",
    name: "GeRak",
    full: "Gendis Bergerak",
    type: "Aksi Advokasi",
    accent: "#d97706",
    desc: "Aksi advokasi sosial turun langsung ke lapangan untuk isu-isu kelompok rentan.",
    cta: "Jelajahi Aksi",
    href: "/program/gerak",
    stat: "11.441",
    statLabel: "kasus kekerasan dalam 5 tahun",
  },
  {
    id: "catatan",
    name: "Catatan Gendis",
    full: "Jurnal Aksi Komunitas",
    type: "Jurnal",
    accent: "#b45309",
    desc: "Dokumentasi perjalanan, cerita lapangan, dan narasi aksi Peran Gendis.",
    cta: "Baca Jurnal",
    href: "/program/catatan",
    stat: null,
    statLabel: null,
  },
  {
    id: "koper",
    name: "KoPer",
    full: "Komunitas Peran",
    type: "Aksi Komunitas",
    accent: "#d97706",
    desc: "Ruang aman diskusi bagi perempuan dan kelompok marginal untuk saling menguatkan.",
    cta: "Jelajahi Aksi",
    href: "/program/koper",
    stat: null,
    statLabel: null,
  },
];

// SVG tick marks — 12 positions around the clock face (360x360 viewBox)
const TICKS = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 - 90) * (Math.PI / 180);
  const isCardinal = i % 3 === 0;
  const r1 = 175, r2 = isCardinal ? 164 : 169;
  return {
    x1: 180 + r1 * Math.cos(angle),
    y1: 180 + r1 * Math.sin(angle),
    x2: 180 + r2 * Math.cos(angle),
    y2: 180 + r2 * Math.sin(angle),
    isCardinal,
  };
});

// Radial line endpoints — top, right, bottom, left
const LINE_ENDPOINTS = [
  [180, 14],  // 12 (GeMar)
  [346, 180], // 3  (GeRak)
  [180, 346], // 6  (Catatan)
  [14, 180],  // 9  (KoPer)
];

export default function ProgramClock() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setActive(prev => (prev + 1) % programs.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(advance, 3000);
    return () => clearInterval(timer);
  }, [paused, advance]);

  const handleSelect = (i: number) => {
    setActive(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 9000);
  };

  const prog = programs[active];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-4 relative overflow-hidden">
      {/* Ambient background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ background: "radial-gradient(ellipse 50% 50% at 50% 50%, transparent 0%, transparent 70%)" }}
        animate={{ background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${prog.accent}18 0%, transparent 70%)` }}
        transition={{ duration: 1.2 }}
      />

      <div className="w-full max-w-5xl mx-auto relative z-10" suppressHydrationWarning>

        {/* Desktop clock layout */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "1fr 360px 1fr",
            gridTemplateRows: "auto 360px auto",
          }}
        >
          {/* GeMar — 12 o'clock */}
          <ClockLabel prog={programs[0]} index={0} active={active} onSelect={handleSelect}
            className="col-start-2 row-start-1 flex flex-col items-center justify-end pb-10" />

          {/* KoPer — 9 o'clock */}
          <ClockLabel prog={programs[3]} index={3} active={active} onSelect={handleSelect}
            className="col-start-1 row-start-2 flex flex-col justify-center items-end pr-8" />

          {/* Clock face */}
          <div className="col-start-2 row-start-2 relative">
            {/* Ambient glow inside face */}
            <motion.div
              className="absolute inset-[20%] rounded-full pointer-events-none blur-[40px]"
              initial={{ background: "transparent" }}
              animate={{ background: `${prog.accent}22` }}
              transition={{ duration: 0.8 }}
            />

            {/* Outer dashed ring — slow rotation */}
            <motion.div
              className="absolute inset-[-1px] rounded-full"
              style={{ border: "1px dashed rgba(255,255,255,0.06)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 90, ease: "linear", repeat: Infinity }}
            />

            {/* Outer solid ring */}
            <div className="absolute inset-0 rounded-full border border-white/10" />

            {/* Accent ring */}
            <motion.div
              className="absolute inset-[3px] rounded-full border"
              initial={{ borderColor: "rgba(255,255,255,0.05)" }}
              animate={{ borderColor: `${prog.accent}45` }}
              transition={{ duration: 0.6 }}
            />

            {/* SVG layer: tick marks + radial lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 360 360"
              fill="none"
            >
              {/* Radial lines from center to each program position */}
              {programs.map((p, i) => (
                <motion.line
                  key={p.id}
                  x1="180" y1="180"
                  x2={LINE_ENDPOINTS[i][0]}
                  y2={LINE_ENDPOINTS[i][1]}
                  strokeWidth="0.6"
                  animate={{
                    stroke: active === i ? p.accent : "rgba(255,255,255,0.08)",
                    strokeOpacity: active === i ? 0.7 : 0.2,
                  }}
                  transition={{ duration: 0.5 }}
                />
              ))}

              {/* Tick marks */}
              {TICKS.map((tick, i) => (
                <line
                  key={i}
                  x1={tick.x1} y1={tick.y1}
                  x2={tick.x2} y2={tick.y2}
                  stroke={tick.isCardinal ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.08)"}
                  strokeWidth={tick.isCardinal ? 1.2 : 0.5}
                />
              ))}

              {/* Center dot */}
              <motion.circle
                cx="180" cy="180" r="3"
                animate={{ fill: prog.accent }}
                transition={{ duration: 0.5 }}
              />
            </svg>

            {/* Center content */}
            <div className="absolute inset-[14%] flex flex-col items-center justify-center text-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.38, ease: "easeOut" }}
                  className="flex flex-col items-center w-full"
                >
                  <span
                    className="text-[9px] font-bold tracking-[0.35em] uppercase block mb-3"
                    style={{ color: prog.accent }}
                  >
                    {prog.type}
                  </span>
                  <h3
                    className="font-display italic text-pg-cream leading-[0.9] mb-3"
                    style={{ fontSize: "clamp(1.2rem,2vw,1.9rem)", letterSpacing: "-0.02em" }}
                  >
                    {prog.name}
                  </h3>
                  {prog.stat && (
                    <div className="mb-3">
                      <span
                        className="font-display font-bold block"
                        style={{ fontSize: "clamp(1.6rem,2.5vw,2.3rem)", letterSpacing: "-0.03em", color: prog.accent }}
                      >
                        {prog.stat}
                      </span>
                      <span className="text-[9px] text-pg-cream/35 uppercase tracking-widest block leading-tight max-w-[16ch]">
                        {prog.statLabel}
                      </span>
                    </div>
                  )}
                  <p className="text-[10px] text-pg-cream/45 leading-relaxed mb-5 max-w-[18ch]">
                    {prog.desc}
                  </p>
                  <Link
                    href={prog.href}
                    className="text-[9px] font-bold tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-300 hover:translate-x-0.5 inline-block"
                    style={{ borderColor: `${prog.accent}70`, color: prog.accent }}
                  >
                    {prog.cta}
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* GeRak — 3 o'clock */}
          <ClockLabel prog={programs[1]} index={1} active={active} onSelect={handleSelect}
            className="col-start-3 row-start-2 flex flex-col justify-center items-start pl-8" />

          {/* Catatan Gendis — 6 o'clock */}
          <ClockLabel prog={programs[2]} index={2} active={active} onSelect={handleSelect}
            className="col-start-2 row-start-3 flex flex-col items-center justify-start pt-10" />
        </div>

        {/* Mobile: vertical stack */}
        <div className="md:hidden space-y-3">
          {programs.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => handleSelect(i)}
              className="w-full text-left p-6 border transition-all duration-500"
              style={{
                borderColor: active === i ? `${p.accent}55` : "rgba(255,255,255,0.08)",
                background: active === i ? `${p.accent}0a` : "transparent",
              }}
              animate={{ opacity: active === i ? 1 : 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <span
                className="text-[10px] font-bold tracking-[0.3em] uppercase block mb-1.5"
                style={{ color: p.accent }}
              >
                {p.type}
              </span>
              <span
                className="font-display italic text-pg-cream block"
                style={{ fontSize: "1.4rem", letterSpacing: "-0.01em" }}
              >
                {p.name}
              </span>
              {active === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-pg-cream/50 leading-relaxed mt-3 mb-4">{p.desc}</p>
                  <Link
                    href={p.href}
                    className="text-xs font-bold tracking-[0.2em] uppercase hover:translate-x-1 inline-block transition-transform duration-200"
                    style={{ color: p.accent }}
                  >
                    {p.cta} →
                  </Link>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Progress pills */}
        <div className="flex justify-center gap-2 mt-12">
          {programs.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleSelect(i)}
              aria-label={p.name}
              className="h-1.5 transition-all duration-300"
              style={{
                width: active === i ? 24 : 6,
                backgroundColor: active === i ? prog.accent : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ClockLabelProps {
  prog: (typeof programs)[0];
  index: number;
  active: number;
  onSelect: (i: number) => void;
  className: string;
}

function ClockLabel({ prog, index, active, onSelect, className }: ClockLabelProps) {
  const isActive = active === index;
  return (
    <motion.button
      onClick={() => onSelect(index)}
      className={className}
      animate={{ opacity: isActive ? 1 : 0.25, scale: isActive ? 1 : 0.86 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div
        className="px-5 py-3 border transition-all duration-500 relative overflow-hidden"
        style={{ borderColor: isActive ? `${prog.accent}55` : "rgba(255,255,255,0.07)" }}
      >
        {/* Active sweep */}
        {isActive && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ background: `${prog.accent}08` }}
          />
        )}
        <span
          className="text-[9px] font-bold tracking-[0.35em] uppercase block mb-1 relative z-10"
          style={{ color: isActive ? prog.accent : "rgba(254,243,199,0.3)" }}
        >
          {prog.type}
        </span>
        <span
          className="font-display italic block relative z-10"
          style={{
            fontSize: "1.05rem",
            letterSpacing: "-0.01em",
            color: isActive ? "#fef3c7" : "rgba(254,243,199,0.45)",
          }}
        >
          {prog.name}
        </span>
        <span className="text-[9px] block mt-0.5 relative z-10" style={{ color: "rgba(254,243,199,0.2)" }}>
          {prog.full}
        </span>
      </div>
    </motion.button>
  );
}
