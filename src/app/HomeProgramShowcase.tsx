"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Share2, Bookmark, MapPin } from "lucide-react";

const EXPO_OUT = [0.22, 1, 0.36, 1] as const;

const programs = [
  {
    id: "gemar",
    name: "GeMar",
    fullName: "Gerakan Membaca",
    label: "Aktif",
    labelColor: "#d97706",
    avatarBg: "from-amber-600 to-amber-900",
    avatarText: "G",
    preview: "Gerakan membaca bersama untuk meningkatkan literasi anak dan perempuan...",
    time: "17 Mei 2026",
    unread: true,
    summary:
      "GeMar bergerak di 3 lokasi aktif sejak 17 Mei 2026. Program ini berfokus pada pendidikan inklusif anak melalui bimbingan belajar gratis setiap minggu.",
    body: [
      "GeMar adalah program gerakan membaca bersama yang dirancang untuk meningkatkan minat dan akses literasi di kalangan anak-anak dan perempuan.",
      "Saat ini aktif di 3 lokasi dengan sesi mingguan yang terbuka untuk umum. Volunteer dan donasi buku sangat kami sambut.",
      "Program mencakup: bacaan tematik kesetaraan gender, sesi mendongeng untuk anak, dan diskusi komunitas.",
    ],
    stats: [
      { v: "3", l: "Lokasi Aktif" },
      { v: "9", l: "Volunteer" },
      { v: "Mei 2026", l: "Mulai" },
    ],
    attachment: "jadwal-gemar-mei2026.pdf",
  },
  {
    id: "gerak",
    name: "GeRak",
    fullName: "Gerakan Responsif Anak & Kesetaraan",
    label: "Aktif",
    labelColor: "#a855f7",
    avatarBg: "from-purple-600 to-purple-900",
    avatarText: "R",
    preview: "Advokasi dan edukasi gender responsif di lingkungan komunitas...",
    time: "2026",
    unread: false,
    summary:
      "GeRak berfokus pada advokasi dan edukasi berbasis gender responsif melalui workshop, seminar, dan kampanye kesadaran di komunitas.",
    body: [
      "GeRak mendorong pemahaman dan praktik responsif gender di masyarakat.",
      "Melalui workshop interaktif dan seminar publik, GeRak membangun kapasitas komunitas untuk bersikap inklusif.",
      "Program ini menargetkan remaja, orang tua, dan pemimpin komunitas sebagai agen perubahan.",
    ],
    stats: [
      { v: "3+", l: "Workshop" },
      { v: "2026", l: "Tahun Aktif" },
      { v: "Komunitas", l: "Sasaran" },
    ],
    attachment: null,
  },
  {
    id: "catatan",
    name: "Catatan Gendis",
    fullName: "Jurnal & Dokumentasi Komunitas",
    label: "Aktif",
    labelColor: "#06b6d4",
    avatarBg: "from-cyan-600 to-teal-900",
    avatarText: "C",
    preview: "Dokumentasi dan catatan perjalanan tentang isu gender dan kesetaraan...",
    time: "2026",
    unread: false,
    summary:
      "Catatan Gendis adalah media dokumentasi komunitas yang merekam refleksi dan opini seputar isu gender, perempuan, anak, dan disabilitas. Sudah 5+ edisi terbit.",
    body: [
      "Catatan Gendis hadir sebagai ruang ekspresi dan dokumentasi perjalanan Peran Gendis.",
      "Setiap edisi memuat refleksi anggota, liputan kegiatan, dan esai tentang isu yang kami perjuangkan.",
      "Sudah lebih dari 5 catatan terbit dan terus bertambah seiring perjalanan komunitas.",
    ],
    stats: [
      { v: "5+", l: "Catatan Terbit" },
      { v: "2026", l: "Tahun Aktif" },
      { v: "Digital", l: "Format" },
    ],
    attachment: "catatan-gendis-terbaru.pdf",
  },
];

const sidebarNav = [
  { name: "Semua Program", count: 3 },
  { name: "GeMar", count: null },
  { name: "GeRak", count: null },
  { name: "Catatan Gendis", count: null },
];

const categories = [
  { name: "PEREMPUAN", color: "#06b6d4" },
  { name: "ANAK", color: "#d97706" },
  { name: "GENDER", color: "#a855f7" },
  { name: "DISABILITAS", color: "#10b981" },
];

export default function HomeProgramShowcase() {
  const [activeId, setActiveId] = useState("gemar");
  const [activeNav, setActiveNav] = useState("Semua Program");

  const current = programs.find((p) => p.id === activeId) ?? programs[0];

  return (
    <section className="relative z-20 max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EXPO_OUT }}
        className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e0a18]/90 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
      >
        {/* Title bar */}
        <div className="h-12 border-b border-white/5 bg-black/40 px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs font-semibold tracking-wider text-white/50">
            Dashboard Program — Peran Gendis
          </span>
          <div className="w-12" />
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-12 h-auto md:h-[550px] md:overflow-hidden bg-black/20 text-sm">
          {/* Sidebar (col-span-3) */}
          <div className="col-span-12 md:col-span-3 border-r border-white/5 bg-black/30 p-4 flex flex-col justify-between overflow-y-auto">
            <div>
              <a
                href="/program/gemar"
                className="w-full flex items-center justify-center gap-2 mb-6 rounded-lg bg-[#d97706] text-black text-xs font-bold px-3 py-2.5 transition-all hover:bg-[#b45309]"
              >
                <span>Volunteer GeMar →</span>
              </a>

              <div className="space-y-1">
                {sidebarNav.map((item) => {
                  const isActive = activeNav === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveNav(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all text-xs font-medium ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.count != null && (
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] ${
                            isActive
                              ? "bg-white/15 text-white"
                              : "bg-white/5 text-white/45"
                          }`}
                        >
                          {item.count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/30 block mb-3 px-3">
                  Isu
                </span>
                <div className="space-y-2 px-3">
                  {categories.map((cat) => (
                    <div
                      key={cat.name}
                      className="flex items-center gap-2 text-xs text-white/70 hover:text-white cursor-default transition-colors"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span>{cat.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-[10px] text-white/40">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>3 Program Aktif · Fase 1</span>
              </div>
            </div>
          </div>

          {/* Program list (col-span-4) */}
          <div className="col-span-12 md:col-span-4 border-r border-white/5 flex flex-col overflow-y-auto">
            <div className="p-3 border-b border-white/5 bg-black/10 flex items-center gap-2">
              <Search className="w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Cari program..."
                className="bg-transparent text-xs text-white placeholder-white/30 outline-none w-full"
                disabled
              />
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-white/5">
              {programs.map((prog) => {
                const isSelected = prog.id === activeId;
                return (
                  <div
                    key={prog.id}
                    onClick={() => setActiveId(prog.id)}
                    className={`p-4 cursor-pointer transition-all duration-150 relative ${
                      isSelected
                        ? "bg-white/5 border-l-2 border-amber-500"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    {prog.unread && (
                      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-amber-400" />
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-white">
                        {prog.name}
                      </span>
                      <span className="text-[10px] text-white/40">
                        {prog.time}
                      </span>
                    </div>
                    <h4 className="text-xs font-medium text-white/90 truncate mb-1">
                      {prog.fullName}
                    </h4>
                    <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                      {prog.preview}
                    </p>
                    <div className="mt-2">
                      <span
                        className="px-1.5 py-0.5 rounded text-[9px] font-medium"
                        style={{
                          backgroundColor: `${prog.labelColor}15`,
                          color: prog.labelColor,
                        }}
                      >
                        {prog.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail panel (col-span-5) */}
          <div className="hidden md:flex col-span-5 flex-col h-full overflow-y-auto bg-black/10">
            <div className="p-3 border-b border-white/5 flex items-center justify-between bg-black/20">
              <div className="flex items-center gap-1.5">
                <button className="w-8 h-8 rounded-md flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-md flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-md flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-all">
                  <MapPin className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-white mb-2">
                  {current.fullName}
                </h2>
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${current.avatarBg} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {current.avatarText}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {current.name}
                    </div>
                    <div className="text-[10px] text-white/40">
                      Program Kerja · {current.time}
                    </div>
                  </div>
                  <span
                    className="ml-auto px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{
                      backgroundColor: `${current.labelColor}20`,
                      color: current.labelColor,
                    }}
                  >
                    {current.label}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/5 opacity-40" />
                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 mb-2 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                    <span>Ringkasan Program</span>
                  </div>
                  <p className="text-xs text-white/85 leading-relaxed italic">
                    &ldquo;{current.summary}&rdquo;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {current.stats.map((stat) => (
                  <div
                    key={stat.l}
                    className="rounded-lg bg-white/[0.03] border border-white/5 p-3 text-center"
                  >
                    <div className="text-sm font-bold text-white">{stat.v}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider mt-1">
                      {stat.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-xs text-white/80 leading-relaxed">
                {current.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {current.attachment && (
                <div className="pt-4 border-t border-white/5">
                  <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/5 text-xs text-white/80 hover:bg-white/[0.08] cursor-pointer transition-all">
                    <span>📄</span>
                    <span>{current.attachment}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
