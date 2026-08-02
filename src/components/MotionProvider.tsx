"use client";

import { MotionConfig } from "framer-motion";

/**
 * Satu tempat untuk setelan gerak global.
 *
 * reducedMotion="user" membuat setiap komponen framer-motion di situs
 * menghormati `prefers-reduced-motion` milik sistem — tanpa perlu menyentuh
 * satu per satu animasi yang sudah ada.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
