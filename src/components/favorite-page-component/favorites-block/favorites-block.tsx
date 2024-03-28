import FavoritesOffers from 'components/favorite-page-component/favorites-offers';
import { TOfferItem } from 'types/offer-item.ts';
import { TListItems } from 'types/list-items.ts';

function FavoritesBlock({ offers }: TListItems) {
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
