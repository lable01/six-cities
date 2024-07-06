import FavoritesOffers from 'components/favorite-page-component/favorites-offers';
import { TOfferItem } from 'types/offer-item.ts';

type TFavoritesBlockProps = {
  favoriteOffersByCity: {
    [key: string]: TOfferItem[];
  };
};

function FavoritesBlock({ favoriteOffersByCity }: TFavoritesBlockProps) {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(favoriteOffersByCity).map(([city, favoritesOffers]) => (
          <FavoritesOffers
            key={city}
            city={city}
            favoritesOffers={favoritesOffers}
          />
        ))}
      </ul>
    </section>
  );
}

export default FavoritesBlock;
