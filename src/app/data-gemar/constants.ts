// Konstanta & tipe untuk ruang internal Data GeMar (/data-gemar)

export const LOCATIONS = [
  "Balai Budaya Karangkitri (Kedai Tanya)",
  "Omah Kopi Tunggak",
  "RTHP Klitren",
  "Kantor Kelurahan Klitren",
  "SD Muhammadiyah Sokonandi",
] as const;

export const LEVELS = [
  "TK",
  "SD Kelas 1",
  "SD Kelas 2",
  "SD Kelas 3",
  "SD Kelas 4",
  "SD Kelas 5",
  "SD Kelas 6",
] as const;

// Bank materi ajar (tab Materi)
export const SUBJECTS = [
  "Matematika",
  "IPAS",
  "Bahasa Inggris",
  "Tematik",
  "Ice Breaking",
  "Lainnya",
] as const;

export const MATERIAL_LEVELS = ["TK", "SD Kelas 1-3", "SD Kelas 4-6", "Semua jenjang"] as const;

export const MATERIAL_KINDS = ["Modul", "Soal", "Media", "Referensi"] as const;

// Iuran operasional default per sesi (Rp) — Core §8D
export const IURAN_DEFAULT = 15000;

export const inputCls =
  "w-full bg-transparent border border-pg-cream/15 px-4 py-3 text-sm text-pg-cream placeholder-pg-cream/30 outline-none transition-all duration-200 focus:border-pg-gold";

export const labelCls = "block text-xs tracking-[0.3em] uppercase text-pg-gold mb-2.5";

export type Student = {
  id: string;
  created_at: string;
  name: string;
  location: string;
  level: string | null;
  guardian: string | null;
  note: string | null;
};

export type Attendance = {
  id: string;
  created_at: string;
  session_date: string;
  location: string;
  student_id: string | null;
  student_name: string;
  present: boolean;
  note: string | null;
};

export type Material = {
  id: string;
  created_at: string;
  title: string;
  subject: string | null;
  level: string | null;
  kind: string | null;
  body: string | null;
  link: string | null;
  author: string | null;
};

export type Tentor = {
  id: string;
  created_at: string;
  name: string;
  contact: string | null;
  location: string | null;
  active: boolean;
};

export type TentorAttendance = {
  id: string;
  created_at: string;
  session_date: string;
  location: string;
  tentor_id: string | null;
  tentor_name: string;
  present: boolean;
};

export type SessionRow = {
  id: string;
  created_at: string;
  session_date: string;
  location: string;
  iuran: number;
  note: string | null;
};
