-- ============================================================
-- Peran Gendis — Seed registry Aset (/aset)
-- Pra-isi semua tautan operasional yang sekarang kepecah, dari Core §17.
-- Jalankan SETELAH schema.sql. Aman di-run ulang (skip baris yang url-nya sudah ada).
-- Supabase Dashboard -> SQL Editor -> New query -> tempel -> Run.
-- ============================================================

insert into public.assets (label, category, url, owner, note)
select v.label, v.category, v.url, v.owner, v.note
from (values
  ('Drive Dokumentasi GeMar',        'Dokumentasi', 'https://drive.google.com/drive/folders/1na3qBM5LBwNVa1KgPPxuIMKb_IShG8JA', 'PDD',   'Foto/video tiap sesi GeMar. Rename per tanggal.'),
  ('Drive Foto Personil (web)',      'Dokumentasi', 'https://drive.google.com/drive/folders/1ydWLLH30ktFvozgcO9Uf4HQtPzZeOZKG', 'PDD',   'Foto personil untuk halaman /tim website.'),
  ('Sheet Jadwal Mengajar / PO GeMar','Spreadsheet', 'https://docs.google.com/spreadsheets/d/11UjoEHDUqrOr-WyHkvwYSvmKEq8K7tLz8gy2YqHJX3I', 'Marel/Angel', 'Ketersediaan tentor per lokasi/hari.'),
  ('Sheet Rundown / Divisi GeRak',   'Spreadsheet', 'https://docs.google.com/spreadsheets/d/1uQeg8ryOOnOh0Bgpb9I9VQQRnDjpc2wO_PR9gxx9-Kc', 'Acara', 'Pembagian divisi + rundown tiap GeRak.'),
  ('Form Konfirmasi GeRak',          'Form',        'https://docs.google.com/forms/d/e/1FAIpQLSedFq-82iNwjags75D_dOtjS06KF_zIf6CuwG9Bc0_am1nkYg/viewform', 'Acara', 'Konfirmasi hadir/tidak tiap event GeRak.'),
  ('Database Volunteer Batch 1',     'Form',        'https://bit.ly/DatabaseVolunteerBatch1', 'Marel', 'Koordinasi + data e-sertifikat volunteer. Internal — jangan sebar.'),
  ('Grup WA Murid/Ortu GeMar',       'Sosmed',      'https://chat.whatsapp.com/IQbzwMH2cI94VONmimHplX', 'GeMar', 'Kanal komunikasi ortu murid.'),
  ('Instagram @peran.gendis',        'Sosmed',      'https://instagram.com/peran.gendis', 'PDD', 'Kanal publikasi utama.'),
  ('LinkedIn Peran Gendis',          'Sosmed',      'https://linkedin.com/company/peran-gendis', 'Dex', 'Company id 115174652.'),
  ('Medium @perangendis',            'Dokumen',     'https://medium.com/@perangendis', 'PDD', 'Arsip Catatan Gendis (mirror artikel).'),
  ('Medium @marelthaputt',           'Dokumen',     'https://medium.com/@marelthaputt', 'Marel', 'Beberapa Catatan Gendis terbit di sini.')
) as v(label, category, url, owner, note)
where not exists (select 1 from public.assets a where a.url = v.url);
