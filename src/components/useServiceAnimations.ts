import { useEffect, type RefObject } from "react";

export default function useServiceAnimations(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hidden = new Set<HTMLElement>();
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.style.opacity = "";
        hidden.delete(element);
        if (!preference.matches) animations.push(element.animate(
          [{ opacity: 0, translate: "0 20px" }, { opacity: 1, translate: "0 0" }],
          { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        ));
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    page.querySelectorAll<HTMLElement>(".service-heading, .service-offer-grid article, .service-standard-grid article, .service-car, .service-process-art, .service-process-panel, .service-improvement-copy, .service-improvement-cards, .service-catalogues-panel").forEach(element => {
      if (preference.matches || element.getBoundingClientRect().top < innerHeight * .9) return;
      hidden.add(element);
      element.style.opacity = "0";
      observer.observe(element);
    });
    const reveal = () => {
      if (!preference.matches) return;
      observer.disconnect();
      hidden.forEach(element => { element.style.opacity = ""; });
      hidden.clear();
      animations.forEach(animation => animation.cancel());
    };
    preference.addEventListener("change", reveal);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", reveal);
      hidden.forEach(element => { element.style.opacity = ""; });
      animations.forEach(animation => animation.cancel());
    };
  }, [root]);
}
