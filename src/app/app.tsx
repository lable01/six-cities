import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const.ts';
import MainPage from 'pages/main-page';
import LoginPage from 'pages/login-page';
import FavoritesPage from 'pages/favorites-page';
import NotFound from 'pages/not-found';
import OfferPage from 'pages/offer-page';
import ProtectedRoute from 'components/protected-route';

function App() {
  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <MainPage />,
    },
    {
      path: AppRoute.Login,
      element: <LoginPage />,
    },
    {
      path: `${AppRoute.Offer}/:id`,
      element: <OfferPage />,
    },
    {
      path: AppRoute.NotFound,
      element: <NotFound />,
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
