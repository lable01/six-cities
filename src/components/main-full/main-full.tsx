import { useState } from 'react';
import CartItem from 'components/cart-item';
import OffersSorting from 'components/offers-sorting';
import Map from 'components/map';
import { TOfferItem } from 'types/offer-item';

type MainFullProps = {
  currentOffers: TOfferItem[];
  currentCity: string;
};

function MainFull({ currentOffers, currentCity }: MainFullProps) {
  const [cardHover, setCardHover] = useState<TOfferItem['id'] | null>(null);

  function handleCardHover(offerId: TOfferItem['id'] | null) {
    setCardHover(offerId);
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {currentOffers.length} places to stay in {currentCity}
        </b>
        <OffersSorting />
        <div className="cities__places-list places__list tabs__content">
          {currentOffers.map((offer) => (
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
          currentOffers={currentOffers}
          cardHover={cardHover}
          className="cities__map"
        />
      </div>
    </div>
  );
}

export default MainFull;
