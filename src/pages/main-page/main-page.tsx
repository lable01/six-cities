import MainFull from 'components/main-full';
import MainEmpty from 'components/main-empty';
import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import Tabs from 'components/tabs';
import { ClassName, RequestStatus } from '../../const';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { useEffect, useState } from 'react';
import { TOfferItem } from 'types/offer-item.ts';
import { offersSelectors } from 'store/slices/offers';
import { fetchAllOffers } from 'store/thunks/offers.ts';
import Loader from 'components/loader';
import { isArrayEmpty } from '../../utils/function.ts';

function MainPage() {
  const [activeOfferId, setActiveOfferId] = useState<TOfferItem['id'] | null>(
    null,
  );
  const dispatch = useAppDispatch();
  const offers = useAppSelector(offersSelectors.offers);
  const status = useAppSelector(offersSelectors.status);
  const loadingStatuses = [RequestStatus.Idle, RequestStatus.Loading];
  const currentCity = useAppSelector(offersSelectors.city);

  useEffect(() => {
    if (isArrayEmpty(offers)) {
      dispatch(fetchAllOffers());
    }
  }, [dispatch, offers]);

  const currentOffers = offers.filter(
    (offer) => offer.city.name === currentCity,
  );
  const mainClassName =
    currentOffers.length === 0 ? 'page__main--index-empty' : '';

  function handleCardHover(offerId: TOfferItem['id'] | null) {
    setActiveOfferId(offerId);
  }

  if (loadingStatuses.includes(status)) {
    return <Loader />;
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
