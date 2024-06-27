import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../const.ts';
import MainPage from 'pages/main-page';
import LoginPage from 'pages/login-page';
import FavoritesPage from 'pages/favorites-page';
import NotFound from 'pages/not-found';
import OfferPage from 'pages/offer-page';
import ProtectedRoute from 'components/protected-route';
import { useEffect } from 'react';
import { fetchAllOffers } from 'store/thunks/offers.ts';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { offersSelectors } from 'store/slices/offers.ts';
import { getToken } from 'services/token.ts';
import { checkAuth } from 'store/thunks/auth.ts';

function App() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(offersSelectors.offers);

  const token = getToken();
  useEffect(() => {
    if (offers.length === 0) {
      dispatch(fetchAllOffers());
    }
  }, [dispatch, offers]);

  useEffect(() => {
    // проверка токена при обновлении страницы
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
      element: <NotFound />,
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

  return <RouterProvider router={router} />;
}

export default App;
