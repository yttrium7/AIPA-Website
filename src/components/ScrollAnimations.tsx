import { useEffect } from "react";

type Dir = "up" | "left" | "right" | "scale";

const DEFAULT_DURATION = 750;
const DEFAULT_DISTANCE = 38;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const NAV_H = 129;

const OBS_OPTS: IntersectionObserverInit = {
  threshold: 0.08,
  rootMargin: `-${NAV_H}px 0px 0px 0px`,
};

function initialTransform(dir: Dir, dist: number): string {
  switch (dir) {
    case "up":    return `translateY(${dist}px)`;
    case "left":  return `translateX(-${dist}px)`;
    case "right": return `translateX(${dist}px)`;
    case "scale": return `scale(0.94) translateY(${dist * 0.5}px)`;
  }
}

function applyHide(el: HTMLElement, dir: Dir, delayMs: number, dist: number, dur: number) {
  el.style.willChange = "opacity, transform";
  el.style.opacity    = "0";
  el.style.transform  = initialTransform(dir, dist);
  el.style.transition =
    `opacity ${dur}ms ${EASE} ${delayMs}ms, ` +
    `transform ${dur}ms ${EASE} ${delayMs}ms`;
}

function applyShow(el: HTMLElement) {
  el.style.opacity   = "1";
  el.style.transform = "none";
  // free GPU resources once done
  el.addEventListener("transitionend", () => { el.style.willChange = "auto"; }, { once: true });
}

function absTop(el: Element): number {
  return el.getBoundingClientRect().top + window.scrollY;
}

function isBelowFold(el: Element): boolean {
  return el.getBoundingClientRect().top > window.innerHeight * 0.88;
}

// ─── Observe helpers ─────────────────────────────────────────────────────────

/** Single element: observe itself as trigger. */
function observeOne(
  el: HTMLElement,
  observers: IntersectionObserver[],
  dir: Dir = "up",
  delayMs  = 0,
  dist     = DEFAULT_DISTANCE,
  dur      = DEFAULT_DURATION,
  alwaysHide = false,
) {
  if (!alwaysHide && !isBelowFold(el)) return;
  applyHide(el, dir, delayMs, dist, dur);

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        applyShow(e.target as HTMLElement);
        obs.unobserve(e.target);
      }
    });
  }, OBS_OPTS);
  obs.observe(el);
  observers.push(obs);
}

/**
 * Group: hide all targets up-front, observe the triggerEl,
 * reveal all targets (with their pre-set delays) when trigger enters viewport.
 */
function observeGroupWithTrigger(
  triggerEl: HTMLElement,
  targets: Array<{ el: HTMLElement; dir: Dir; delayMs: number; dist?: number; dur?: number }>,
  observers: IntersectionObserver[],
  alwaysHide = false,
) {
  const relevant = alwaysHide
    ? targets
    : targets.filter((t) => isBelowFold(t.el));
  if (!relevant.length) return;

  relevant.forEach(({ el, dir, delayMs, dist = DEFAULT_DISTANCE, dur = DEFAULT_DURATION }) =>
    applyHide(el, dir, delayMs, dist, dur),
  );

  let fired = false;
  const obs = new IntersectionObserver((entries) => {
    if (!fired && entries.some((e) => e.isIntersecting)) {
      fired = true;
      relevant.forEach(({ el }) => applyShow(el));
      obs.disconnect();
    }
  }, OBS_OPTS);
  obs.observe(triggerEl);
  observers.push(obs);
}

/** Sorted-group: trigger on first, stagger by position order. */
function observeGroup(
  els: HTMLElement[],
  observers: IntersectionObserver[],
  dir: Dir = "up",
  staggerMs = 110,
  dist      = DEFAULT_DISTANCE,
  dur       = DEFAULT_DURATION,
) {
  const below = els.filter(isBelowFold);
  if (!below.length) return;

  const sorted = [...below].sort((a, b) => {
    const da = a.getBoundingClientRect(), db = b.getBoundingClientRect();
    const dt = da.top - db.top;
    return Math.abs(dt) < 60 ? da.left - db.left : dt;
  });

  sorted.forEach((el, i) => applyHide(el, dir, i * staggerMs, dist, dur));

  let fired = false;
  const obs = new IntersectionObserver((entries) => {
    if (!fired && entries.some((e) => e.isIntersecting)) {
      fired = true;
      sorted.forEach(applyShow);
      obs.disconnect();
    }
  }, OBS_OPTS);
  obs.observe(sorted[0]);
  observers.push(obs);
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ScrollAnimations() {
  useEffect(() => {
    let raf: number;
    const observers: IntersectionObserver[] = [];
    raf = requestAnimationFrame(() => {
    const q  = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));
    const q1 = (sel: string) => document.querySelector<HTMLElement>(sel);

    // Helper: both <p> children of a home-feature-XX div
    const featurePs = (id: string): HTMLElement[] => {
      const div = q1(`[data-name="${id}"]`);
      return div ? Array.from(div.querySelectorAll<HTMLElement>("p")) : [];
    };

    // ── 1 · Home Feature ─────────────────────────────────────────────────────
    //
    // BG decorative SVG: slow fade-up, always animate (visible at load on tall screens)
    const featBg = q1('[data-name="home-feature-BG"]');
    if (featBg) observeOne(featBg, observers, "up", 0, 28, 950, true);

    // Row 1 — feature-01 (25+) and feature-02 (16)
    // Each stat's number slides up first, then its label follows 90ms later.
    // feature-02 lags feature-01 by 160ms so the left→right wave reads naturally.
    {
      const [f01num, f01lbl] = featurePs("home-feature-01");
      const [f02num, f02lbl] = featurePs("home-feature-02");
      const trigger = q1('[data-name="home-feature-01"]');
      if (trigger) {
        observeGroupWithTrigger(
          trigger,
          [
            { el: f01num, dir: "up" as Dir, delayMs:   0, dist: 42, dur: 700 },
            { el: f01lbl, dir: "up" as Dir, delayMs:  90, dist: 30, dur: 650 },
            { el: f02num, dir: "up" as Dir, delayMs: 160, dist: 42, dur: 700 },
            { el: f02lbl, dir: "up" as Dir, delayMs: 250, dist: 30, dur: 650 },
          ].filter((t) => t.el),
          observers,
          true, // always animate regardless of fold position
        );
      }
    }

    // Row 2 — feature-03 (Global), feature-04 (ISO-Certified), feature-05 (TecDoc)
    // Same pattern: number first, then label, left-to-right wave.
    {
      const [f03num, f03lbl] = featurePs("home-feature-03");
      const [f04num, f04lbl] = featurePs("home-feature-04");
      const [f05num, f05lbl] = featurePs("home-feature-05");
      const trigger = q1('[data-name="home-feature-03"]');
      if (trigger) {
        observeGroupWithTrigger(
          trigger,
          [
            { el: f03num, dir: "up" as Dir, delayMs:   0, dist: 42, dur: 700 },
            { el: f03lbl, dir: "up" as Dir, delayMs:  90, dist: 30, dur: 650 },
            { el: f04num, dir: "up" as Dir, delayMs: 160, dist: 42, dur: 700 },
            { el: f04lbl, dir: "up" as Dir, delayMs: 250, dist: 30, dur: 650 },
            { el: f05num, dir: "up" as Dir, delayMs: 320, dist: 42, dur: 700 },
            { el: f05lbl, dir: "up" as Dir, delayMs: 410, dist: 30, dur: 650 },
          ].filter((t) => t.el),
          observers,
          true,
        );
      }
    }

    // ── 2 · Who We Are (section 1, top≈1404px) ───────────────────────────────
    const sec1Pic = q('[data-name="section-pic"]').find((el) => absTop(el) < 2000);
    if (sec1Pic) observeOne(sec1Pic, observers, "left", 0, 55, 850);

    q('[data-name="section-title-left"]').forEach((el) =>
      observeOne(el, observers, "right", 0, 50, 800),
    );
    q('[data-name="section-text"] > div, [data-name="section-text"] > p').forEach((el) =>
      observeOne(el, observers, "right", 130, 45, 750),
    );
    q('[data-name="secondary-btn"]').forEach((el) =>
      observeOne(el, observers, "up", 260, 28, 650),
    );

    // ── 3 · Vehicles We Serve (section 2, top≈2233px) ────────────────────────
    const titleBg = q1('[data-name="section-title-bg"]');
    if (titleBg) observeOne(titleBg, observers, "left", 0, 55, 850);

    const divVert = q1('[data-name="divider-vertical"]');
    if (divVert) observeOne(divVert, observers, "up", 100, 28, 700);

    const sec2Pic = q('[data-name="section-pic"]').find((el) => absTop(el) > 2000);
    if (sec2Pic) observeOne(sec2Pic, observers, "up", 0, 25, 900);

    const carBg = q1('[data-name="car-icon-content"] [data-name="BG"]');
    if (carBg) observeOne(carBg, observers, "right", 120, 50, 850);

    const carIcons = q1('[data-name="car-icons"]');
    if (carIcons) observeOne(carIcons, observers, "up", 250, 30, 700);

    // ── 4 · What We Offer (section 3, top≈2928px) ────────────────────────────
    const divHoriz = q1('[data-name="divider-horizontal"]');
    if (divHoriz) observeOne(divHoriz, observers, "left", 0, 60, 700);

    const sec3Title = q1('[data-name="section-title"]');
    if (sec3Title) observeOne(sec3Title, observers, "up", 80, 35, 750);

    const infoCardBGs = q('[data-name="card-BG"]').filter(
      (el) => { const t = absTop(el); return t > 3050 && t < 3200; },
    );
    observeGroup(infoCardBGs, observers, "up", 130);

    const infoCardPics = q('[data-name="card-pic"]').filter(
      (el) => { const t = absTop(el); return t > 3050 && t < 3200; },
    );
    observeGroup(infoCardPics, observers, "up", 130);

    // ── 5 · Application Scenario (section 4, top≈3754px) ─────────────────────
    const sec4Title = q('[data-name="section-title-center"]').find(
      (el) => { const t = absTop(el); return t > 3700 && t < 4400; },
    );
    if (sec4Title) observeOne(sec4Title, observers, "up", 0, 35, 780);

    const sec4Root = q1('[data-name="home-section-4"]');
    if (sec4Root) {
      const frames = Array.from(sec4Root.children).filter(
        (el) => !el.getAttribute("data-name"),
      ) as HTMLElement[];
      observeGroup(frames, observers, "up", 110, 35, 800);
    }

    // ── 6 · Products section (section 5, top≈4494px) ─────────────────────────
    const secBg = q1('[data-name="section-bg"]');
    if (secBg) observeOne(secBg, observers, "scale", 0, 40, 950);

    const sec5Title = q('[data-name="section-title-center"]').find(
      (el) => absTop(el) > 4400,
    );
    if (sec5Title) observeOne(sec5Title, observers, "up", 150, 32, 750);

    const introPanel = q1('[data-name="section-intro"] [data-name="bg"]');
    if (introPanel) observeOne(introPanel, observers, "up", 0, 35, 780);

    q('[data-name="secondary-btn-divert"]').forEach((el) =>
      observeOne(el, observers, "up", 200, 28, 650),
    );

    const allProductBGs = q('[data-name="card-BG"]').filter((el) => absTop(el) > 4900);
    const prodRow1 = allProductBGs.filter((el) => { const t = absTop(el); return t < 5150; });
    const prodRow2 = allProductBGs.filter((el) => { const t = absTop(el); return t >= 5150 && t < 5400; });
    const prodRow3 = allProductBGs.filter((el) => { const t = absTop(el); return t >= 5400; });
    observeGroup(prodRow1, observers, "up", 110);
    observeGroup(prodRow2, observers, "up", 110);
    observeGroup(prodRow3, observers, "up", 110);

    // ── 7 · Footer (top≈5953px) ───────────────────────────────────────────────
    const footer = q1('[data-name="footer"]');
    if (footer) observeOne(footer, observers, "up", 0, 30, 850);

    }); // end requestAnimationFrame
    return () => {
      cancelAnimationFrame(raf);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return null;
}
