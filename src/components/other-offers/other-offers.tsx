import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { TOfferItem } from 'types/offer-item.ts';
import CartItem from 'components/cart-item';

type TOtherOffersProps = {
  nearOffers: TOfferItem[];
  onCardHover?: (OfferId: string | null) => void;
};

function OtherOffers({ nearOffers, onCardHover }: TOtherOffersProps) {
  if (!nearOffers) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">
          Other places in the neighbourhood
        </h2>
        <div className="near-places__list places__list">
          {nearOffers.map((nearOffer) => (
            <CartItem
              key={nearOffer.id}
              offer={nearOffer}
              onCardHover={onCardHover}
              typeCard="near-places"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default OtherOffers;
