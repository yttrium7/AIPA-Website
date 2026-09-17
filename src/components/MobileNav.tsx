import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router";
import svgPaths from "@/imports/1Home/svg-vdx3ul2yyf";

const nav = (path: string) => {
  window.history.pushState(null, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const NAVY      = "#00082d";
const FONT_BOLD = "'Inter:Bold', sans-serif";
const GRAD_BTN  = "linear-gradient(256.64deg, rgb(83,97,251) 1.65%, rgb(23,202,245) 100%)";

const NAV_LINKS = [
  { label: "HOME",       path: "/",            sectionId: "hero"           },
  { label: "PRODUCTS",   path: "/products",    sectionId: "products"       },
  { label: "ABOUT US",   path: "/about",       sectionId: "who-we-are"     },
  { label: "SERVICE & SUPPORT", path: "/services", sectionId: "what-we-offer" },
];

export default function MobileNav() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const nav = (path: string) => { navigate(path); window.scrollTo(0, 0); };
  const isHome = pathname === "/";

  const handleNavClick = (link: { path: string; sectionId: string }) => {
    if (link.path === "/products") { setProductsOpen(value => !value); return; }
    close();
    if (isHome && link.path !== "/about" && link.path !== "/services") {
      const el = document.getElementById(link.sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      nav(link.path);
    }
  };

  const handleLogoClick = () => {
    close();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      nav("/");
    }
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: open ? `${NAVY}f5` : "rgba(0,8,45,0.85)",
        backdropFilter: "blur(12px)",
        transition: "background 0.3s ease",
        borderBottom: open ? "none" : "1px solid rgba(16,252,242,0.15)",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 20px", height: "60px",
        }}>
          {/* Logo */}
          <div onClick={handleLogoClick} style={{ cursor: "pointer", flexShrink: 0 }}>
            <svg width="107" height="31" viewBox="0 0 213 62" fill="none">
              <g clipPath="url(#mnav_clip)">
                <path d={svgPaths.p9f9e900}  fill="url(#mnav_g0)" />
                <path d={svgPaths.p3829cf80} fill="url(#mnav_g1)" />
                <path d={svgPaths.p1c978100} fill="url(#mnav_g2)" />
                <path d={svgPaths.p31374c00} fill="url(#mnav_g3)" />
                <path d={svgPaths.p154e6e00} fill="url(#mnav_g4)" />
                <path d={svgPaths.p25632100} fill="url(#mnav_g5)" />
                <path d={svgPaths.p1e46c4c0} fill="url(#mnav_g6)" />
                <path d={svgPaths.p34b15200} fill="url(#mnav_g7)" />
              </g>
              <defs>
                <linearGradient id="mnav_g0" x1="27.8" x2="27.8" y1="8.34" y2="64.14" gradientUnits="userSpaceOnUse"><stop stopColor="#31D2FB"/><stop offset=".6" stopColor="#5361FB"/></linearGradient>
                <linearGradient id="mnav_g1" x1="35.68" x2="8.39" y1="32.03" y2="79.8" gradientUnits="userSpaceOnUse"><stop stopColor="#10FCF2"/><stop offset=".4" stopColor="#31D2FB"/><stop offset="1" stopColor="#5361FB"/></linearGradient>
                <linearGradient id="mnav_g2" x1="89" x2="59.99" y1="-9.92" y2="16.44" gradientUnits="userSpaceOnUse"><stop stopColor="#10FCF2"/><stop offset=".4" stopColor="#31D2FB"/><stop offset="1" stopColor="#5361FB"/></linearGradient>
                <linearGradient id="mnav_g3" x1="78.98" x2="57.02" y1="59.18" y2="32.78" gradientUnits="userSpaceOnUse"><stop stopColor="#10FCF2"/><stop offset=".4" stopColor="#31D2FB"/><stop offset="1" stopColor="#5361FB"/></linearGradient>
                <linearGradient id="mnav_g4" x1="147.51" x2="94.67" y1="40.16" y2="40.16" gradientUnits="userSpaceOnUse"><stop stopColor="#10FCF2"/><stop offset=".4" stopColor="#31D2FB"/><stop offset="1" stopColor="#5361FB"/></linearGradient>
                <linearGradient id="mnav_g5" x1="184.37" x2="184.37" y1="18.46" y2="61.93" gradientUnits="userSpaceOnUse"><stop stopColor="#10FCF2"/><stop offset=".4" stopColor="#31D2FB"/><stop offset="1" stopColor="#5361FB"/></linearGradient>
                <linearGradient id="mnav_g6" x1="94.67" x2="134.37" y1="51.05" y2="51.05" gradientUnits="userSpaceOnUse"><stop stopColor="#10FCF2"/><stop offset=".4" stopColor="#31D2FB"/><stop offset="1" stopColor="#5361FB"/></linearGradient>
                <linearGradient id="mnav_g7" x1="162.86" x2="162.86" y1="61.93" y2="18.46" gradientUnits="userSpaceOnUse"><stop stopColor="#31D2FB"/><stop offset="1" stopColor="#5361FB"/></linearGradient>
                <clipPath id="mnav_clip"><rect width="213" height="62"/></clipPath>
              </defs>
            </svg>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "8px", display: "flex", flexDirection: "column",
              gap: "5px", alignItems: "flex-end",
            }}
          >
            <span style={{
              display: "block", height: "2px", background: "white",
              borderRadius: "2px", transition: "all 0.3s ease",
              width: open ? "22px" : "24px",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }} />
            <span style={{
              display: "block", height: "2px", width: "16px", background: "white",
              borderRadius: "2px", transition: "all 0.3s ease",
              opacity: open ? 0 : 1,
            }} />
            <span style={{
              display: "block", height: "2px", background: "white",
              borderRadius: "2px", transition: "all 0.3s ease",
              width: open ? "22px" : "20px",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }} />
          </button>
        </div>

        {/* Slide-down menu */}
        <div style={{
          overflow: "hidden",
          overflowY: "auto",
          maxHeight: open ? "calc(100svh - 60px)" : "0",
          transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1)",
          borderTop: open ? "1px solid rgba(16,252,242,0.15)" : "none",
        }}>
          <div style={{ padding: "8px 0 24px" }}>
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => handleNavClick(link)}
                  aria-expanded={link.path === "/products" ? productsOpen : undefined}
                  style={{
                    display: "block", width: "100%", textAlign: "left",
                    background: "none", border: "none", cursor: "pointer",
                    padding: "14px 24px", fontFamily: FONT_BOLD, fontWeight: 700,
                    fontSize: "15px", color: pathname === link.path ? "#10fcf2" : "white", letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                </button>
                {link.path === "/products" && productsOpen && (
                  <div style={{ padding: "0 24px 10px 40px" }}>
                    {["Sensors","Electrics","Ignition","Cooling","AC System","Chassis","Exhaust","Engine","Brakes"].map(item => (
                      <button
                        key={item}
                        onClick={() => { close(); setProductsOpen(false); nav(`/products/${item.toLowerCase().replace(/\s+/g,"-")}`); }}
                        style={{ color: "#10fcf2", fontFamily: FONT_BOLD, padding: "8px 0", width: "100%", textAlign: "left" }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ padding: "8px 24px 0" }}>
              <button
                onClick={() => { close(); nav("/contact"); window.scrollTo(0, 0); }}
                style={{
                  width: "100%", padding: "14px 0",
                  backgroundImage: GRAD_BTN, border: "none", borderRadius: "6px",
                  fontFamily: FONT_BOLD, fontWeight: 700, fontSize: "15px",
                  color: "white", cursor: "pointer", textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      {open && (
        <div
          onClick={close}
          style={{
            position: "fixed", inset: 0, zIndex: 199,
            background: "rgba(0,0,0,0.4)", backdropFilter: "blur(2px)",
          }}
        />
      )}
    </>
  );
}
