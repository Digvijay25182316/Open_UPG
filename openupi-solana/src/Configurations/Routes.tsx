import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

// Lazy-load your pages for performance
const LandingPage = lazy(() => import("../pages/Landing"))
const RegisterPage = lazy(() => import("../pages/Register"));
const SendPage = lazy(() => import("../pages/Send"));
const DashboardPage = lazy(() => import("../pages/Dashboard"));
const ReceivePage = lazy(() => import("../pages/Receive"));
const ScanPage = lazy(() => import("../pages/Scan"));
const AboutPage = lazy(() => import("../pages/About"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));
const HomePage = lazy(() => import("../pages/Home"));
const PayContacts = lazy(() => import("../pages/PayContact"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/send",
    element: <SendPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/platform",
    element: <HomePage />,
  },
  {
    path: "/platform/paycontacts",
    element: <PayContacts />,
  },
  {
    path: "/u/:id", // e.g. openupg.xyz/u/digvijay
    element: <ReceivePage />,
  },
  {
    path: "/scan",
    element: <ScanPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export const NavigationContainer = () => {

  return useRoutes(routes)
}