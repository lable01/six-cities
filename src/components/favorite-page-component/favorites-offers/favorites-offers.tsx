import { TOfferItem } from 'types/offer-item.ts';
import CartItem from 'components/cart-item';

type TFavoritesOffers = {
  city: string;
  favoritesOffers: TOfferItem[];
  onCardHover?: (offerId: string | null) => void;
};

function FavoritesOffers({
  city,
  favoritesOffers,
  onCardHover,
}: TFavoritesOffers) {
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
        {favoritesOffers.map((offer) => (
          <CartItem
            key={offer.id}
            offer={offer}
            onCardHover={onCardHover}
            typeCard="favorites"
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesOffers;
