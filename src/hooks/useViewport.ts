import { useState, useEffect } from "react";

const DESKTOP_W = 1440;

export function useViewport() {
  const [vw, setVw] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : DESKTOP_W,
  );
  useEffect(() => {
    const update = () => setVw(window.innerWidth);
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);
  return vw;
}
