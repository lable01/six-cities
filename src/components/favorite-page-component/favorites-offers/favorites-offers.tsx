import FavoriteOffer from 'components/favorite-page-component/favorite-offer/';
import { TOfferItem } from 'types/offer-item.ts';

function FavoritesOffers({
  city,
  favoritesOffers,
}: {
  city: string;
  favoritesOffers: TOfferItem[];
}) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesOffers.map((offer, index) => (
          <FavoriteOffer offer={offer} key={index} />
        ))}
      </div>
    </li>
  );
}

export default FavoritesOffers;
