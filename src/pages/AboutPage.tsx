import { FooterSection as MobileFooter } from "@/components/MobileLayout";
import { useViewport } from "@/hooks/useViewport";
import { useRef } from "react";
import useAboutAnimations from "@/components/about/useAboutAnimations";
import "@/components/about/about-interactions.css";
import "@/components/about/about-responsive.css";
import { useNavigate } from "react-router";
import { Footer } from "@/imports/1Home/index";
import imgAboutBannerPic from "@/assets/about/imgAboutBannerPic.png";
import imgAboutUsPic01 from "@/assets/about/imgAboutUsPic01-web.jpg";
import imgAboutUsPic02 from "@/assets/about/imgAboutUsPic02.png";
import imgBg from "@/assets/about/imgBg.png";
import imgBg1 from "@/assets/about/imgBg1.png";
import imgIcon01 from "@/assets/about/imgIcon01.svg";
import imgIcon02 from "@/assets/about/imgIcon02.svg";
import imgIcon03 from "@/assets/about/imgIcon03.svg";
import imgIcon04 from "@/assets/about/imgIcon04.svg";
import imgDividerVertical from "@/assets/about/imgDividerVertical.svg";

export default function AboutPage() {
  const root = useRef<HTMLDivElement>(null);
  const viewport = useViewport();
  useAboutAnimations(root);
  const navigate = useNavigate();
  const handleFooterClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('[data-name="footer"]')) return;
    const socialLinks: Record<string, string> = {
      "typcn:social-youtube": "https://www.youtube.com",
      "typcn:social-instagram": "https://www.instagram.com",
      "foundation:social-facebook": "https://www.facebook.com",
      "mingcute:social-x-fill": "https://x.com",
    };
    for (const [name, url] of Object.entries(socialLinks)) {
      if (target.closest(`[data-name="${name}"]`)) {
        window.open(url, "_blank", "noopener,noreferrer"); return;
      }
    }
    if (target.closest('[data-name="main-btn"], [data-name="footer-link-col-1"]')) {
      window.location.href = "mailto:info@ai-parts.eu";
    } else if (target.closest('[data-name="footer-link-col-3"]')) {
      const sections = ["Company Profile", "Core Commitments", "Our Expertise", "Mission & Vision"];
      const tops = [597, 1141, 1721, 2257];
      const index = sections.indexOf(target.textContent?.trim() ?? "");
      if (index >= 0) {
        const section = root.current?.querySelector(`[data-name="aboutUs-section${index + 1}"]`);
        const top = window.innerWidth < 1024 && section
          ? section.getBoundingClientRect().top + window.scrollY - 76
          : (tops[index] - 129) * (window.innerWidth / 1440);
        window.scrollTo({top, behavior: "smooth"});
      }
    } else if (target.closest('[data-name="footer-link-col-2"]')) {
      navigate("/products"); window.scrollTo(0, 0);
    } else if (target.closest('[data-name="footer-link-col-4"]')) {
      navigate("/services"); window.scrollTo(0, 0);
    } else if (target.closest('[data-name="aipa-logo"]')) {
      navigate("/"); window.scrollTo(0, 0);
    }
  };
  return (
    <div ref={root} className="bg-white relative w-[1440px]" style={{ height: 3536, marginTop: -129, overflowX: "clip" }} data-node-id="93:1973" data-name="3-ABOUT US" onClick={handleFooterClick}>
      <div className="absolute contents left-0 top-0" data-node-id="238:2508" data-name="banner-aboutUs">
        <div className="absolute h-[500px] left-0 top-0 w-[1440px]" data-node-id="95:3499" data-name="about-banner-pic">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAboutBannerPic} />
        </div>
        <div className="absolute h-[500px] left-0 opacity-70 top-0 w-[1440px]" data-node-id="95:3500" style={{ backgroundImage: "linear-gradient(130.27020577352522deg, rgb(15, 36, 115) 0%, rgb(16, 252, 242) 100%)" }} data-name="home-banner-cover" />
        <div className="[word-break:break-word] absolute contents font-['Inter:Bold',sans-serif] font-bold left-[450px] not-italic text-[color:var(--white,white)] text-center top-[229px]" data-node-id="95:3501" data-name="banner-title">
          <p className="-translate-x-1/2 absolute capitalize leading-[normal] left-[720px] text-[60px] top-[229px] whitespace-nowrap" data-node-id="95:3502">
            about us
          </p>
          <div className="-translate-x-1/2 absolute leading-[0] left-[720px] text-[18px] top-[322px] w-[540px] whitespace-pre-wrap" data-node-id="95:3503">
            <p className="leading-[normal] mb-0">{`Trusted by Professionals. `}</p>
            <p className="leading-[normal]">Engineered for Excellence.</p>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[248px] top-[597px]" data-node-id="238:2509" data-name="aboutUs-section1">
        <div className="absolute contents left-[248px] top-[597px]" data-node-id="95:2104" data-name="company-profile">
          <div id="company-profile" className="absolute bg-[var(--white,white)] h-[211px] left-[248px] top-[597px] w-[529.926px]" data-node-id="95:2105" data-name="text-bg" />
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[280.15px] not-italic text-[20px] text-[color:var(--blue\/1,#00082d)] top-[618px] w-[210.519px]" data-node-id="95:2106">
            <span className="leading-[normal] text-[#3163ff]">01 /</span>
            <span className="leading-[normal]">{` Company Profile`}</span>
          </p>
          <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[280.15px] not-italic text-[12px] text-[color:var(--text,#6c6c6c)] top-[672px] w-[466.667px] whitespace-pre-wrap" data-node-id="95:2107">
            <p className="leading-[normal] mb-0">{`AIPA represents a new standard in high-performance automotive aftermarket solutions, trusted by professional distributors and workshops across Europe and North America. `}</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal]">With a focus on precision engineering, OE-level compatibility, and long-term durability, AIPA has earned a reputation as a premium alternative to original equipment parts.</p>
          </div>
        </div>
        <div className="absolute h-[144px] left-[248px] shadow-[4px_4px_8px_2px_rgba(0,0,0,0.25)] top-[836px] w-[532px]" data-node-id="95:2108" data-name="about-us-pic-01">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <img alt="" className="absolute max-w-none object-cover size-full" src={imgAboutUsPic01} />
            <div className="absolute bg-gradient-to-r from-[rgba(16,252,242,0.3)] inset-0 to-[rgba(15,36,115,0.3)]" />
          </div>
        </div>
        <div className="absolute left-[808px] shadow-[4px_4px_8px_2px_rgba(0,0,0,0.25)] size-[383px] top-[597px]" data-node-id="95:2109" data-name="about-us-pic-02">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAboutUsPic02} />
        </div>
      </div>
      <div className="absolute contents left-[242px] top-[1141px]" data-node-id="238:2510" data-name="aboutUs-section2">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-175px)] not-italic text-[30px] text-[color:var(--blue\/1,#00082d)] top-[1141px] whitespace-nowrap" data-node-id="95:3512">
          <span className="leading-[normal] text-[#3163ff]">02 /</span>
          <span className="leading-[normal]">{` Core Commitments`}</span>
        </p>
        <div className="absolute contents left-[242px] top-[1225px]" data-node-id="95:2123" data-name="commitment-card-01">
          <div className="absolute bg-[var(--white,white)] h-[335px] left-[242px] shadow-[4px_4px_8px_2px_rgba(0,0,0,0.25)] top-[1225px] w-[227px]" data-node-id="95:2124" data-name="text-bg" />
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[260px] not-italic text-[16px] text-[color:var(--text,#6c6c6c)] top-[1241px] w-[89px]" data-node-id="95:2125">
            Customer-Centric
          </p>
          <div className="absolute left-[411px] size-[38.82px] top-[1241px]" data-node-id="95:2126" data-name="icon-01">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon01} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] left-[257px] not-italic text-[12px] text-[color:var(--text,#6c6c6c)] top-[1416px] w-[193px]" data-node-id="114:590" data-name="card-text">
            <ul className="block relative shrink-0 w-full" data-node-id="95:2129">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Digital tools for compatibility</span>
              </li>
            </ul>
            <ul className="block relative shrink-0 w-full" data-node-id="114:588">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Proactive technical support</span>
              </li>
            </ul>
            <ul className="block relative shrink-0 w-full" data-node-id="114:589">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Market-driven product expansion</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute contents left-[482px] top-[1225px]" data-node-id="95:2130" data-name="commitment-card-02">
          <div className="absolute h-[335px] left-[482px] top-[1225px] w-[227px]" data-node-id="95:2131" style={{ backgroundImage: "linear-gradient(214.5345829327015deg, rgb(15, 36, 115) 0%, rgb(16, 252, 242) 100%)" }} data-name="text-bg" />
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[499px] not-italic text-[16px] text-[color:var(--white,white)] top-[1241px] w-[100px]" data-node-id="95:2132">
            Partnership Excellence
          </p>
          <div className="absolute left-[654px] size-[38.82px] top-[1241px]" data-node-id="95:2134" data-name="icon-02">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon02} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] left-[497px] not-italic text-[12px] text-[color:var(--white,white)] top-[1416px] w-[193px]" data-node-id="114:591" data-name="card-text">
            <ul className="block relative shrink-0 w-full" data-node-id="114:592">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Transparent long-term relationships</span>
              </li>
            </ul>
            <ul className="block relative shrink-0 w-full" data-node-id="114:593">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Reliable global delivery</span>
              </li>
            </ul>
            <ul className="block relative shrink-0 w-full" data-node-id="114:594">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Collaborative growth strategies</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute contents left-[722px] top-[1225px]" data-node-id="95:2137" data-name="commitment-card-03">
          <div className="absolute bg-[var(--white,white)] h-[335px] left-[722px] shadow-[4px_4px_8px_2px_rgba(0,0,0,0.25)] top-[1225px] w-[227px]" data-node-id="95:2138" data-name="text-bg" />
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[741px] not-italic text-[16px] text-[color:var(--text,#6c6c6c)] top-[1241px] w-[100px]" data-node-id="95:2139">
            Culture of Quality
          </p>
          <div className="absolute left-[894px] size-[38.82px] top-[1241px]" data-node-id="95:2140" data-name="icon-03">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon03} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] left-[737px] not-italic text-[12px] text-[color:var(--text,#6c6c6c)] top-[1416px] w-[193px]" data-node-id="114:596" data-name="card-text">
            <ul className="block relative shrink-0 w-full" data-node-id="114:597">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Rigorous multi-stage testing</span>
              </li>
            </ul>
            <ul className="block relative shrink-0 w-full" data-node-id="114:598">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">{`"Zero Defect" manufacturing mindset`}</span>
              </li>
            </ul>
            <ul className="block relative shrink-0 w-full" data-node-id="114:599">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Continuous performance improvement</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute contents left-[962px] top-[1225px]" data-node-id="95:2144" data-name="commitment-card-04">
          <div className="absolute h-[335px] left-[962px] top-[1225px] w-[227px]" data-node-id="95:2145" style={{ backgroundImage: "linear-gradient(214.5345829327015deg, rgb(15, 36, 115) 0%, rgb(16, 252, 242) 100%)" }} data-name="text-bg" />
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[normal] left-[983px] not-italic text-[16px] text-[color:var(--white,white)] top-[1241px] w-[100px]" data-node-id="95:2146">
            Technical Leadership
          </p>
          <div className="absolute left-[1134px] size-[38.82px] top-[1241px]" data-node-id="95:2147" data-name="icon-04">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon04} />
          </div>
          <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] items-start leading-[0] left-[977px] not-italic text-[12px] text-[color:var(--white,white)] top-[1416px] w-[193px]" data-node-id="114:601" data-name="card-text">
            <ul className="block relative shrink-0 w-full" data-node-id="114:602">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Advanced testing equipment investment</span>
              </li>
            </ul>
            <ul className="block relative shrink-0 w-full" data-node-id="114:603">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Emerging technology expertise</span>
              </li>
            </ul>
            <ul className="block relative shrink-0 w-full" data-node-id="114:604">
              <li className="list-disc ms-[18px]">
                <span className="leading-[normal]">Proactive NEV solution development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute contents left-0 top-[1721px]" data-node-id="238:2512" data-name="aboutUs-section3">
        <div className="-translate-x-1/2 absolute h-[388px] left-1/2 top-[1789px] w-[1440px]" data-node-id="95:3184" data-name="BG">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 overflow-hidden">
              <img alt="" className="absolute h-[105.15%] left-0 max-w-none top-[-2.58%] w-[104.8%]" src={imgBg} />
            </div>
            <div className="absolute bg-gradient-to-r from-[rgba(16,252,242,0.2)] inset-0 to-[rgba(15,36,115,0.2)]" />
          </div>
        </div>
        <div className="absolute contents left-[242px] top-[1721px]" data-node-id="238:2511" data-name="text-tile">
          <div className="absolute bg-[var(--white,white)] h-[391px] left-[242px] shadow-[4px_4px_8px_2px_rgba(0,0,0,0.25)] top-[1721px] w-[387px]" data-node-id="95:3528" data-name="text-bg" />
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[290px] not-italic text-[20px] text-[color:var(--blue\/2,#0f2473)] top-[1781px] whitespace-nowrap" data-node-id="95:3530">
            <span className="leading-[normal] text-[#3163ff]">03 /</span>
            <span className="leading-[normal]">{` Our Expertise`}</span>
          </p>
          <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[290px] not-italic text-[12px] text-[color:var(--text,#6c6c6c)] top-[1867px] w-[306px] whitespace-pre-wrap" data-node-id="95:3531">
            <p className="leading-[normal] mb-0">With over 25 years of industry expertise and advanced manufacturing capabilities, AIPA specializes in delivering reliable, cost-effective solutions for passenger cars and commercial vehicles.</p>
            <p className="leading-[normal] mb-0">​</p>
            <p className="leading-[normal]">From electronic sensors and LED lighting to NEV components, our focused catalog covers critical replacement parts engineered to meet or exceed OEM standards.</p>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[-129px] top-[2225px]" data-node-id="238:2516" data-name="aboutUs-section4">
        <div className="absolute h-[655px] left-[-129px] top-[2225px] w-[1456px]" data-node-id="95:3541" data-name="BG">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[124.58%] left-0 max-w-none top-[-20.61%] w-full" src={imgBg1} />
          </div>
        </div>
        <div className="absolute contents left-[753px] top-[2257px]" data-node-id="238:2515" data-name="text-tile">
          <div className="absolute bg-[var(--white,white)] h-[526px] left-[753px] shadow-[4px_4px_8px_2px_rgba(0,0,0,0.25)] top-[2257px] w-[474px]" data-node-id="95:3185" />
          <div className="absolute contents left-[799px] top-[2596px]" data-node-id="238:2514" data-name="p2">
            <div className="absolute flex h-[105px] items-center justify-center left-[799px] top-[2596px] w-[10px]" data-node-id="95:3535">
              <div className="flex-none rotate-90">
                <div className="h-[10px] relative w-[105px]" data-name="divider-vertical">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDividerVertical} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[833px] not-italic text-[12px] text-[color:var(--text,#6c6c6c)] top-[2603.5px] w-[344px] whitespace-pre-wrap" data-node-id="95:3519">
              <p className="leading-[normal] mb-0">{`Pioneering the future of mobility through continuous innovation, sustainable practices, and trusted partnerships. `}</p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal]">As the automotive industry evolves toward electrification and smart systems, AIPA remains at the forefront of aftermarket excellence.</p>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[0] left-[799px] not-italic text-[20px] text-[color:var(--blue\/2,#0f2473)] top-[2330px] w-[344px]" data-node-id="95:3516">
            <span className="leading-[normal] text-[#3163ff]">04 /</span>
            <span className="leading-[normal]">{` Mission & Vision`}</span>
          </p>
          <div className="absolute contents left-[799px] top-[2411px]" data-node-id="238:2513" data-name="p1">
            <div className="absolute flex h-[105px] items-center justify-center left-[799px] top-[2411px] w-[10px]" data-node-id="95:3532">
              <div className="flex-none rotate-90">
                <div className="h-[10px] relative w-[105px]" data-name="divider-vertical">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDividerVertical} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[833px] not-italic text-[12px] text-[color:var(--text,#6c6c6c)] top-[2418.5px] w-[354px] whitespace-pre-wrap" data-node-id="95:3517">
              <p className="leading-[normal] mb-0">{`To deliver precision-engineered, OE-compatible automotive parts backed by world-class quality systems, rigorous testing protocols, and customer-centric service excellence. `}</p>
              <p className="leading-[normal] mb-0">​</p>
              <p className="leading-[normal]">We empower professional distributors and workshops with reliable solutions they can trust.</p>
            </div>
          </div>
        </div>
      </div>
      {viewport < 1024 ? <MobileFooter /> : <Footer className="absolute h-[535px] left-0 top-[3001px] w-[1440px]" />}
    </div>
  );
}
