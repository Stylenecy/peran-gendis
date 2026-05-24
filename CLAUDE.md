# CLAUDE.md — perangendis-web

Sebelum mengerjakan apapun di project ini, baca dulu (urutan penting):

1. **`.agent/memory/MEMORY.md`** — index semua konteks project ini
2. **`.agent/memory/project_website_status.md`** — progress, halaman yang sudah/belum dibuat, next steps
3. **`.agent/memory/feedback_vibe_coding.md`** — cara Dex bekerja + vibe coding rules
4. **`D:\AT Kuliah\Peran Gendis\Peran-Gendis-Core.md`** — single source of truth tentang Peran Gendis (konten, program, kontak)

---

## Aturan Wajib

- **Update `.agent/memory/project_website_status.md`** setiap kali ada halaman baru selesai atau keputusan baru dibuat
- **Jangan over-engineer** — Fase 1 = static pages. Tidak perlu backend sampai benar-benar butuh
- **Ship bertahap** — satu halaman selesai, konfirmasi dulu, baru lanjut
- **Konten dari Core** — jangan mengarang konten. Semua teks, data, kontak harus dari `Peran-Gendis-Core.md`

---

## Stack

Next.js 16 · Tailwind CSS v4 · TypeScript · Vercel

## Struktur Folder

```
src/
├── app/
│   ├── layout.tsx        ← root layout (Navbar + Footer)
│   ├── globals.css       ← design system (warna, font)
│   ├── page.tsx          ← Home ✅
│   ├── tentang/
│   ├── program/
│   │   ├── gemar/        ← PRIORITAS
│   │   ├── gerak/
│   │   ├── catatan/
│   │   └── koper/
│   ├── sponsor/
│   └── kontak/
└── components/
    ├── Navbar.tsx        ✅
    └── Footer.tsx        ✅
```
