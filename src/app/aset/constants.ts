// Konstanta & tipe untuk ruang internal Aset (/aset)
export { inputCls, labelCls } from "../data-gemar/constants";

export const ASSET_CATEGORIES = [
  "Dokumentasi",
  "Spreadsheet",
  "Form",
  "Desain",
  "Sosmed",
  "Dokumen",
  "Lainnya",
] as const;

export type Asset = {
  id: string;
  created_at: string;
  label: string;
  category: string;
  url: string;
  owner: string | null;
  note: string | null;
};
