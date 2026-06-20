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
