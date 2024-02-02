import {ReactNode} from 'react';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {ClassName} from '../const.ts';
import MainPage from 'pages/main-page';
import LoginPage from 'pages/login-page';
import FavoritesPage from 'pages/favorites-page';
import NotFound from 'pages/not-found';
import MainLayout from 'layouts/main-layout';
import OfferPage from 'pages/offer-page';

type AppScreenProps = {
  cartCount: number;
}

type PrivateRouteProps = {
  children: ReactNode;
}

function App({cartCount}: AppScreenProps) {
  function PrivateRoute({children}: PrivateRouteProps) {
    return (!AuthorizationStatus.Auth) ? children : <Navigate to="/login" />;
  }

  const router = createBrowserRouter([
    {
      element: <MainLayout className={ClassName} />,
      errorElement: <NotFound />,
      children: [
        {
          path: AppRoute.Main,
          element: <MainPage cartCount={cartCount} />,
        },
        {
          path: AppRoute.Login,
          element:  <LoginPage />,
        },
        {
          path: AppRoute.Offer,
          element:  <OfferPage />,
        },
        {
          path: AppRoute.Favorites,
          element: (
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          ),
        },
      ],
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
