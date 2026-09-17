import audi from "@/assets/car-brands/audi.svg";
import benz from "@/assets/car-brands/Benz.svg";
import bmw from "@/assets/car-brands/BMW.svg";
import byd from "@/assets/car-brands/BYD.svg";
import chery from "@/assets/car-brands/chery.svg";
import geely from "@/assets/car-brands/geely.svg";
import jaguar from "@/assets/car-brands/JAGUAR.svg";
import landRover from "@/assets/car-brands/landrover.svg";
import mg from "@/assets/car-brands/MG.svg";
import nio from "@/assets/car-brands/NIO.svg";
import xpeng from "@/assets/car-brands/Xpeng.svg";
import "./car-brand-grid.css";

const brands = [
  ["Audi", audi], ["Mercedes-Benz", benz], ["BMW", bmw], ["BYD", byd],
  ["Chery", chery], ["Geely", geely], ["Jaguar", jaguar],
  ["Land Rover", landRover], ["MG", mg], ["NIO", nio], ["XPeng", xpeng],
] as const;

export default function CarBrandGrid({ mobile = false }: { mobile?: boolean }) {
  return <div className={`car-brand-grid${mobile ? " is-mobile" : ""}`} aria-label="Supported vehicle brands">
    {brands.map(([name, icon]) => <div className="car-brand-tile" key={name} tabIndex={0} aria-label={name}>
      <img src={icon} alt="" />
      <span role="tooltip">{name}</span>
    </div>)}
  </div>;
}
