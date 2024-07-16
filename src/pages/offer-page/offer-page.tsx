import MainLayout from 'layouts/main-layout';
import Header from 'components/header-components/header';
import { ClassName } from 'const/const.ts';
import OfferDetails from 'components/offer-components/offer-details';
import OtherOffers from 'components/offer-components/other-offers';
import { Helmet } from 'react-helmet-async';
import { memo } from 'react';
import Loader from 'components/loader';
import useOffersData from 'hooks/use-offers-data';

function OfferPage() {
  const { currentOffer, reviews, nearCurrentOffers, status, nearByStatus } =
    useOffersData();

  if (status.isLoading || nearByStatus.isLoading || !currentOffer) {
    return <Loader />;
  }

  return (
    <MainLayout header={<Header />} className={ClassName.Offer}>
      <Helmet>
        <title>
          Offers six cities service for travelers - official website
        </title>
      </Helmet>
      <main className="page__main page__main--offer">
        <OfferDetails
          offer={currentOffer}
          reviews={reviews}
          nearOffers={nearCurrentOffers}
        />
        <OtherOffers nearOffers={nearCurrentOffers} />
      </main>
    </MainLayout>
  );
}

export default memo(OfferPage);
