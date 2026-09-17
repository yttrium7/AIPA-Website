import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Footer } from "@/imports/1Home/index";
import { FooterSection } from "@/components/MobileLayout";
import { useViewport } from "@/hooks/useViewport";
import useContactAnimations from "@/components/useContactAnimations";
import "@/components/contact.css";
const assets = import.meta.glob("../assets/contact/*", { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const asset = (name: string) => assets[`../assets/contact/${name}`];
function Tip({children}:{children:React.ReactNode}) {return <p className="contact-tip"><img src={asset("imgInfoIcon.svg")} alt="" />{children}</p>;}
export default function ContactPage() {
  const viewport = useViewport();
  const navigate = useNavigate();
  const root = useRef<HTMLElement>(null);
  useContactAnimations(root);
  const [draft, setDraft] = useState("");
  return <main ref={root} className="contact-page" data-node-id="96:6938">
    <section className="contact-banner"><img className="contact-banner-base" src={asset("imgAboutBannerPic-web.png")} alt="" /><img className="contact-banner-art" src={asset("imgAboutBannerPic1.png")} alt="" /><div className="contact-banner-cover" /><h1>Contact Us</h1><p>Get in Touch with Our Team</p></section>
    <section className="contact-content">
      <form className="contact-form" onChange={()=>setDraft("")} onSubmit={event=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const subject = `AIPA enquiry from ${data.get("name")}`;
        const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPreferred contact: ${data.get("preferred") || "Not provided"}\n\n${data.get("message")}`;
        setDraft(`mailto:info@ai-parts.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      }}>
        <div className="contact-form-row"><input aria-label="Your name" name="name" autoComplete="name" required maxLength={150} placeholder="Enter your name here*" /><input aria-label="Your email" type="email" name="email" autoComplete="email" required maxLength={254} placeholder="Enter your email here*" /></div>
        <Tip>We will reach you via your email</Tip>
        <input className="contact-preferred" aria-label="Preferred contact way and number" name="preferred" maxLength={250} placeholder="Leave your preferred contact way and number" />
        <Tip>WeChat / WhatsApp / Phone, we highly recommend you fill one of them</Tip>
        <textarea aria-label="Your message" name="message" required maxLength={5000} placeholder="Leave your message here*" />
        <button className="contact-send" type="submit">SEND MESSAGE</button>
        <p className="contact-delivery-note">Send your enquiry through your email app.</p>
        {draft && <div role="status" className="contact-draft"><p>Your enquiry is ready. Open your email app and send the draft to complete your enquiry.</p><a href={draft}>OPEN EMAIL DRAFT</a></div>}
      </form>
      <div className="contact-info"><h2>Feel Free To Ask Us</h2><div className="contact-intro"><p>Whether you need</p><p><strong>Technical support, Product information</strong> or</p><p><strong>Partnership opportunities,</strong></p><p>our team is ready to assist you.</p></div>
        <img className="contact-divider" src={asset("imgDividerHorizontal.svg")} alt="" />
        <div className="contact-details"><a href="mailto:info@ai-parts.eu"><img src={asset("imgIcon.svg")} alt="" />info@ai-parts.eu</a><address><img src={asset("imgIcon1.svg")} alt="" /><div>AIPA Automotive GMBH<br />Lindenweg 24<br />76706<br />Dettenheim</div></address></div>
        <img className="contact-divider" src={asset("imgDividerHorizontal1.svg")} alt="" />
        <div className="contact-social"><div className="contact-qr"><img src={asset("imgQrCode.png")} alt="WhatsApp contact QR code" /></div><div className="contact-social-icons">{[["X","imgGroup.svg","https://x.com"],["Facebook","imgFoundationSocialFacebook.svg","https://www.facebook.com"],["YouTube","imgTypcnSocialYoutube.svg","https://www.youtube.com"],["Instagram","imgTypcnSocialInstagram.svg","https://www.instagram.com"]].map(([name,icon,url])=><a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name}><img src={asset(icon)} alt="" /></a>)}</div></div>
      </div>
    </section>
    {viewport < 1024 ? <FooterSection /> : <div className="contact-footer" onClick={event=>{
      const target=event.target as HTMLElement;
      const routes:Record<string,string>={"footer-link-col-2":"/products","footer-link-col-3":"/about","footer-link-col-4":"/services","aipa-logo":"/"};
      for(const [name,path] of Object.entries(routes)) if(target.closest(`[data-name="${name}"]`)){navigate(path);window.scrollTo(0,0);return;}
      if(target.closest('[data-name="footer-link-col-1"]')) window.location.href="mailto:info@ai-parts.eu";
    }}><Footer /></div>}
  </main>;
}
