import { createBrowserRouter } from "react-router";
import RootLayout from "@/layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true,          lazy: async () => ({ Component: (await import("@/pages/HomePage")).default })       },
      { path: "products/ignition", lazy: async () => ({ Component: (await import("@/pages/IgnitionProductsPage")).default }) },
      { path: "products/cooling", lazy: async () => ({ Component: (await import("@/pages/CoolingProductsPage")).default }) },
      { path: "products/ac-system", lazy: async () => ({ Component: (await import("@/pages/AcSystemProductsPage")).default }) },
      { path: "products/chassis", lazy: async () => ({ Component: (await import("@/pages/ChassisProductsPage")).default }) },
      { path: "products/exhaust", lazy: async () => ({ Component: (await import("@/pages/ExhaustProductsPage")).default }) },
      { path: "products/engine", lazy: async () => ({ Component: (await import("@/pages/EngineProductsPage")).default }) },
      { path: "products/brakes", lazy: async () => ({ Component: (await import("@/pages/BrakesProductsPage")).default }) },
      { path: "products/electrics", lazy: async () => ({ Component: (await import("@/pages/ElectricsProductsPage")).default }) },
      { path: "products/sensors", lazy: async () => ({ Component: (await import("@/pages/SensorProductsPage")).default }) },
      { path: "products",     lazy: async () => ({ Component: (await import("@/pages/ProductsPage")).default })   },
      { path: "about",        lazy: async () => ({ Component: (await import("@/pages/AboutPage")).default })      },
      { path: "services",     lazy: async () => ({ Component: (await import("@/pages/ServicesPage")).default })   },
      { path: "contact", lazy: async () => ({ Component: (await import("@/pages/ContactPage")).default }) },
      { path: "catalogues",   lazy: async () => ({ Component: (await import("@/pages/CataloguesPage")).default }) },
    ],
  },
]);
