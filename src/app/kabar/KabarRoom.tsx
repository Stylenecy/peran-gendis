"use client";

import { useEffect, useState } from "react";
import KabarGate from "./KabarGate";
import KabarHero from "./KabarHero";
import KabarComposer from "./KabarComposer";
import KabarFeed from "./KabarFeed";

export default function KabarRoom() {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [refreshToken, setRefreshToken] = useState(0);

  useEffect(() => {
    try {
      if (localStorage.getItem("kabar_unlocked") === "1") setUnlocked(true);
    } catch {
      // localStorage tidak tersedia — biarkan gate yang menangani
    }
    setReady(true);
  }, []);

  if (!ready) {
    return <div style={{ minHeight: "100vh", background: "#0d0118" }} />;
  }

  if (!unlocked) {
    return <KabarGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <main style={{ background: "#0d0118" }}>
      <KabarHero />
      <KabarComposer onPosted={() => setRefreshToken((t) => t + 1)} />
      <KabarFeed refreshToken={refreshToken} />
    </main>
  );
}
