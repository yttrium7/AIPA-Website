import { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { Footer } from "@/imports/1Home/index";
import { FooterSection } from "@/components/MobileLayout";
import { useViewport } from "@/hooks/useViewport";
import { productCategories, sensorCategory } from "@/components/products/categories";
import useProductAnimations from "@/components/products/useProductAnimations";
import "@/components/products/products.css";
const categoryIconCenters = [10.5, 119.5, 240.5, 365, 490, 615.5, 742, 870.5, 998.5];
const assets = import.meta.glob("../assets/products/*", { eager: true, query: "?url", import: "default" }) as Record<string,string>;
const asset = (name: string) => assets[`../assets/products/${name}`];
export function ProductCategoryPage({ category, slug }: { category: any; slug: string }) {
  const root = useRef<HTMLElement>(null);
  useProductAnimations(root);
  const viewport=useViewport();
  const navigate=useNavigate();
  return <main ref={root} className="product-page" data-node-id="93:1171">
    <section className="product-banner"><img src={asset("imgProductsBannerPic-web.jpg")} alt="" /><div /><h1>Our Products</h1><p>Premium automotive parts engineered for precision,<br /> reliability, and performance</p></section>
    <section className="product-description"><img src={asset("imgDescriptionBg.svg")} alt="" /><div><p>AIPA offers a focused range of OE-compatible replacement parts manufactured to the highest standards. Every component undergoes rigorous testing and quality control to ensure optimal performance and reliability that meets or exceeds original equipment specifications.</p></div></section>
    <nav className="product-categories" aria-label="Product categories">{productCategories.map((item,i)=><div key={item.slug} className="product-category"><Link to={item.available ? `/products/${item.slug}` : "/products"} aria-label={item.name} aria-current={item.slug === slug ? "page" : undefined} className={item.slug === slug ? "selected" : ""}><span className="product-category-glyph"><img src={asset("imgProductCategoryList.svg")} alt="" style={{left:40-categoryIconCenters[i]}} /></span></Link><span className="product-category-label">{item.name}</span></div>)}</nav>
    <section className="product-panel" aria-labelledby={`${slug}-title`}><header><h2 id={`${slug}-title`}>{category.name.toUpperCase()}</h2><p>{category.description}</p></header><div className="product-items">{category.items.map((item: any)=><article key={item.name} className={`product-item product-corner-${item.corner}`} style={{left:item.x,top:item.y,width:item.width}}><h3>{item.name}</h3>{"sprite" in item ? <div role="img" aria-label={item.name} className="product-sprite" style={{backgroundImage:`url(${asset(category.spriteImage)})`,backgroundPosition:`${item.sprite[0]*50}% ${item.sprite[1]*50}%`}} /> : <img src={asset(item.image)} alt={item.name} />}</article>)}</div></section>
    {viewport<1024 ? <FooterSection /> : <div className="product-footer" onClick={event=>{
      const target=event.target as HTMLElement;
      for(const [name,path] of [["footer-link-col-3","/about"],["footer-link-col-4","/services"],["aipa-logo","/"]])if(target.closest(`[data-name="${name}"]`)){navigate(path);window.scrollTo(0,0);return;}
      if(target.closest('[data-name="footer-link-col-1"]'))window.location.href="mailto:info@ai-parts.eu";
    }}><Footer /></div>}
  </main>;
}

export default function SensorProductsPage(){ return <ProductCategoryPage category={sensorCategory} slug="sensors" />; }
