import { useEffect, type RefObject } from "react";

/** Scoped to About: generated display:contents groups have no box to observe. */
export default function useAboutAnimations(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const hidden = new Set<HTMLElement>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.style.opacity = "";
        hidden.delete(element);
        if (!reducedMotion.matches) {
          animations.push(element.animate(
            [{ opacity: 0, translate: "0 24px" }, { opacity: 1, translate: "0 0" }],
            { duration: 750, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
          ));
        }
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });

    // Observe real positioned boxes rather than the generated contents wrappers.
    const candidates = page.querySelectorAll<HTMLElement>(
      '[data-name^="aboutUs-section"] > *, [data-name="company-profile"] > *, [data-name^="commitment-card"] > *, [data-name="text-tile"] > *',
    );
    for (const element of candidates) {
      if (getComputedStyle(element).display === "contents") continue;
      if (element.getBoundingClientRect().top < window.innerHeight * 0.88 || reducedMotion.matches) continue;
      element.style.opacity = "0";
      hidden.add(element);
      observer.observe(element);
    }
    const showAll = () => {
      if (!reducedMotion.matches) return;
      observer.disconnect();
      hidden.forEach(element => { element.style.opacity = ""; });
      hidden.clear();
      animations.forEach(animation => animation.cancel());
    };
    reducedMotion.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", showAll);
      hidden.forEach(element => { element.style.opacity = ""; });
      animations.forEach(animation => animation.cancel());
    };
  }, [root]);
}
