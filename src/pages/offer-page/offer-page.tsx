import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import { ClassName, RequestStatus } from '../../const';
import { useParams } from 'react-router-dom';
import OfferDetails from 'components/offer-details';
import OtherOffers from 'components/other-offers';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { offerAction, offerSelectors } from 'store/slices/offer.ts';
import { useEffect } from 'react';
import { reviewsActions, reviewsSelectors } from 'store/slices/reviews.ts';
import Loader from 'components/loader';
import MainEmpty from 'components/main-empty';

function OfferPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const currentOffer = useAppSelector(offerSelectors.offer);
  const reviews = useAppSelector(reviewsSelectors.reviews);
  const nearOffers = useAppSelector(offerSelectors.nearByOffers);
  const status = useAppSelector(offerSelectors.offerStatus);
  const loadingStatuses = [RequestStatus.Idle, RequestStatus.Loading];

  useEffect(() => {
    Promise.all([
      dispatch(offerAction.fetchOffer(id as string)),
      dispatch(offerAction.fetchNearOffers(id as string)),
      dispatch(reviewsActions.fetchComments(id as string)),
    ]);
  }, [dispatch, id]);

  if (loadingStatuses.includes(status)) {
    return <Loader />;
  }

  if (status === RequestStatus.Failed || !currentOffer) {
    return <MainEmpty />;
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
