import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const.ts';
import MainPage from 'pages/main-page';
import LoginPage from 'pages/login-page';
import FavoritesPage from 'pages/favorites-page';
import NotFound from 'pages/not-found';
import OfferPage from 'pages/offer-page';
import ProtectedRoute from 'components/protected-route';
import { TOfferDetail } from 'types/offer-detail.ts';
import { TReview } from 'types/review.ts';
import { TOfferItem } from 'types/offer-item.ts';
import { useState } from 'react';

type TAppPageProps = {
  offers: TOfferItem[];
  offersDetail: TOfferDetail[];
  reviews: TReview[];
};

function App({ offers, offersDetail, reviews }: TAppPageProps) {
  const [activeOfferId, setActiveOfferId] = useState<TOfferItem['id'] | null>(
    null,
  );

  function handleCardHover(offerId: TOfferItem['id'] | null) {
    setActiveOfferId(offerId);
  }

  const router = createBrowserRouter([
    {
      path: AppRoute.Main,
      element: (
        <MainPage
          offers={offers}
          onCardHover={handleCardHover}
          activeOfferId={activeOfferId}
        />
      ),
    },
    {
      path: AppRoute.Login,
      element: <LoginPage />,
    },
    {
      path: `${AppRoute.Offer}/:id`,
      element: (
        <OfferPage
          offers={offers}
          offersDetail={offersDetail}
          reviews={reviews}
          onCardHover={handleCardHover}
        />
      ),
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
          <FavoritesPage offers={offers} onCardHover={handleCardHover} />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
