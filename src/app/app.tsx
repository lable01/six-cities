import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {ClassName} from '../const.ts';
import MainPage from 'pages/main-page';
import LoginPage from 'pages/login-page';
import FavoritesPage from 'pages/favorites-page';
import NotFound from 'pages/not-found';
import MainLayout from 'layouts/main-layout';
import OfferPage from 'pages/offer-page';
import ProtectedRoute from 'components/protected-route';

type TAppScreenProps = {
  cartCount: number;
}

function App({cartCount}: TAppScreenProps) {
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
            <ProtectedRoute
              restrictedFor={AuthorizationStatus.NoAuth}
              redirectTo={AppRoute.Login}
            >
              <FavoritesPage />
            </ProtectedRoute>
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