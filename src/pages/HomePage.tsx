import { useState, useEffect, useCallback } from "react";
import Component1Home from "@/imports/1Home/index";
import ScrollAnimations from "@/components/ScrollAnimations";
import AppScenarioCards from "@/components/AppScenarioCards";
import MobileLayout from "@/components/MobileLayout";
import { useViewport } from "@/hooks/useViewport";
import HomeCampaignSlide, { HomeSuppliedBannerSlide } from "@/components/HomeCampaignSlide";
import { useNavigate } from "react-router";
import "@/components/home-campaign.css";

const TOTAL_SLIDES   = 3;
const AUTO_ADVANCE_MS = 4500;
const NAV_H          = 129;
const PAGE_H         = 5953 + 535; // Footer bottom defines the desktop page height.

const scrollTo = (y: number) => window.scrollTo({ top: y, behavior: "smooth" });
const sectionScroll = (absoluteTop: number) => scrollTo(absoluteTop - NAV_H);

const SECTIONS = {
  whoWeAre:    1404,
  vehicles:    2233,
  whatWeOffer: 2928,
  appScenario: 3754,
  products:    4494,
  productGrid: 4996,
  footer:      5953,
};

const SOCIAL: Record<string, string> = {
  "typcn:social-youtube":       "https://www.youtube.com",
  "typcn:social-instagram":     "https://www.instagram.com",
  "foundation:social-facebook": "https://www.facebook.com",
  "mingcute:social-x-fill":     "https://x.com",
};

const FOOTER_HEADING_SCROLL: Record<string, number> = {
  SERVICES:   SECTIONS.whatWeOffer,
  "ABOUT US": SECTIONS.whoWeAre,
  PRODUCTS:   SECTIONS.products,
};

const PRODUCT_CARD_ROUTES: Record<string, string> = {
  "card-01": "/products/sensors",
  "card-02": "/products/brakes",
  "card-03": "/products/cooling",
  "card-04": "/products/ignition",
  "card-05": "/products/electrics",
  "card-06": "/products/ac-system",
  "card-07": "/products/exhaust",
  "card-08": "/products/chassis",
  "card-09": "/products/engine",
};

function DesktopHome() {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(
      () => setActiveSlide((s) => (s + 1) % TOTAL_SLIDES),
      AUTO_ADVANCE_MS,
    );
    return () => clearInterval(timer);
  }, []);

  const handlePageClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.closest('[data-name="home-section-3"] [data-name^="card-"]')) {
      navigate("/services");
      window.scrollTo(0, 0);
      return;
    }

    const productCard = target.closest<HTMLElement>('[data-name="section-grid"] [data-name^="card-"]');
    if (productCard) {
      const route = PRODUCT_CARD_ROUTES[productCard.dataset.name ?? ""];
      if (route) {
        navigate(route);
        window.scrollTo(0, 0);
        return;
      }
    }

    for (const [name, url] of Object.entries(SOCIAL)) {
      if (target.closest(`[data-name="${name}"]`)) {
        window.open(url, "_blank", "noopener,noreferrer");
        return;
      }
    }
    if (target.closest('[data-name="footer-link-col-1"]')) {
      const text = target.textContent ?? "";
      if (text.includes("@") || text.includes("CONTACT US NOW") || text.includes("NEED HELP")) {
        window.location.href = "mailto:info@ai-parts.eu";
        return;
      }
    }
    if (target.closest('[data-name="footer"] [data-name="main-btn"]')) {
      window.location.href = "mailto:info@ai-parts.eu";
      return;
    }
    const footerLinkEl = target.closest('[data-name="footer-links"]');
    if (footerLinkEl) {
      const col = footerLinkEl.closest('[data-name^="footer-link-col"]');
      const heading = col?.querySelector("p")?.textContent?.trim() ?? "";
      const dest = FOOTER_HEADING_SCROLL[heading];
      if (dest !== undefined) sectionScroll(dest);
      return;
    }
    if (target.closest('[data-name="footer-link-col-2"]') && target.tagName === "P") {
      sectionScroll(SECTIONS.products);
      return;
    }
    if (target.closest('[data-name="secondary-btn"]'))        { navigate("/about#company-profile"); return; }
    if (target.closest('[data-name="secondary-btn-divert"]')) { navigate("/services#catalogues");    return; }
    if (target.closest('[data-name="navigation"] [data-name="aipa-logo"]')) { scrollTo(0); return; }
    if (target.closest('[data-name="navigation"] [data-name="main-btn"]'))  { sectionScroll(SECTIONS.footer); return; }
  }, [navigate]);

  return (
    <div
      style={{ marginTop: `-${NAV_H}px`, position: "relative", minHeight: `${PAGE_H}px` }}
      onClickCapture={handlePageClick}
    >
      <Component1Home bannerOverlay={activeSlide === 1 ? <HomeSuppliedBannerSlide /> : activeSlide === 2 ? <HomeCampaignSlide /> : undefined} />
      <ScrollAnimations />
      <AppScenarioCards />

      {/* Carousel dots */}
      <div
        style={{
          position: "absolute", top: "712px", left: "626px",
          zIndex: 50, display: "flex", gap: "4px", alignItems: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActiveSlide(i)}
            style={{
              height: "4px", width: "60px", borderRadius: "2px",
              border: "none", padding: 0, cursor: "pointer", flexShrink: 0,
              backgroundColor: i === activeSlide ? "white" : "rgba(0,8,45,0.3)",
              transition: "background-color 0.35s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const vw = useViewport();
  if (vw < 768) return <MobileLayout />;
  return <DesktopHome />;
}
