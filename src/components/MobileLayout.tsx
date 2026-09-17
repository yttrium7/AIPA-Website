import React, { useState, useRef, useEffect } from "react";
import MobileNav from "./MobileNav";
import HomeCampaignSlide, { HomeSuppliedBannerSlide } from "./HomeCampaignSlide";
import "./home-campaign.css";
import CarBrandGrid from "./CarBrandGrid";
import imgHomeBanner1 from "@/imports/1Home/abecc2d8edb47629e06299f0921d83d65bcf80df.png";
import imgSectionPic from "@/imports/1Home/16029ab3e501fe0fc0f0098bb4aeb35d46dc4f9e.png";
import imgSectionPic1 from "@/imports/1Home/767937fd687ef41580ee1088bac6fecb29cb9c24.png";
import imgCardPic from "@/imports/1Home/782c8092b45a955bc824aada4794e3f1220d184e.png";
import imgCardPic1 from "@/imports/1Home/b332fd1363383966ca0ffb94fd5cc1d3012afd70.png";
import imgCardPic2 from "@/imports/1Home/7816dd59f9927d5b774c3da06af10bec297beb8e.png";
import imgRectangle97 from "@/imports/1Home/4b0017ac28cd0024ccef83c058a74fe526aa8393.png";
import imgRectangle98 from "@/imports/1Home/212ead606655187cecea3a2cf373be162fde873e.png";
import imgRectangle99 from "@/imports/1Home/30922abcad1b477d90966300592fd8bb57a59f08.png";
import imgRectangle100 from "@/imports/1Home/05ed871b5e2f64321b66a52c8677f16277278c37.png";
import imgPicSensor from "@/imports/1Home/ad8494cf76cd5c891a24e2e56320a8201740fb81.png";
import imgPicBrakes from "@/imports/1Home/761918e9042eb4dea7308c86b7d77daa3ec7ebbb.png";
import imgPicCooling from "@/imports/1Home/5a2cd4e36e177d548300969ca95b85cff7010865.png";
import imgPicIgnition from "@/imports/1Home/293e63dc2d1a405d9d91136735d265475ad0452d.png";
import imgPicElectrics from "@/imports/1Home/d7d7a9e33860ea9922f468299546365385e49781.png";
import imgPicAcSystem from "@/imports/1Home/dbac8ef06c7918e369dee98996107915e192aa6d.png";
import imgPicExhaust from "@/imports/1Home/ff64ce05504b032bc98be805cdac18383d6f5833.png";
import imgPicChasis from "@/imports/1Home/73ab2043fdb198e1d5b96c6bb592cb345236a971.png";
import imgPicEngine from "@/imports/1Home/583dc5cdacb1f11b3c99dcf915b21eeb08ee1ed6.png";
import imgFooterPic from "@/imports/1Home/70e04261d650597c50a1fa5ef9a4105343f2538c.png";
import svgPaths from "@/imports/1Home/svg-vdx3ul2yyf";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const NAVY  = "#00082d";
const CYAN  = "#10fcf2";
const GRAD_BLUE = "linear-gradient(128.37deg, rgb(15,36,115) 0%, rgb(16,252,242) 100%)";
const GRAD_BTN  = "linear-gradient(256.64deg, rgb(83,97,251) 1.65%, rgb(23,202,245) 100%)";
const FONT_BOLD = "'Inter:Bold', sans-serif";
const FONT_MED  = "'Inter:Medium', sans-serif";
const FONT_REG  = "'Inter:Regular', sans-serif";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function SectionLabel({ num, text }: { num: string; text: string }) {
  return (
    <p style={{ fontFamily: FONT_BOLD, fontSize: "13px", color: CYAN,
                letterSpacing: "0.06em", marginBottom: "8px" }}>
      {num} / {text}
    </p>
  );
}

function SectionHeading({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{ fontFamily: FONT_BOLD, fontSize: "24px", lineHeight: 1.25,
                 color: NAVY, margin: 0, ...style }}>
      {children}
    </h2>
  );
}

function OutlineBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 24px", border: `1.5px solid ${NAVY}`,
              borderRadius: "4px", background: "transparent", cursor: "pointer",
              fontFamily: FONT_BOLD, fontSize: "13px", fontWeight: 700,
              color: NAVY, textTransform: "uppercase", letterSpacing: "0.06em",
            }}>
      {children}
    </button>
  );
}

function GradBtn({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button onClick={onClick}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "14px 28px", borderRadius: "4px", border: "none",
              backgroundImage: GRAD_BTN, cursor: "pointer",
              fontFamily: FONT_BOLD, fontSize: "14px", fontWeight: 700,
              color: "white", textTransform: "uppercase", letterSpacing: "0.06em",
            }}>
      {children}
    </button>
  );
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── Sections ────────────────────────────────────────────────────────────────

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide(slide => (slide + 1) % 3), 4500);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <section id="hero" style={{ position: "relative", height: "calc(100svh - 60px)", minHeight: "460px",
                                 display: "flex", flexDirection: "column", justifyContent: "center",
                                 overflow: "hidden" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <img src={imgHomeBanner1} alt=""
             style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center top" }} />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0,
                      background: "linear-gradient(118.5deg, rgb(15,36,115) 0%, rgb(16,252,242) 100%)",
                      mixBlendMode: "soft-light" }} />
        <div style={{ position: "absolute", inset: 0,
                      background: "linear-gradient(to bottom, rgba(0,8,45,0.55) 0%, rgba(0,8,45,0.3) 60%, rgba(0,8,45,0.6) 100%)" }} />
      </div>

      {activeSlide === 1 ? <HomeSuppliedBannerSlide mobile /> : activeSlide === 2 ? <HomeCampaignSlide mobile /> : null}

      {/* Content */}
      <div style={{ position: "relative", padding: "80px 24px 60px", textAlign: "center", color: "white",
                    opacity: activeSlide === 0 ? 1 : 0, pointerEvents: activeSlide === 0 ? "auto" : "none",
                    transition: "opacity .35s ease" }}>
        <h1 style={{ fontFamily: FONT_BOLD, fontSize: "clamp(36px, 10vw, 64px)",
                     lineHeight: 1.1, margin: "0 0 20px", fontWeight: 700 }}>
          Auto-Intelligence<br />Driven
        </h1>
        <p style={{ fontFamily: FONT_MED, fontSize: "clamp(14px, 4vw, 18px)",
                    lineHeight: 1.5, margin: "0 0 36px", opacity: 0.92 }}>
          Trusted by Professionals.<br />Engineered for Excellence.
        </p>
        <GradBtn onClick={() => scrollToId("footer")}>CONTACT US</GradBtn>
      </div>
      <div style={{ position:"absolute", left:"50%", bottom:"24px", translate:"-50% 0", display:"flex", gap:"6px", zIndex:2 }}>
        {[0,1,2].map(i => <button key={i} aria-label={`Slide ${i+1}`} onClick={() => setActiveSlide(i)} style={{ width:"42px", height:"4px", padding:0, border:0, borderRadius:"2px", background:i===activeSlide?"white":"rgba(0,8,45,.45)" }} />)}
      </div>
    </section>
  );
}

function FeatureStats() {
  const stats = [
    { num: "25+",          label: "Years of Experience" },
    { num: "16",           label: "Countries Covered" },
    { num: "Global",       label: "Network Reach" },
    { num: "ISO-Certified",label: "Quality Standards" },
    { num: "TecDoc",       label: "Data Compatible" },
  ];
  return (
    <section style={{
      padding: "48px 20px", position: "relative", overflow: "hidden",
      backgroundColor: "white",
    }}>
      <svg
        aria-hidden="true"
        viewBox="0 0 1126 329"
        preserveAspectRatio="xMidYMid meet"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      >
        <g>
          <path d={svgPaths.p150fd00} fill="url(#mobile_feature_g0)" />
          <path d={svgPaths.p2beb2000} fill="url(#mobile_feature_g1)" />
          <path d={svgPaths.p17f2b700} fill="url(#mobile_feature_g2)" />
          <path d={svgPaths.pd13c6f0} fill="url(#mobile_feature_g3)" />
          <path d={svgPaths.p5b9dff0} fill="url(#mobile_feature_g4)" />
          <path d={svgPaths.p1bf32c00} fill="url(#mobile_feature_g5)" />
          <path d={svgPaths.p2e14d600} fill="url(#mobile_feature_g6)" />
          <path d={svgPaths.p2a576eb0} fill="url(#mobile_feature_g7)" />
        </g>
        <defs>
          {Array.from({ length: 8 }).map((_, i) => (
            <linearGradient key={i} id={`mobile_feature_g${i}`} x1="514.936" x2="537.268" y1="329" y2="1.52295" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10FCF2" stopOpacity="0" />
              <stop offset="1" stopColor="#0F2473" stopOpacity="0.15" />
            </linearGradient>
          ))}
        </defs>
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 16px",
                    maxWidth: "400px", margin: "0 auto", position: "relative" }}>
        {stats.map(({ num, label }, i) => (
          <div key={i} style={{
            textAlign: "center", padding: "16px 8px",
            gridColumn: i === 4 ? "1 / -1" : undefined,
          }}>
            <p style={{ fontFamily: FONT_BOLD, fontSize: "clamp(22px, 6vw, 32px)",
                        color: NAVY, margin: "0 0 4px", lineHeight: 1 }}>
              {num}
            </p>
            <p style={{ fontFamily: FONT_REG, fontSize: "12px", color: "#555",
                        margin: 0, lineHeight: 1.4 }}>
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section id="who-we-are" style={{ background: "white", paddingBottom: "56px" }}>
      {/* Image */}
      <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
        <img src={imgSectionPic1} alt="Who We Are"
             style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      {/* Text */}
      <div style={{ padding: "36px 24px 0" }}>
        <SectionLabel num="01" text="Who We Are" />
        <SectionHeading style={{ marginBottom: "16px" }}>
          Driven By Precision.<br />Powered By Technology.
        </SectionHeading>
        <p style={{ fontFamily: FONT_REG, fontSize: "14px", color: "#444",
                    lineHeight: 1.7, margin: "0 0 28px" }}>
          AIPA is a technology-driven automotive parts supplier connecting global manufacturers
          with professional distributors across Europe and beyond. We combine AI-powered sourcing
          with rigorous quality management to deliver components that meet OE specifications.
        </p>
        <OutlineBtn onClick={() => scrollToId("vehicles")}>
          VIEW MORE
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </OutlineBtn>
      </div>
    </section>
  );
}

// Brand icon SVGs matching the desktop ProfilePic tiles
function BrandTile({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      aspectRatio: "1",
      background: "rgba(255,255,255,0.2)",
      boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "16%",
    }}>
      <svg width="100%" height="100%" viewBox="6 6 68 68" fill="none" preserveAspectRatio="xMidYMid meet">
        {children}
      </svg>
    </div>
  );
}

function VehiclesSection() {
  return (
    <section id="vehicles" style={{
      backgroundImage: GRAD_BLUE,
      padding: "48px 24px",
    }}>
      {/* Section image */}
      <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "32px",
                    aspectRatio: "16/9" }}>
        <img src={imgSectionPic} alt="Vehicles we serve"
             style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <SectionLabel num="02" text="Vehicles We Serve" />
      <SectionHeading style={{ color: "white", marginBottom: "12px" }}>
        Parts That Fit Every Make &amp; Model
      </SectionHeading>
      <p style={{ fontFamily: FONT_REG, fontSize: "14px", color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7, marginBottom: "32px" }}>
        Our catalog covers a comprehensive range of passenger cars, commercial vehicles,
        and electric models from leading global manufacturers.
      </p>
      <CarBrandGrid mobile />
    </section>
  );
}

function WhatWeOfferSection() {
  const cards = [
    {
      img: imgCardPic,
      title: "Product Excellence",
      text: "Precision-engineered, OE-compatible replacement parts manufactured to the highest standards of reliability and performance.",
    },
    {
      img: imgCardPic1,
      title: "Supply Chain",
      text: "Efficient logistics, real-time tracking, and regional warehousing ensure rapid delivery to Europe and North America.",
    },
    {
      img: imgCardPic2,
      title: "Technical Support",
      text: "Comprehensive warranty programs, installation guidance, and VIN-specific application data for professional distributors and workshops.",
    },
  ];
  return (
    <section id="what-we-offer" style={{ background: "#f8f9fb", padding: "56px 20px" }}>
      <div style={{ marginBottom: "32px" }}>
        <SectionLabel num="03" text="What We Offer" />
        <SectionHeading>Three Pillars of Our Service</SectionHeading>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {cards.map(({ img, title, text }) => (
          <div
            key={title}
            role="link"
            tabIndex={0}
            aria-label={`${title} — view Service & Support`}
            onClick={() => { window.location.href = "/services"; }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                window.location.href = "/services";
              }
            }}
            style={{
            background: "white", borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)", overflow: "hidden",
            cursor: "pointer",
          }}>
            <div style={{ height: "180px", overflow: "hidden" }}>
              <img src={img} alt={title}
                   style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ padding: "20px" }}>
              <p style={{ fontFamily: FONT_BOLD, fontSize: "15px", color: NAVY,
                          margin: "0 0 8px" }}>
                {title}
              </p>
              <p style={{ fontFamily: FONT_REG, fontSize: "13px", color: "#666",
                          lineHeight: 1.65, margin: 0 }}>
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AppScenarioSection() {
  const scenarios = [
    { img: imgRectangle97, title: "Sensors",  text: "Precision sensors deliver accurate data and rapid response for reliable vehicle management." },
    { img: imgRectangle98, title: "Electrics", text: "Intelligent electrical components ensure stable power management and seamless integration." },
    { img: imgRectangle99, title: "Cooling",  text: "High-efficiency cooling components maintain optimal operating temperatures." },
    { img: imgRectangle100,title: "Climate",  text: "Advanced climate components provide precise temperature control and dependable cabin comfort." },
  ];
  return (
    <section id="app-scenario" style={{ background: "white", padding: "56px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <SectionLabel num="04" text="Application Scenario" />
        <SectionHeading style={{ fontSize: "22px" }}>
          Intelligent Solutions For Every Vehicle System
        </SectionHeading>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        {scenarios.map(({ img, title, text }) => (
          <div key={title} style={{
            borderRadius: "16px", overflow: "hidden", position: "relative",
            aspectRatio: "3/4",
          }}>
            <img src={img} alt={title}
                 style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                          objectFit: "cover" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(15,36,115,0.92) 0%, rgba(15,36,115,0.2) 60%, transparent 100%)",
            }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 14px" }}>
              <p style={{ fontFamily: FONT_MED, fontSize: "14px", color: "white",
                          margin: "0 0 6px" }}>
                {title}
              </p>
              <p style={{ fontFamily: FONT_REG, fontSize: "11px", color: "rgba(255,255,255,0.85)",
                          margin: 0, lineHeight: 1.5 }}>
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const GRAD_CARD_DEFAULT = "linear-gradient(191.86deg, rgb(255,255,255) 0%, rgb(229,229,229) 98.45%)";
const GRAD_CARD_HOVER   = "linear-gradient(191.86deg, rgb(15,36,115) 0%, rgb(16,252,242) 100%)";

function ProductCard({ img, name, href }: { img: string; name: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activate = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setHovered(true);
  };
  const deactivate = () => {
    timerRef.current = setTimeout(() => setHovered(false), 80);
  };

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`View ${name} products`}
      onClick={() => { window.location.href = href; }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          window.location.href = href;
        }
      }}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onTouchStart={activate}
      onTouchEnd={deactivate}
      style={{
        borderRadius: "14px", overflow: "hidden",
        backgroundImage: hovered ? GRAD_CARD_HOVER : GRAD_CARD_DEFAULT,
        boxShadow: hovered
          ? "0 10px 28px rgba(15,36,115,0.4)"
          : "0 2px 12px rgba(0,0,0,0.15)",
        position: "relative", aspectRatio: "1",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "background-image 0s, box-shadow 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        cursor: "pointer",
      }}
    >
      <img src={img} alt={name}
           style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                    objectFit: "cover", mixBlendMode: "multiply",
                    opacity: hovered ? 0.75 : 0.55,
                    transition: "opacity 0.35s ease" }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "10px 8px 10px",
        background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)",
      }}>
        <p style={{ fontFamily: FONT_MED, fontSize: "11px",
                    color: "white",
                    margin: 0, textAlign: "center",
                    transition: "color 0.35s ease" }}>
          {name}
        </p>
      </div>
    </div>
  );
}

function ProductsSection() {
  const products = [
    { img: imgPicSensor,    name: "Sensors",   href: "/products/sensors" },
    { img: imgPicBrakes,    name: "Brakes",    href: "/products/brakes" },
    { img: imgPicCooling,   name: "Cooling",   href: "/products/cooling" },
    { img: imgPicIgnition,  name: "Ignition",  href: "/products/ignition" },
    { img: imgPicElectrics, name: "Electrics", href: "/products/electrics" },
    { img: imgPicAcSystem,  name: "AC System", href: "/products/ac-system" },
    { img: imgPicExhaust,   name: "Exhaust",   href: "/products/exhaust" },
    { img: imgPicChasis,    name: "Chassis",   href: "/products/chassis" },
    { img: imgPicEngine,    name: "Engine",    href: "/products/engine" },
  ];
  return (
    <section id="products" style={{
      background: NAVY, padding: "56px 20px",
    }}>
      <div style={{ textAlign: "center", marginBottom: "36px" }}>
        <SectionLabel num="05" text="Products" />
        <SectionHeading style={{ color: "white", fontSize: "22px" }}>
          Our Product Categories
        </SectionHeading>
      </div>
      <div style={{
        maxWidth: "560px", margin: "0 auto 28px", padding: "22px 20px",
        borderRadius: "12px 12px 42px 12px", background: "rgba(255,255,255,.96)",
        boxShadow: "0 10px 24px rgba(0,0,0,.2)", color: NAVY,
      }}>
        <p style={{ fontFamily: FONT_REG, fontSize: "12px", lineHeight: 1.45, margin: "0 0 18px" }}>
          AIPA specializes in three core product categories where precision, reliability, and advanced technology are paramount. Every component undergoes rigorous testing and quality control to ensure optimal performance and reliability.
        </p>
        <button
          onClick={() => { window.location.href = "/services#catalogues"; }}
          style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            width: "160px", padding: "11px 14px", border: 0, borderRadius: "24px",
            background: NAVY, color: "white", fontFamily: FONT_BOLD, fontSize: "12px",
            cursor: "pointer", textTransform: "uppercase",
          }}
        >
          View More <span aria-hidden="true" style={{ fontSize: "16px" }}>↗</span>
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px",
                    marginBottom: "32px" }}>
        {products.map(({ img, name, href }) => (
          <ProductCard key={name} img={img} name={name} href={href} />
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <OutlineBtn onClick={() => window.location.href = "mailto:info@ai-parts.eu"}>
          VIEW ALL PRODUCTS
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </OutlineBtn>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer id="footer" style={{
      backgroundImage: GRAD_BLUE, padding: "48px 24px 36px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative overlay */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <img src={imgFooterPic} alt=""
             style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center bottom",
                      opacity: 0.15, mixBlendMode: "multiply" }} />
      </div>

      <div style={{ position: "relative" }}>
        {/* Logo */}
        <svg width="107" height="31" viewBox="0 0 213 62" fill="none" style={{ marginBottom: "24px" }}>
          <g clipPath="url(#foot_clip)">
            <path d={svgPaths.p9f9e900}  fill="url(#foot_g0)" />
            <path d={svgPaths.p3829cf80} fill="url(#foot_g1)" />
            <path d={svgPaths.p1c978100} fill="url(#foot_g2)" />
            <path d={svgPaths.p31374c00} fill="url(#foot_g3)" />
            <path d={svgPaths.p154e6e00} fill="url(#foot_g4)" />
            <path d={svgPaths.p25632100} fill="url(#foot_g5)" />
            <path d={svgPaths.p1e46c4c0} fill="url(#foot_g6)" />
            <path d={svgPaths.p34b15200} fill="url(#foot_g7)" />
          </g>
          <defs>
            <linearGradient id="foot_g0" x1="27.8" x2="27.8" y1="8.34" y2="64.14" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity=".8"/></linearGradient>
            <linearGradient id="foot_g1" x1="35.68" x2="8.39" y1="32.03" y2="79.8" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity=".8"/></linearGradient>
            <linearGradient id="foot_g2" x1="89" x2="59.99" y1="-9.92" y2="16.44" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity=".8"/></linearGradient>
            <linearGradient id="foot_g3" x1="78.98" x2="57.02" y1="59.18" y2="32.78" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity=".8"/></linearGradient>
            <linearGradient id="foot_g4" x1="147.51" x2="94.67" y1="40.16" y2="40.16" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity=".8"/></linearGradient>
            <linearGradient id="foot_g5" x1="184.37" x2="184.37" y1="18.46" y2="61.93" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity=".8"/></linearGradient>
            <linearGradient id="foot_g6" x1="94.67" x2="134.37" y1="51.05" y2="51.05" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity=".8"/></linearGradient>
            <linearGradient id="foot_g7" x1="162.86" x2="162.86" y1="61.93" y2="18.46" gradientUnits="userSpaceOnUse"><stop stopColor="white"/><stop offset="1" stopColor="white" stopOpacity=".8"/></linearGradient>
            <clipPath id="foot_clip"><rect width="213" height="62"/></clipPath>
          </defs>
        </svg>

        {/* Contact info */}
        <p style={{ fontFamily: FONT_REG, fontSize: "13px", color: "rgba(255,255,255,0.75)",
                    marginBottom: "6px" }}>
          NEED HELP? CONTACT US NOW!
        </p>
        <a href="mailto:info@ai-parts.eu"
           style={{ fontFamily: FONT_BOLD, fontSize: "15px", color: "white",
                    textDecoration: "none", display: "block", marginBottom: "28px" }}>
          info@ai-parts.eu
        </a>

        {/* Links grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 16px",
                      marginBottom: "36px" }}>
          {[
            { heading: "SERVICE & SUPPORT", links: ["What We Offer", "Quality Management", "Process Controls", "Continuous Improvement", "Catalogues"] },
            { heading: "ABOUT US", links: ["Company Profile", "Core Commitments", "Our Expertise", "Mission & Vision"] },
            { heading: "PRODUCTS", links: ["Cooling", "Engine", "Sensors", "Brakes", "Exhaust", "AC System", "Ignition", "Electrics", "Chassis"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p style={{ fontFamily: FONT_BOLD, fontSize: "11px", color: "white",
                          letterSpacing: "0.08em", marginBottom: "10px" }}>
                {heading}
              </p>
              {links.map((link) => (
                <p key={link} style={{ fontFamily: FONT_MED, fontSize: "11px",
                                       color: "rgba(255,255,255,0.7)", marginBottom: "6px",
                                       cursor: "pointer", textTransform: "capitalize" }}>
                  {link}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <GradBtn onClick={() => window.location.href = "mailto:info@ai-parts.eu"}>
          CONTACT US NOW
        </GradBtn>

        <div style={{ marginTop: "36px", paddingTop: "20px",
                      borderTop: "1px solid rgba(255,255,255,0.2)" }}>
          <p style={{ fontFamily: FONT_REG, fontSize: "11px",
                      color: "rgba(255,255,255,0.5)", margin: 0 }}>
            © 2024 AIPA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Root mobile layout ───────────────────────────────────────────────────────
export default function MobileLayout() {
  return (
    <div style={{ width: "100%", overflowX: "hidden", background: "white" }}>
      <MobileNav />
      {/* Push content below fixed nav */}
      <div style={{ paddingTop: "60px" }}>
        <HeroSection />
        <FeatureStats />
        <WhoWeAreSection />
        <VehiclesSection />
        <WhatWeOfferSection />
        <AppScenarioSection />
        <ProductsSection />
        <FooterSection />
      </div>
    </div>
  );
}
