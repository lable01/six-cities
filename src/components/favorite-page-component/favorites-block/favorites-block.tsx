import { TListItemProps } from 'components/main-full/main-full.tsx';
import FavoritesOffers from 'components/favorite-page-component/favorites-offers';

function FavoritesBlock({ offers }: TListItemProps) {
  const favoriteOffersByCity: { [key: string]: TListItemProps } = offers.reduce(
    (result, offer) => {
      if (offer.isFavorite) {
        const city = offer.city.name;
        if (!result[city]) {
          result[city] = [];
        }
        result[city].push(offer);
      }
      return result;
    },
    {} as { [key: string]: TListItemProps },
  );

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(favoriteOffersByCity).map(([city, favoritesOffers]) => (
          <FavoritesOffers
            city={city}
            favoritesOffers={favoritesOffers}
            key={city}
          />
        ))}
      </ul>
    </section>
  );
}

export default FavoritesBlock;
