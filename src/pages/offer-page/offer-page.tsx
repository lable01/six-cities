import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import { AppRoute, ClassName } from '../../const';
import { TOfferDetail } from 'types/offer-detail.ts';
import { Navigate, useParams } from 'react-router-dom';
import OfferDetails from 'components/offer-details';
import OtherOffers from 'components/other-offers';

type TOfferPageProps = {
  offers: TOfferDetail[];
};

function OfferPage({ offers }: TOfferPageProps) {
  const { id } = useParams();
  const offer = offers.find((item) => item.id === id);
  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <MainLayout header={<Header />} className={ClassName.Offer}>
      <main className="page__main page__main--offer">
        <OfferDetails offer={offer} />
        <OtherOffers offers={offers} />
      </main>
    </MainLayout>
  );
}

export default OfferPage;
