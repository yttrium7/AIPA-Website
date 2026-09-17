// Shared placeholder shell used by stub pages while content is being built.
const nav = (path: string) => {
  window.history.pushState(null, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
import MobileNav from "@/components/MobileNav";
import { useViewport } from "@/hooks/useViewport";

const GRAD_BLUE = "linear-gradient(128.37deg, rgb(15,36,115) 0%, rgb(16,252,242) 100%)";
const FONT_BOLD = "'Inter:Bold', sans-serif";
const FONT_REG  = "'Inter:Regular', sans-serif";

interface Props {
  title: string;
  subtitle?: string;
}

export default function PlaceholderPage({ title, subtitle }: Props) {
  const vw = useViewport();
  const isMobile = vw < 768;

  const content = (
    <div style={{
      minHeight: isMobile ? "calc(100svh - 60px)" : "calc(100vh - 129px)",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      backgroundImage: GRAD_BLUE, padding: "48px 24px", textAlign: "center",
    }}>
      <p style={{ fontFamily: FONT_BOLD, fontSize: "12px", color: "rgba(16,252,242,0.9)",
                  letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
        Coming Soon
      </p>
      <h1 style={{ fontFamily: FONT_BOLD, fontSize: isMobile ? "32px" : "52px",
                   color: "white", lineHeight: 1.1, margin: "0 0 20px" }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontFamily: FONT_REG, fontSize: "16px", color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.6, maxWidth: "480px", margin: "0 0 40px" }}>
          {subtitle}
        </p>
      )}
      <button
        onClick={() => nav("/")}
        style={{
          padding: "14px 32px", border: "1.5px solid rgba(255,255,255,0.6)",
          borderRadius: "4px", background: "transparent", cursor: "pointer",
          fontFamily: FONT_BOLD, fontSize: "13px", color: "white",
          textTransform: "uppercase", letterSpacing: "0.06em",
          transition: "border-color 0.2s, opacity 0.2s",
        }}
      >
        ← Back to Home
      </button>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <MobileNav />
        <div style={{ paddingTop: "60px" }}>{content}</div>
      </>
    );
  }

  return content;
}
