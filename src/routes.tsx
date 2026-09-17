import { createBrowserRouter } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import IgnitionProductsPage from "@/pages/IgnitionProductsPage";
import CoolingProductsPage from "@/pages/CoolingProductsPage";
import AcSystemProductsPage from "@/pages/AcSystemProductsPage";
import ChassisProductsPage from "@/pages/ChassisProductsPage";
import ExhaustProductsPage from "@/pages/ExhaustProductsPage";
import EngineProductsPage from "@/pages/EngineProductsPage";
import BrakesProductsPage from "@/pages/BrakesProductsPage";
import ElectricsProductsPage from "@/pages/ElectricsProductsPage";
import SensorProductsPage from "@/pages/SensorProductsPage";
import ProductsPage from "@/pages/ProductsPage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import CataloguesPage from "@/pages/CataloguesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true,          Component: HomePage       },
      { path: "products/ignition", Component: IgnitionProductsPage },
      { path: "products/cooling", Component: CoolingProductsPage },
      { path: "products/ac-system", Component: AcSystemProductsPage },
      { path: "products/chassis", Component: ChassisProductsPage },
      { path: "products/exhaust", Component: ExhaustProductsPage },
      { path: "products/engine", Component: EngineProductsPage },
      { path: "products/brakes", Component: BrakesProductsPage },
      { path: "products/electrics", Component: ElectricsProductsPage },
      { path: "products/sensors", Component: SensorProductsPage },
      { path: "products",     Component: ProductsPage   },
      { path: "about",        Component: AboutPage      },
      { path: "services",     Component: ServicesPage   },
      { path: "contact", Component: ContactPage },
      { path: "catalogues",   Component: CataloguesPage },
    ],
  },
]);
