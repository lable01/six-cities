import MainFull from 'components/main-full';
import MainEmpty from 'components/main-empty';
import MainLayout from 'layouts/main-layout';
import Header from 'components/header-components/header';
import Tabs from 'components/tabs';
import {
  ClassName,
  LoadingStatuses,
  RequestStatus,
  ServicePageType,
} from 'const/const.ts';
import { Helmet } from 'react-helmet-async';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { useEffect, useState, memo, useMemo, useCallback } from 'react';
import { TOfferItem } from 'types/offer-item.ts';
import { offersSelectors } from 'store/slices/offers';
import Loader from 'components/loader';
import { fetchAllOffers } from 'store/thunks/offers.ts';
import ServicePage from 'pages/service-page';

function MainPage() {
  const dispatch = useAppDispatch();

  const [activeOfferId, setActiveOfferId] = useState<TOfferItem['id'] | null>(
    null,
  );
  const offers = useAppSelector(offersSelectors.offers);
  const offersStatus = useAppSelector(offersSelectors.status);
  const currentCity = useAppSelector(offersSelectors.city);

  const currentOffers = useMemo(
    () => offers.filter((offer) => offer.city.name === currentCity),
    [offers, currentCity],
  );

  useEffect(() => {
    if (offers.length === 0) {
      dispatch(fetchAllOffers());
    }
  }, [dispatch, offers]);

  const mainClassName =
    currentOffers.length === 0 ? 'page__main--index-empty' : '';

  const handleCardHover = useCallback((offerId: TOfferItem['id'] | null) => {
    setActiveOfferId(offerId);
  }, []);

  if (offersStatus === RequestStatus.Failed) {
    return <ServicePage type={ServicePageType.ServerUnavailable} />;
  }
  if (LoadingStatuses.includes(offersStatus)) {
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

export default memo(MainPage);
