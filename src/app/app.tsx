import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute, ServicePageType } from '../const/const.ts';
import MainPage from 'pages/main-page';
import LoginPage from 'pages/login-page';
import FavoritesPage from 'pages/favorites-page';
import ServicePage from 'pages/service-page';
import OfferPage from 'pages/offer-page';
import ProtectedRoute from 'components/protected-route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, memo } from 'react';
import { checkAuth } from 'store/thunks/auth.ts';
import { getToken } from 'services/token.ts';
import { useAppDispatch } from 'hooks/store';

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
          <LoginPage />
        </ProtectedRoute>
      ),
    },
    {
      path: `${AppRoute.Offer}/:id`,
      element: <OfferPage />,
    },
    {
      path: AppRoute.NotFound,
      element: <ServicePage type={ServicePageType.NotFound} />,
    },
    {
      path: AppRoute.Favorites,
      element: (
        <ProtectedRoute>
          <FavoritesPage />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default memo(App);
