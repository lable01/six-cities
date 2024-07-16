import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute, ServicePageType } from '../const/const.ts';
import MainPage from 'pages/main-page';
import OfferPage from 'pages/offer-page';
import ProtectedRoute from 'components/protected-route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, memo, lazy, Suspense } from 'react';
import { checkAuth } from 'store/thunks/auth.ts';
import { getToken } from 'services/token.ts';
import { useAppDispatch } from 'hooks/store';
import Loader from 'components/loader';

const FavoritesPage = lazy(() => import('pages/favorites-page'));
const LoginPage = lazy(() => import('pages/login-page'));
const ServicePage = lazy(() => import('pages/service-page'));

function App() {
  const dispatch = useAppDispatch();
  const token = getToken();

  useEffect(() => {
    // проверка токена при обновлении страницы, без этого токен не считывается и приложение разлогинивается
    if (token) {
      dispatch(checkAuth());
    }
  }, [token, dispatch]);

  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <MainPage />,
    },
    {
      path: AppRoute.Login,
      element: (
        <ProtectedRoute onlyUnAuth>
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        </ProtectedRoute>
      ),
    },
    {
      path: `${AppRoute.Offer}/:id`,
      element: <OfferPage />,
    },
    {
      path: AppRoute.NotFound,
      element: (
        <Suspense fallback={<Loader />}>
          <ServicePage type={ServicePageType.NotFound} />
        </Suspense>
      ),
    },
    {
      path: AppRoute.Favorites,
      element: (
        <ProtectedRoute>
          <Suspense fallback={<Loader />}>
            <FavoritesPage />
          </Suspense>
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default memo(App);
