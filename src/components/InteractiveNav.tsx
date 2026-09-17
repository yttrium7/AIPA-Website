import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import svgPaths from "@/imports/1Home/svg-vdx3ul2yyf";

const PRODUCTS = [
  "Cooling", "Engine", "Exhaust", "Sensors",
  "AC System", "Brakes", "Ignition", "Electrics", "Chassis",
];

// Scroll positions: section.absoluteTop - navHeight (129)
const SCROLL = {
  home: 0,
  aboutUs: 1275,      // 1404 - 129
  vehicles: 2104,     // 2233 - 129
  services: 2799,     // 2928 - 129
  catalogues: 3625,   // 3754 - 129
  products: 4365,     // 4494 - 129
  footer: 5824,       // 5953 - 129
};

const SECTION_THRESHOLDS: [number, string][] = [
  [SCROLL.products, "products"],
  [SCROLL.catalogues, "catalogues"],
  [SCROLL.services, "services"],
  [SCROLL.aboutUs, "about us"],
  [0, "home"],
];

function smoothScrollTo(y: number) {
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function InteractiveNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const nav = (path: string) => { navigate(path); window.scrollTo(0, 0); };
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (isHome) {
        const match = SECTION_THRESHOLDS.find(([threshold]) => y >= threshold);
        setActiveSection(match ? match[1] : "home");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, pathname]);

  const itemColor = (name: string) =>
    (isHome ? activeSection === name : PAGE_ROUTES[name] === pathname) ? "#10fcf2" : "white";

  const PAGE_ROUTES: Record<string, string> = {
    "about us":  "/about",
    services:    "/services",
    catalogues:  "/catalogues",
    products:    "/products",
  };

  const go = (section: string, scrollY: number) => {
    if (isHome && section !== "about us" && section !== "services") {
      smoothScrollTo(scrollY);
    } else {
      nav(PAGE_ROUTES[section] ?? "/");
    }
  };

  return (
    <div
      style={{ position: "sticky", top: 0, zIndex: 100, width: "1440px" }}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: scrolled ? "rgba(0,8,45,0.97)" : "rgba(0,8,45,0.3)",
          transition: "background-color 0.35s ease",
        }}
      />

      {/* Content row */}
      <div
        style={{
          position: "absolute",
          left: "calc(50% + 0.5px)",
          top: "33px",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "136px",
          alignItems: "center",
        }}
      >
        {/* Logo → home */}
        <div
          onClick={() => isHome ? smoothScrollTo(0) : nav("/")}
          style={{ height: "62px", width: "213px", position: "relative", flexShrink: 0, cursor: "pointer" }}
        >
          <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} fill="none" viewBox="0 0 213 62">
            <g clipPath="url(#clip_inav)">
              <path d={svgPaths.p9f9e900}   fill="url(#inav_g0)" />
              <path d={svgPaths.p3829cf80}  fill="url(#inav_g1)" />
              <path d={svgPaths.p1c978100}  fill="url(#inav_g2)" />
              <path d={svgPaths.p31374c00}  fill="url(#inav_g3)" />
              <path d={svgPaths.p154e6e00}  fill="url(#inav_g4)" />
              <path d={svgPaths.p25632100}  fill="url(#inav_g5)" />
              <path d={svgPaths.p1e46c4c0}  fill="url(#inav_g6)" />
              <path d={svgPaths.p34b15200}  fill="url(#inav_g7)" />
            </g>
            <defs>
              <linearGradient id="inav_g0" x1="27.8006" x2="27.8006" y1="8.33556" y2="64.1356" gradientUnits="userSpaceOnUse">
                <stop stopColor="#31D2FB" /><stop offset="0.6" stopColor="#5361FB" />
              </linearGradient>
              <linearGradient id="inav_g1" x1="35.6844" x2="8.38901" y1="32.0333" y2="79.7956" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10FCF2" /><stop offset="0.4" stopColor="#31D2FB" /><stop offset="1" stopColor="#5361FB" />
              </linearGradient>
              <linearGradient id="inav_g2" x1="89.0036" x2="59.9904" y1="-9.92" y2="16.4383" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10FCF2" /><stop offset="0.4" stopColor="#31D2FB" /><stop offset="1" stopColor="#5361FB" />
              </linearGradient>
              <linearGradient id="inav_g3" x1="78.976" x2="57.0157" y1="59.1756" y2="32.7764" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10FCF2" /><stop offset="0.4" stopColor="#31D2FB" /><stop offset="1" stopColor="#5361FB" />
              </linearGradient>
              <linearGradient id="inav_g4" x1="147.509" x2="94.6743" y1="40.1622" y2="40.1622" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10FCF2" /><stop offset="0.4" stopColor="#31D2FB" /><stop offset="1" stopColor="#5361FB" />
              </linearGradient>
              <linearGradient id="inav_g5" x1="184.369" x2="184.369" y1="18.4622" y2="61.9311" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10FCF2" /><stop offset="0.4" stopColor="#31D2FB" /><stop offset="1" stopColor="#5361FB" />
              </linearGradient>
              <linearGradient id="inav_g6" x1="94.6743" x2="134.37" y1="51.0467" y2="51.0467" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10FCF2" /><stop offset="0.4" stopColor="#31D2FB" /><stop offset="1" stopColor="#5361FB" />
              </linearGradient>
              <linearGradient id="inav_g7" x1="162.862" x2="162.862" y1="61.9311" y2="18.4622" gradientUnits="userSpaceOnUse">
                <stop stopColor="#31D2FB" /><stop offset="1" stopColor="#5361FB" />
              </linearGradient>
              <clipPath id="clip_inav"><rect fill="white" height="62" width="213" /></clipPath>
            </defs>
          </svg>
        </div>

        {/* Menu */}
        <div style={{ display: "flex", gap: "30px", alignItems: "center", flexShrink: 0, position: "relative" }}>

          {/* Home */}
          <NavItem
            label="home"
            color={itemColor("home")}
            onClick={() => isHome ? smoothScrollTo(SCROLL.home) : nav("/")}
          />

          {/* Products with dropdown */}
          <div style={{ position: "relative" }}>
            <div
              style={{ display: "flex", gap: "2px", alignItems: "center", cursor: "pointer" }}
              onMouseEnter={() => setDropdownOpen(true)}
              onClick={() => setDropdownOpen(true)}
            >
              <NavItem
                label="products"
                color={dropdownOpen || pathname.startsWith("/products") || activeSection === "products" ? "#10fcf2" : "white"}
              />
              <div style={{
                width: "24px", height: "24px", overflow: "hidden", flexShrink: 0,
                transition: "transform 0.2s",
                transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}>
                <svg style={{ display: "block", width: "100%", height: "100%" }} fill="none" viewBox="0 0 24 24">
                  <path clipRule="evenodd" d={svgPaths.p13ea8000} fill="white" fillRule="evenodd" />
                </svg>
              </div>
            </div>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 20px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  minWidth: "160px",
                  borderRadius: "8px",
                  padding: "8px 0",
                  background: "linear-gradient(128.37deg, rgb(15,36,115) 0%, rgb(16,252,242) 100%)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  zIndex: 200,
                }}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {PRODUCTS.map((item) => (
                  <div
                    key={item}
                    className="inav-dropdown-item"
                    onClick={() => { nav(`/products/${item.toLowerCase().replace(/\s+/g, "-")}`); setDropdownOpen(false); }}
                    style={{
                      padding: "9px 20px",
                      fontFamily: "'Inter:Medium',sans-serif",
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "white",
                      cursor: "pointer",
                      textTransform: "capitalize",
                      transition: "background-color 0.15s",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavItem label="about us"   color={itemColor("about us")}   onClick={() => go("about us",   SCROLL.aboutUs)} />
          <NavItem label="service & support" color={itemColor("services")} onClick={() => go("services", SCROLL.services)} />
        </div>

        {/* Contact Us page */}
        <div
          className="inav-contact-btn"
          onClick={() => nav("/contact")}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            height: "52px", width: "154px", padding: "20px 30px",
            borderRadius: "4px", flexShrink: 0,
            backgroundImage: "linear-gradient(256.63886902898764deg, rgb(83,97,251) 1.6531%, rgb(23,202,245) 100%)",
            cursor: "pointer",
            transition: "opacity 0.2s, transform 0.15s",
          }}
        >
          <p style={{ fontFamily: "'Inter:Bold',sans-serif", fontWeight: 700, fontSize: "16px", lineHeight: "normal", color: "white", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            contact us
          </p>
        </div>
      </div>

      <div style={{ height: "129px" }} />
    </div>
  );
}

function NavItem({ label, color, onClick }: { label: string; color: string; onClick?: () => void }) {
  return (
    <p
      className="inav-item"
      onClick={onClick}
      style={{
        fontFamily: "'Inter:Bold',sans-serif",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "normal",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
        cursor: "pointer",
        color,
        transition: "color 0.15s",
      }}
    >
      {label}
    </p>
  );
}
