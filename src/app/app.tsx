import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const.ts';
import MainPage from 'pages/main-page';
import LoginPage from 'pages/login-page';
import FavoritesPage from 'pages/favorites-page';
import NotFound from 'pages/not-found';
import OfferPage from 'pages/offer-page';
import ProtectedRoute from 'components/protected-route';
import { TOfferDetailProps } from 'types/offer-detail.ts';
import { TReviewType } from 'types/review.ts';

type TAppPageProps = {
  offers: TOfferDetailProps[];
  reviews: TReviewType[];
};

function App({ offers, reviews }: TAppPageProps) {
  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: <MainPage offers={offers} />,
    },
    {
      path: AppRoute.Login,
      element: <LoginPage />,
    },
    {
      path: `${AppRoute.Offer}/:id`,
      element: <OfferPage offers={offers} reviews={reviews} />,
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
          <FavoritesPage offers={offers} />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
