import { Suspense } from "react";
import { Outlet, useNavigate, useNavigation } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import LoadingPage from "./LoadingPage";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) return <LoadingPage />;
  return (
    <Suspense fallback={<LoadingPage />}>
      <Header />
      <Outlet />
      <CartOverview />
    </Suspense>
  );
};

export default AppLayout;
