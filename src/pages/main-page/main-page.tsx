import MainFull from 'components/main-full';
import MainEmpty from 'components/main-empty';
import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import Tabs from 'components/tabs';
import { ClassName } from '../../const';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';
import { useAppSelector } from 'hooks/store';
import { useState } from 'react';
import { TOfferItem } from 'types/offer-item.ts';

function MainPage() {
  const [activeOfferId, setActiveOfferId] = useState<TOfferItem['id'] | null>(
    null,
  );
  const offers = useAppSelector((state) => state.offers);
  const currentCity = useAppSelector((state) => state.city);
  const currentOffers = offers.filter(
    (offer) => offer.city.name === currentCity,
  );
  const mainClassName =
    currentOffers.length === 0 ? 'page__main--index-empty' : '';

  function handleCardHover(offerId: TOfferItem['id'] | null) {
    setActiveOfferId(offerId);
  }

  return (
    <MainLayout header={<Header />} className={ClassName.Main}>
      <Helmet>
        <title>Six cities service for travelers - official website</title>
      </Helmet>
      <main className={clsx('page__main page__main--index', mainClassName)}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          {currentOffers.length > 0 ? (
            <MainFull
              currentOffers={currentOffers}
              onCardHover={handleCardHover}
              activeOfferId={activeOfferId}
            />
          ) : (
            <MainEmpty />
          )}
        </div>
      </main>
    </MainLayout>
  );
}

export default MainPage;
