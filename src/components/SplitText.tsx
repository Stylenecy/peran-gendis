"use client";
import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export default function SplitText({ text, className, delay = 0, stagger = 0.025 }: SplitTextProps) {
  const words = text.split(" ");
  let charCount = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => {
            const currentDelay = delay + charCount * stagger;
            charCount++;
            return (
              <motion.span
                key={charIndex}
                className="inline-block"
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.55, delay: currentDelay, ease: "easeOut" }}
                aria-hidden="true"
              >
                {char}
              </motion.span>
            );
          })}
          {wordIndex !== words.length - 1 && (
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.55, delay: delay + charCount * stagger, ease: "easeOut" }}
              aria-hidden="true"
            >
              &nbsp;
            </motion.span>
          )}
          <span className="hidden">{charCount++}</span> {/* Increment for space */}
        </span>
      ))}
    </span>
  );
}
