import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import { AppRoute, ClassName } from '../../const';
import { TOfferDetail } from 'types/offer-detail.ts';
import { Navigate, useParams } from 'react-router-dom';
import OfferDetails from 'components/offer-details';
import OtherOffers from 'components/other-offers';
import { TReview } from 'types/review.ts';
import { Helmet } from 'react-helmet-async';
import { TOfferItem } from 'types/offer-item.ts';

type TOfferPageProps = {
  offers: TOfferItem[];
  offersDetail: TOfferDetail[];
  reviews: TReview[];
};

function OfferPage({ offers, offersDetail, reviews }: TOfferPageProps) {
  const { id } = useParams();
  const currentOffer = offersDetail.find((item) => item.id === id);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const nearOffers = Object.values(
    offers.reduce<{ [key: string]: TOfferItem }>((result, offer) => {
      if (offer.city.name === currentOffer.city.name) {
        if (offer.id === id) {
          result['0'] = offer;
        } else {
          result[Object.keys(result).length] = offer;
        }
      }

      return result;
    }, {}),
  ).slice(0, 3);

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
