import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import Footer from 'components/footer';
import { ClassName, ClassNamePages } from '../../const';
import { Helmet } from 'react-helmet-async';
import FavoritesBlock from 'components/favorite-page-component/favorites-block';
import { useAppSelector } from 'hooks/store';
import { offersSelectors } from 'store/slices/offers';
import { TOfferItem } from 'types/offer-item.ts';
import clsx from 'clsx';
import FavoritesEmpty from 'components/favorite-page-component/favorites-empty';

function FavoritesPage() {
  const offers = useAppSelector(offersSelectors.offers);

  const favoriteOffersByCity = offers.reduce<{
    [key: string]: TOfferItem[];
  }>((result, offer) => {
    if (offer.isFavorite) {
      const city = offer.city.name;
      if (!result[city]) {
        result[city] = [];
      }

      const cityOffers = result[city];
      cityOffers.push(offer);
    }
    return result;
  }, {});

  const classNameLayoutFavorites = favoriteOffersByCity
    ? ClassName.FavoritesEmpty
    : ClassName.Favorites;

  const classNameMainFavorites = favoriteOffersByCity
    ? ClassNamePages.FavoritesEmpty
    : '';

  return (
    <>
      <MainLayout header={<Header />} className={classNameLayoutFavorites}>
        <Helmet>
          <title>
            Favorite page six cities service for travelers - official website
          </title>
        </Helmet>
        <main
          className={clsx(
            'page__main page__main--favorites',
            classNameMainFavorites,
          )}
        >
          <div className="page__favorites-container container">
            {favoriteOffersByCity ? (
              <FavoritesEmpty />
            ) : (
              <FavoritesBlock favoriteOffersByCity={favoriteOffersByCity} />
            )}
          </div>
        </main>
      </MainLayout>
      <Footer />
    </>
  );
}

export default FavoritesPage;
