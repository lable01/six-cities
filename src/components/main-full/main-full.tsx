import { useState } from 'react';
import CartItem from 'components/cart-item';
import OffersSorting from 'components/offers-sorting';
import Map from 'components/map';
import { TOfferItem } from 'types/offer-item';

type MainFullProps = {
  offers: TOfferItem[];
  currentCity: string | null;
};

function MainFull({ offers, сurrentCity }: MainFullProps) {
  const [cardHover, setCardHover] = useState<TOfferItem['id'] | null>(null);

  function handleCardHover(offerId: TOfferItem['id'] | null) {
    setCardHover(offerId);
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">312 places to stay in Amsterdam</b>
        <OffersSorting />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <CartItem
              key={offer.id}
              onCardHover={handleCardHover}
              offer={offer}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          offers={offers}
          cardHover={cardHover}
          className="cities__map"
          сurrentCity={сurrentCity}
        />
      </div>
    </div>
  );
}

export default MainFull;
