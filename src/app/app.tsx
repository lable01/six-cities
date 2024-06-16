import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from '../const.ts';
import MainPage from 'pages/main-page';
import LoginPage from 'pages/login-page';
import FavoritesPage from 'pages/favorites-page';
import NotFound from 'pages/not-found';
import OfferPage from 'pages/offer-page';
import ProtectedRoute from 'components/protected-route';
import { useEffect } from 'react';
import { isArrayEmpty } from '../utils/function.ts';
import { fetchAllOffers } from 'store/thunks/offers.ts';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { offersSelectors } from 'store/slices/offers.ts';

function App() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(offersSelectors.offers);
  useEffect(() => {
    if (isArrayEmpty(offers)) {
      dispatch(fetchAllOffers());
    }
  }, [dispatch, offers]);

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
        <ProtectedRoute redirectTo={AppRoute.Login}>
          <FavoritesPage />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
