import { Suspense } from 'react';
import { Outlet, useNavigate, useNavigation } from 'react-router';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import LoadingPage from './LoadingPage';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  if (isLoading) return <LoadingPage />;
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Suspense fallback={<LoadingPage />}>
        <Header />
        <div className="flex items-start justify-center overflow-y-scroll">
          <main className="md:m-unset m-5 w-full max-w-3xl">
            <Outlet />
          </main>
        </div>
        <CartOverview />
      </Suspense>
    </div>
  );
};

export default AppLayout;
