import { useEffect, type RefObject } from "react";

export default function useProductAnimations(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        if (!preference.matches) animations.push(element.animate(
          [{ opacity: 0.35, translate: "0 20px" }, { opacity: 1, translate: "0 0" }],
          { duration: 650, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        ));
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    page.querySelectorAll<HTMLElement>(".product-description, .product-panel header, .product-item").forEach(element => {
      if (preference.matches || element.getBoundingClientRect().top < innerHeight * .9) return;
      observer.observe(element);
    });
    const reveal = () => {
      if (!preference.matches) return;
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
    };
    preference.addEventListener("change", reveal);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", reveal);
      animations.forEach(animation => animation.cancel());
    };
  }, [root]);
}
