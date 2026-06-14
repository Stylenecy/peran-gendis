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
