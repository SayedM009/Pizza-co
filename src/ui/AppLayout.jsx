import { Suspense } from "react";
import { Outlet } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import LoadingPage from "./LoadingPage";

const AppLayout = () => (
  <Suspense fallback={<LoadingPage />}>
    <Header />
    <Outlet />
    <CartOverview />
  </Suspense>
);

export default AppLayout;
