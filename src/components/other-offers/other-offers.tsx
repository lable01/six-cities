import { TOfferItem } from 'types/offer-item.ts';
import CartItem from 'components/cart-item';

type TOtherOffersProps = {
  nearOffers: TOfferItem[];
};

function OtherOffers({ nearOffers }: TOtherOffersProps) {
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
              typeCard="near-places"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default OtherOffers;
