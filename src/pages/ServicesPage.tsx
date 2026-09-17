import { Footer } from "@/imports/1Home/index";
import { useRef } from "react";
import useServiceAnimations from "@/components/useServiceAnimations";
import { FooterSection } from "@/components/MobileLayout";
import { useViewport } from "@/hooks/useViewport";
import { useNavigate } from "react-router";
import "@/components/services.css";

const assets = import.meta.glob("../assets/services/*", { eager: true, query: "?url", import: "default" }) as Record<string, string>;
const asset = (name: string) => assets[`../assets/services/${name}`];
const offers = [
  ["Focused Excellence", "Specialization in three core categories where precision and reliability are paramount"],
  ["Manufacturing Mastery", "Advanced production facilities with ISO-certified processes"],
  ["Quality First", "Multi-stage testing and validation ensuring every part performs"],
  ["Data Accuracy", "TecDoc supplier integration for catalog precision"],
  ["Global Reach", "Distribution infrastructure serving Europe, North America, and beyond"],
  ["Innovation Commitment", "Continuous R&D in emerging technologies including NEV systems"],
];
const standards = [
  ["crown.svg", "ISO 9001", "Comprehensive quality management system with documented procedures, process controls, and continuous improvement protocols"],
  ["certificate.svg", "IATF 16949", "Automotive industry quality management standard focusing on defect prevention, variation reduction, and waste minimization"],
  ["qualify.svg", "ISO 14001", "Environmental management system ensuring eco-responsible manufacturing"],
  ["diamond.svg", "6S Workplace Management", "Systematic organization ensuring consistency, efficiency, and error prevention (Sort, Set in Order, Shine, Standardize, Sustain, Safety)"],
];
const processes = ["Statistical Process Control (SPC) with real-time monitoring", "In-process inspection at critical manufacturing stages", "Full traceability from raw materials to finished goods", "Documented procedures and work instructions", "Regular internal audits and management reviews", "Corrective and preventive action (CAPA) systems"];
const improvements = ["Customer feedback analysis and integration", "Field performance monitoring and analysis", "FMEA (Failure Mode and Effects Analysis) on critical components", "Regular equipment calibration and validation", "Supplier quality development programs", "Employee training and certification programs", "Industry benchmarking and best practice adoption"];
function Heading({ label, title }: { label: string; title: string }) {
  return <header className="service-heading"><p>{label}</p><h2>{title}</h2></header>;
}
export default function ServicesPage() {
  const viewport = useViewport();
  const root = useRef<HTMLElement>(null);
  useServiceAnimations(root);
  const navigate = useNavigate();
  return <>

    <main ref={root} className="services-page" data-node-id="95:3597">
      <section className="service-banner"><img src={asset("banner-web.png")} alt="" /><div className="service-banner-cover" /><h1>Service &amp; Support</h1><p>Uncompromising Standards.<br />Rigorous Validation. Premium Performance.</p></section>
      <section className="service-offers" id="what-we-offer">
        <Heading label="01 / What We Offer" title="Premium In All Parts" />
        <div className="service-offer-grid">{offers.map(([title, description], i) => <article key={title}><div className="service-number"><img src={asset("circle.svg")} alt="" /><span>{String(i + 1).padStart(2, "0")}</span></div><img className="service-connector" src={asset("connector.svg")} alt="" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      </section>
      <section className="service-quality" id="quality-management">
        <Heading label="02 / Quality Management System" title="Commitment Embedded In Every Stage" />
        <div className="service-standard-grid">{standards.map(([icon, title, description]) => <article key={title}><div className="service-icon"><img src={asset(icon)} alt="" /></div><h3>{title}</h3><p>{description}</p></article>)}</div>
        <img className="service-car" src={asset("car.png")} alt="Vehicle engineering and quality inspection" />
      </section>
      <section className="service-process" id="process-controls">
        <img className="service-process-art" src={asset("process.png")} alt="Isometric manufacturing and inspection process" />
        <div className="service-process-panel"><h2>Process Controls</h2><ul>{processes.map(text => <li key={text}><img src={asset("tick.svg")} alt="" /><span>{text}</span></li>)}</ul></div>
      </section>
      <section className="service-improvement" id="continuous-improvement">
        <Heading label="03 / Continuous Improvement" title="Driven By Excellence" />
        <div className="service-improvement-copy"><p>At AIPA, quality is not a specification—it's a commitment embedded in every stage of our process.</p><p>From design engineering through manufacturing to final validation, we maintain strict protocols that ensure every component delivers OE-level performance, precision fitment, and long-term reliability.</p></div>
        <div className="service-improvement-cards">{improvements.map((text, i) => <article key={text} className={`service-improve-${i}`}><img src={asset(`improve${i}.svg`)} alt="" /><p>{text}</p></article>)}</div>
      </section>
      <section className="service-catalogues" id="catalogues">
        <img className="service-catalogues-image" src={asset("catalogues-support.png")} alt="Automotive technician providing diagnostic and workshop support" />
        <div className="service-catalogues-shade" />
        <div className="service-catalogues-panel">
          <p>04 / Digital Parts Access</p>
          <h2>Precision Data.<br />Expert Support.</h2>
          <p className="service-catalogues-copy">Access accurate application data and an extensive aftermarket parts catalogue, built to help professional distributors and workshops identify the right solution with confidence.</p>
          <a href="" onClick={event => event.preventDefault()} aria-label="Open AIPA TecDoc catalogue when available">
            Explore Catalogues <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
      {viewport < 1024 ? <FooterSection /> : <div className="service-footer" onClick={event => {
        const target = event.target as HTMLElement;
        if (target.closest('[data-name="footer-link-col-4"]')) {
          const i = ["What We Offer", "Quality Management System", "Process Controls", "Continuous Improvement", "Catalogues"].indexOf(target.textContent?.trim() ?? "");
          if (i >= 0) document.getElementById(["what-we-offer", "quality-management", "process-controls", "continuous-improvement", "catalogues"][i])?.scrollIntoView({behavior: "smooth"});
        } else if (target.closest('[data-name="footer-link-col-3"]')) {navigate("/about");window.scrollTo(0,0);}
        else if (target.closest('[data-name="footer-link-col-2"]')) {navigate("/products");window.scrollTo(0,0);}
        else if (target.closest('[data-name="main-btn"], [data-name="footer-link-col-1"]')) window.location.href="mailto:info@ai-parts.eu";
        else if (target.closest('[data-name="aipa-logo"]')) {navigate("/");window.scrollTo(0,0);}
      }}><Footer /></div>}
    </main>
  </>;
}
