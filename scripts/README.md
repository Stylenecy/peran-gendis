# scripts/

Tooling operasional Peran Gendis (bukan bagian build website).

## `sync-kabar.mjs` — Kabar Gendis → Core

Ritual pengganti harvest WhatsApp manual. Tim posting update di `/kabar`
(passcode-gated) → tersimpan di Supabase tabel `updates`. Script ini menarik
baris **baru** (belum pernah disync), memformatnya jadi digest markdown untuk
ditinjau dan dimasukkan ke `Peran-Gendis-Core.md`.

### Cara pakai
```bash
npm run sync:kabar              # tarik + tampilkan digest + tandai sudah-sync
node scripts/sync-kabar.mjs --dry   # preview saja (tidak ubah ledger/DB)
node scripts/sync-kabar.mjs --all   # tampilkan SEMUA update (abaikan ledger)
```

Ritual sesi: jalankan `npm run sync:kabar` di awal sesi → tinjau digest →
masukkan yang relevan (event, anggota baru, capaian) ke Core. Pesan
test/instruksi internal tidak perlu masuk Core.

### Cara kerja & keamanan
- **Dedupe via ledger lokal** (`scripts/kabar-synced.json`) — tidak butuh anon
  UPDATE policy di DB, jalan dengan anon key yang sudah ada.
- Kalau `SUPABASE_SERVICE_ROLE_KEY` diset (di `.env.local`, server-side, bypass
  RLS), script juga menandai `status='masuk-core'` di DB. Tanpa itu, status DB
  tidak diubah (cukup ledger lokal).
- `kabar-synced.json` (UUID) & `kabar-sync-log.md` (isi update internal)
  **di-gitignore** — jangan commit (data passcode-gated, repo bisa publik).

### Env (di `perangendis-web/.env.local`)
| Var | Wajib | Fungsi |
|-----|-------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | endpoint Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | SELECT updates |
| `SUPABASE_SERVICE_ROLE_KEY` | opsional | menandai `status='masuk-core'` di DB |
