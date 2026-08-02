const C = {
  paper: "#faf6ef", paper2: "#f3ebe0", paper3: "#d9c7b0",
  ink: "#2a1129", inkSoft: "#574055", inkMute: "#6b5468",
  berry: "#96185f", berryDeep: "#6d1145", berrySoft: "#fbe9f2",
  leaf: "#2f6b4f", leafSoft: "#e4f0e8",
  gula: "#96551a", gulaSoft: "#fbeedd",
  deep: "#241026",
  white: "#ffffff", focusOnDeep: "#ffb3d9",
};

const lin = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
const L = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};
const ratio = (a, b) => {
  const [x, y] = [L(a), L(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

// Pasangan yang benar-benar dipakai di situs.
const pairs = [
  ["ink", "paper", "teks utama", 4.5],
  ["ink", "paper2", "teks di pita alternatif", 4.5],
  ["inkSoft", "paper", "teks sekunder", 4.5],
  ["inkMute", "paper", "teks tersier / caption", 4.5],
  ["berry", "paper", "tautan & judul aksen", 4.5],
  ["berry", "berrySoft", "teks pada pil berry", 4.5],
  ["berryDeep", "paper", "berry pekat di kertas", 4.5],
  ["white", "berry", "teks pada tombol utama", 4.5],
  ["white", "berryDeep", "teks pada tombol hover", 4.5],
  ["leaf", "paper", "aksen daun", 4.5],
  ["leaf", "leafSoft", "teks pada pil daun", 4.5],
  ["gula", "paper", "aksen gula (teks)", 4.5],
  ["gula", "gulaSoft", "teks pada pil gula", 4.5],
  ["paper", "deep", "teks di pita pekat", 4.5],
  ["berrySoft", "deep", "aksen terang di pita pekat", 4.5],
  ["focusOnDeep", "deep", "cincin fokus di pita pekat", 3.0],
  ["berry", "paper", "cincin fokus di kertas", 3.0],
  ["paper3", "paper", "garis batas kartu (non-teks)", 1.5],
];

let fail = 0;
for (const [a, b, label, min] of pairs) {
  const r = ratio(C[a], C[b]);
  const ok = r >= min;
  if (!ok) fail++;
  console.log(
    `${ok ? "PASS" : "FAIL"}  ${r.toFixed(2).padStart(6)}:1  (min ${min})  ${label}  [${a} / ${b}]`
  );
}
console.log(fail === 0 ? "\nSemua pasangan lolos." : `\n${fail} pasangan GAGAL.`);
process.exit(fail ? 1 : 0);

