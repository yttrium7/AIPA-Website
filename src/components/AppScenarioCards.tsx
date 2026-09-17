import { useEffect } from "react";

const BLUE_GRAD   = "linear-gradient(211.75deg, rgb(15,36,115) 0%, rgb(16,252,242) 100%)";
const DEFAULT_BG  = "linear-gradient(211.75deg, rgb(0,0,0) 0%, rgb(255,255,255) 100%)";
const EASE        = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function AppScenarioCards() {
  useEffect(() => {
    let rafId: number;
    const cleanups: (() => void)[] = [];

    rafId = requestAnimationFrame(() => {
      const section4 = document.querySelector('[data-name="home-section-4"]');
      if (!section4) return;

      // Frame divs are children of section4 (display:contents) without a data-name
      const frames = Array.from(section4.children).filter(
        (el) => !el.getAttribute("data-name"),
      ) as HTMLElement[];

      frames.forEach((frame) => {
        // Reset any inline gradient — Frame 1 is hard-coded blue, change to default
        const gradDiv = frame.querySelector<HTMLElement>(
          '[aria-hidden] > div:first-child',
        );
        if (gradDiv) gradDiv.style.backgroundImage = DEFAULT_BG;

        const ariaHidden = frame.querySelector<HTMLElement>("[aria-hidden]");
        if (!ariaHidden) return;

        // ── Blue gradient overlay (fades in on hover) ──────────────
        const overlay = document.createElement("div");
        Object.assign(overlay.style, {
          position: "absolute",
          inset: "0",
          borderRadius: "22px",
          backgroundImage: BLUE_GRAD,
          opacity: "0",
          transition: `opacity 0.45s ${EASE}`,
          pointerEvents: "none",
          zIndex: "2",
        });
        ariaHidden.appendChild(overlay);

        // ── Shine sweep (diagonal highlight slides across on hover) ─
        const shine = document.createElement("div");
        Object.assign(shine.style, {
          position: "absolute",
          inset: "0",
          borderRadius: "22px",
          background:
            "linear-gradient(125deg, transparent 20%, rgba(255,255,255,0.18) 50%, transparent 80%)",
          backgroundSize: "250% 250%",
          backgroundPosition: "160% 160%",
          transition: `background-position 0.65s ease, opacity 0.45s ${EASE}`,
          opacity: "0",
          pointerEvents: "none",
          zIndex: "3",
        });
        ariaHidden.appendChild(shine);

        // ── Frame: set base transition for lift ────────────────────
        frame.style.transition = `transform 0.35s ${EASE}`;

        const onEnter = () => {
          overlay.style.opacity = "1";
          shine.style.opacity = "1";
          shine.style.backgroundPosition = "-60% -60%";
          frame.style.transform = "translateY(-8px)";
        };
        const onLeave = () => {
          overlay.style.opacity = "0";
          shine.style.opacity = "0";
          shine.style.backgroundPosition = "160% 160%";
          frame.style.transform = "translateY(0)";
        };

        frame.addEventListener("mouseenter", onEnter);
        frame.addEventListener("mouseleave", onLeave);

        cleanups.push(() => {
          frame.removeEventListener("mouseenter", onEnter);
          frame.removeEventListener("mouseleave", onLeave);
          overlay.remove();
          shine.remove();
        });
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
