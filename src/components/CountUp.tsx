"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function CountUp({ end, duration = 2.5, className, style }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const startMs = performance.now();
    const totalMs = duration * 1000;

    function easeOutQuart(t: number): number {
      return 1 - Math.pow(1 - t, 4);
    }

    function frame(now: number) {
      const t = Math.min((now - startMs) / totalMs, 1);
      setValue(Math.round(easeOutQuart(t) * end));
      if (t < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {value.toLocaleString("id-ID")}
    </span>
  );
}
