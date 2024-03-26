import { TListItemProps } from 'components/main-full/main-full.tsx';
import FavoritesOffers from 'components/favorite-page-component/favorites-offers';
import { TOfferItemType } from 'types/offer-item.ts';

function FavoritesBlock({ offers }: TListItemProps) {
  const favoriteOffersByCity = offers.reduce<{
    [key: string]: TOfferItemType[];
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
