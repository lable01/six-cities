import MainLayout from 'layouts/main-layout';
import Header from 'components/header-components/header';
import { ClassName } from '../../const';
import { useParams } from 'react-router-dom';
import OfferDetails from 'components/offer-components/offer-details';
import OtherOffers from 'components/offer-components/other-offers';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import {
  offerAction,
  offerSelectors,
  selectNearByStatuses,
  selectOfferStatuses,
} from 'store/slices/offer.ts';
import { useEffect } from 'react';
import { reviewsActions, reviewsSelectors } from 'store/slices/reviews.ts';
import Loader from 'components/loader';

function OfferPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const currentOffer = useAppSelector(offerSelectors.offer);
  const reviews = useAppSelector(reviewsSelectors.reviews);
  const nearOffers = useAppSelector(offerSelectors.nearByOffers);
  const status = useAppSelector(selectOfferStatuses);
  const nearByStatus = useAppSelector(selectNearByStatuses);

  useEffect(() => {
    if (id) {
      dispatch(offerAction.fetchOffer(id));
      dispatch(offerAction.fetchNearOffers(id));
      dispatch(reviewsActions.fetchComments(id));
    }
  }, [dispatch, id]);

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
          nearOffers={nearOffers}
        />
        <OtherOffers nearOffers={nearOffers} />
      </main>
    </MainLayout>
  );
}

export default OfferPage;
