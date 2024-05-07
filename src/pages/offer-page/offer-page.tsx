import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import { AppRoute, ClassName, QUANTITY_NEAR_OFFERS } from '../../const';
import { TOfferDetail } from 'types/offer-detail.ts';
import { Navigate, useParams } from 'react-router-dom';
import OfferDetails from 'components/offer-details';
import OtherOffers from 'components/other-offers';
import { TReview } from 'types/review.ts';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from 'hooks/store';
import { selectOffers } from 'store/selectors/offers';

type TOfferPageProps = {
  offersDetail: TOfferDetail[];
  reviews: TReview[];
};

function OfferPage({ offersDetail, reviews }: TOfferPageProps) {
  const { id } = useParams();
  const offers = useAppSelector(selectOffers);
  const currentOffer = offersDetail.find((item) => item.id === id);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const nearOffers = offers.slice(0, QUANTITY_NEAR_OFFERS);

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
          nearOffers={nearOffers}
        />
        <OtherOffers nearOffers={nearOffers} />
      </main>
    </MainLayout>
  );
}

export default OfferPage;
