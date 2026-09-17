import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import MobileNav from "@/components/MobileNav";
import InteractiveNav from "@/components/InteractiveNav";
import { useViewport } from "@/hooks/useViewport";

const DESKTOP_W = 1440;

export default function RootLayout() {
  const vw = useViewport();
  const navigate = useNavigate();
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const navOffset = window.innerWidth < 1024 ? 60 : 129;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navOffset, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  const contact = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    const sensor = target.closest('[data-name="footer-link-col-2"] p, footer p');
    const productPath: Record<string,string> = { Sensors:"/products/sensors",Electrics:"/products/electrics",Ignition:"/products/ignition",Cooling:"/products/cooling","AC System":"/products/ac-system",Chassis:"/products/chassis",Exhaust:"/products/exhaust",Engine:"/products/engine",Brakes:"/products/brakes",Brake:"/products/brakes","AC system":"/products/ac-system",Chasis:"/products/chassis" };
    const targetProduct = productPath[sensor?.textContent?.trim() ?? ""];
    if (targetProduct) {
      event.preventDefault(); event.stopPropagation();
      navigate(targetProduct); window.scrollTo(0, 0); return;
    }
    if (!target.closest('[data-name="footer"] [data-name="main-btn"], footer button')) return;
    if (!target.textContent?.toUpperCase().includes("CONTACT US")) return;
    event.preventDefault(); event.stopPropagation();
    navigate("/contact"); window.scrollTo(0, 0);
  };
  if ((["/about", "/services", "/contact"].includes(pathname) || pathname.startsWith("/products/")) && vw < 1024) return <div onClickCapture={contact}><MobileNav /><Outlet /></div>;
  const isMobile = vw < 768;
  const zoom = !isMobile ? vw / DESKTOP_W : 1;

  // Mobile: each page renders its own MobileNav
  if (isMobile) return <div onClickCapture={contact}><Outlet /></div>;

  const inner = (
    <div style={{ width: `${DESKTOP_W}px` }}>
      <InteractiveNav />
      <Outlet />
    </div>
  );

  {
    return (
      <div onClickCapture={contact} style={{ width: "100%", overflowX: "clip" }}>
        <div style={{ zoom, transformOrigin: "top left", width: `${DESKTOP_W}px` }}>
          {inner}
        </div>
      </div>
    );
  }

}
