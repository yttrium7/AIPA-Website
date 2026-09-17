import networkBackground from "@/assets/home/home-network-banner-bg-v1.png";
import boxCollection from "@/assets/home/aipa-box-collection2.png";
import suppliedBannerBackground from "@/assets/home/aipa-banner-bg-web.png";
import climateIcon from "@/assets/home/climate-icon.svg";
import coolingIcon from "@/assets/home/cooling-icon.svg";
import productIconStrip from "@/assets/products/imgProductCategoryList.svg";

function GlobeIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19"/><path d="M5 24h38M24 5c7 6 11 12 11 19S31 37 24 43C17 37 13 31 13 24S17 11 24 5Z"/><path d="m10 12 28 24M38 12 10 36"/></svg>;
}

function DiamondIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m5 17 8-10h22l8 10-19 25L5 17Z"/><path d="M5 17h38M13 7l11 35L35 7M13 7l11 10L35 7"/></svg>;
}

export default function HomeCampaignSlide({ mobile = false }: { mobile?: boolean }) {
  return <div className={`home-campaign-slide${mobile ? " is-mobile" : ""}`}>
    <img className="home-campaign-background" src={networkBackground} alt="" />
    <div className="home-campaign-shade" />
    <div className="home-campaign-stats">
      <div className="home-campaign-stat"><GlobeIcon/><span>TRUSTED IN</span><strong>EU &amp; NA</strong></div>
      <div className="home-campaign-stat"><DiamondIcon/><strong>25+ YEARS</strong><span>AFTERMARKET<br/>EXPERIENCE</span></div>
    </div>
    <img className="home-campaign-boxes" src={boxCollection} alt="AIPA automotive parts packaging" />
  </div>;
}

export function HomeSuppliedBannerSlide({ mobile = false }: { mobile?: boolean }) {
  return <div className={`home-supplied-banner-slide${mobile ? " is-mobile" : ""}`}>
    <img className="home-supplied-banner-background" src={suppliedBannerBackground} alt="" />
    <div className="home-supplied-banner-copy">
      <h2><em>Premium</em> Parts for Future <em>Mobility</em></h2>
      <div className="home-supplied-categories">
        <div className="home-supplied-category">
          <span className="home-supplied-icon"><span className="home-supplied-sprite"><img src={productIconStrip} alt="" /></span></span>
          <strong>Sensors</strong><i>Sensoren</i>
        </div>
        <div className="home-supplied-category">
          <span className="home-supplied-icon"><span className="home-supplied-sprite is-electrics"><img src={productIconStrip} alt="" /></span></span>
          <strong>Electrics</strong><i>Fahrzeugelektrik</i>
        </div>
        <div className="home-supplied-category">
          <span className="home-supplied-icon"><img src={climateIcon} alt="" /></span>
          <strong>Climate</strong><i>Klimaanlage</i>
        </div>
        <div className="home-supplied-category">
          <span className="home-supplied-icon"><img src={coolingIcon} alt="" /></span>
          <strong>Cooling</strong><i>Kühlsystem</i>
        </div>
      </div>
    </div>
  </div>;
}
