-- ============================================================
-- Peran Gendis — Skema Supabase
-- Jalankan SEKALI di: Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Aman dijalankan ulang (idempotent: create if not exists + drop policy if exists).
-- ============================================================

-- ------------------------------------------------------------
-- 1) updates  ->  Kabar Gendis (hub update tim internal, route /kabar)
--    Butuh INSERT (form composer) + SELECT (feed membaca timeline).
-- ------------------------------------------------------------
create table if not exists public.updates (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  author      text not null,
  category    text not null,
  body        text not null,
  event_date  date,
  location    text,
  link        text,
  status      text not null default 'baru'   -- baru | ditinjau | masuk-core
);

alter table public.updates enable row level security;

drop policy if exists "kabar_insert_anon" on public.updates;
create policy "kabar_insert_anon" on public.updates
  for insert to anon with check (true);

drop policy if exists "kabar_select_anon" on public.updates;
create policy "kabar_select_anon" on public.updates
  for select to anon using (true);

-- ------------------------------------------------------------
-- 2) volunteers  ->  form daftar volunteer GeMar (Fase 2)
--    Hanya INSERT publik. TIDAK ada select publik (data calon relawan = privat).
-- ------------------------------------------------------------
create table if not exists public.volunteers (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  phone        text not null,
  availability text,
  location     text,
  message      text
);

alter table public.volunteers enable row level security;

drop policy if exists "volunteers_insert_anon" on public.volunteers;
create policy "volunteers_insert_anon" on public.volunteers
  for insert to anon with check (true);

-- ------------------------------------------------------------
-- 3) inquiries  ->  form sponsor / kolaborasi (Fase 2)
--    Hanya INSERT publik. TIDAK ada select publik (lead = privat).
-- ------------------------------------------------------------
create table if not exists public.inquiries (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  organization text,
  email        text not null,
  phone        text,
  type         text not null,
  message      text not null
);

alter table public.inquiries enable row level security;

drop policy if exists "inquiries_insert_anon" on public.inquiries;
create policy "inquiries_insert_anon" on public.inquiries
  for insert to anon with check (true);

-- ------------------------------------------------------------
-- 4) students  ->  data murid GeMar per lokasi (ruang internal /data-gemar)
--    INSERT + SELECT publik (passcode-gated di level app, sama seperti Kabar).
-- ------------------------------------------------------------
create table if not exists public.students (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  location    text not null,
  level       text,            -- TK / SD kelas 1..6
  guardian    text,            -- nama ortu/wali (opsional)
  note        text
);

alter table public.students enable row level security;

drop policy if exists "students_insert_anon" on public.students;
create policy "students_insert_anon" on public.students
  for insert to anon with check (true);

drop policy if exists "students_select_anon" on public.students;
create policy "students_select_anon" on public.students
  for select to anon using (true);

-- ------------------------------------------------------------
-- 5) attendance  ->  kehadiran murid per sesi (ruang internal /data-gemar)
--    student_name didenormalisasi supaya feed tidak perlu join.
-- ------------------------------------------------------------
create table if not exists public.attendance (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  session_date  date not null,
  location      text not null,
  student_id    uuid references public.students(id) on delete cascade,
  student_name  text not null,
  present       boolean not null default true,
  note          text
);

alter table public.attendance enable row level security;

drop policy if exists "attendance_insert_anon" on public.attendance;
create policy "attendance_insert_anon" on public.attendance
  for insert to anon with check (true);

drop policy if exists "attendance_select_anon" on public.attendance;
create policy "attendance_select_anon" on public.attendance
  for select to anon using (true);

-- ------------------------------------------------------------
-- 6) materials  ->  bank materi ajar GeMar (ruang internal /data-gemar, tab Materi)
--    Ganti tumpukan Docs/Canva yang kepecah. Low-sensitivity (materi belajar) ->
--    aman di soft-gate. INSERT + SELECT publik (passcode-gated di level app).
-- ------------------------------------------------------------
create table if not exists public.materials (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  title       text not null,
  subject     text,            -- Matematika / IPAS / Bahasa Inggris / Tematik / Ice Breaking / Lainnya
  level       text,            -- TK / SD Kelas 1..6 / Semua jenjang
  kind        text,            -- Modul / Soal / Media / Referensi
  body        text,            -- isi ringkas / instruksi tentor (opsional)
  link        text,            -- link Canva/Drive/Docs (opsional)
  author      text             -- pembuat (opsional)
);

alter table public.materials enable row level security;

drop policy if exists "materials_insert_anon" on public.materials;
create policy "materials_insert_anon" on public.materials
  for insert to anon with check (true);

drop policy if exists "materials_select_anon" on public.materials;
create policy "materials_select_anon" on public.materials
  for select to anon using (true);

-- ------------------------------------------------------------
-- 7) assets  ->  registry semua tautan/aset operasional (ruang internal /aset)
--    Front-door SATU sistem: kumpulkan link Drive/Sheet/Form/Canva/sosmed yang
--    sekarang kepecah. Low-sensitivity (link operasional). INSERT + SELECT publik
--    (passcode-gated). Link berisi data privat (mis. Database Volunteer) JUSTRU
--    lebih terlindungi di balik gate ketimbang tersebar di chat.
-- ------------------------------------------------------------
create table if not exists public.assets (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  label       text not null,
  category    text not null,   -- Dokumentasi / Spreadsheet / Form / Desain / Sosmed / Dokumen / Lainnya
  url         text not null,
  owner       text,            -- penanggung jawab (opsional)
  note        text             -- konteks singkat (opsional)
);

alter table public.assets enable row level security;

drop policy if exists "assets_insert_anon" on public.assets;
create policy "assets_insert_anon" on public.assets
  for insert to anon with check (true);

drop policy if exists "assets_select_anon" on public.assets;
create policy "assets_select_anon" on public.assets
  for select to anon using (true);

-- ------------------------------------------------------------
-- 8) tentors  ->  roster relawan/tentor GeMar (ruang internal /data-gemar, tab Tentor)
--    Master list buat presensi tentor + KPI keaktifan. INSERT + SELECT anon.
-- ------------------------------------------------------------
create table if not exists public.tentors (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  contact     text,            -- no HP / IG (opsional)
  location    text,            -- lokasi utama mengajar (opsional)
  active      boolean not null default true
);

alter table public.tentors enable row level security;

drop policy if exists "tentors_insert_anon" on public.tentors;
create policy "tentors_insert_anon" on public.tentors
  for insert to anon with check (true);

drop policy if exists "tentors_select_anon" on public.tentors;
create policy "tentors_select_anon" on public.tentors
  for select to anon using (true);

-- ------------------------------------------------------------
-- 9) tentor_attendance  ->  presensi tentor per sesi (KPI: siapa ngajar, kapan)
--    tentor_name didenormalisasi supaya feed/dashboard tak perlu join.
-- ------------------------------------------------------------
create table if not exists public.tentor_attendance (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  session_date  date not null,
  location      text not null,
  tentor_id     uuid references public.tentors(id) on delete set null,
  tentor_name   text not null,
  present       boolean not null default true
);

alter table public.tentor_attendance enable row level security;

drop policy if exists "tentor_attendance_insert_anon" on public.tentor_attendance;
create policy "tentor_attendance_insert_anon" on public.tentor_attendance
  for insert to anon with check (true);

drop policy if exists "tentor_attendance_select_anon" on public.tentor_attendance;
create policy "tentor_attendance_select_anon" on public.tentor_attendance
  for select to anon using (true);

-- ------------------------------------------------------------
-- 10) sessions  ->  meta sesi GeMar + iuran AGREGAT terkumpul (Rp).
--     INSERT-only (tanpa UPDATE anon, demi keamanan §8.3). Tiap simpan = 1 baris;
--     dashboard ambil iuran TERBARU per (tanggal|lokasi) lalu jumlahkan. Iuran
--     agregat = data yang DIBOLEHKAN di soft-gate (§8.2), bukan ledger per orang.
-- ------------------------------------------------------------
create table if not exists public.sessions (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  session_date  date not null,
  location      text not null,
  iuran         integer not null default 0,
  note          text
);

alter table public.sessions enable row level security;

drop policy if exists "sessions_insert_anon" on public.sessions;
create policy "sessions_insert_anon" on public.sessions
  for insert to anon with check (true);

drop policy if exists "sessions_select_anon" on public.sessions;
create policy "sessions_select_anon" on public.sessions
  for select to anon using (true);
