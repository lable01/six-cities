import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import { ClassName, RequestStatus } from '../../const';
import { useParams } from 'react-router-dom';
import OfferDetails from 'components/offer-details';
import OtherOffers from 'components/other-offers';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { offerSelectors } from 'store/slices/offer.ts';
import { useEffect } from 'react';
import { fetchNearOffers, fetchOffer } from 'store/thunks/offers.ts';
import { fetchComments } from 'store/thunks/comments.ts';
import { reviewsSelectors } from 'store/slices/reviews.ts';
import { offersSelectors } from 'store/slices/offers.ts';
import Loader from 'components/loader';
import { isArrayEmpty } from '../../utils/function.ts';

function OfferPage() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const currentOffer = useAppSelector(offerSelectors.offer);
  const reviews = useAppSelector(reviewsSelectors.reviews);
  const nearOffers = useAppSelector(offerSelectors.nearByOffers);
  const status = useAppSelector(offersSelectors.status);
  const loadingStatuses = [RequestStatus.Idle, RequestStatus.Loading];

  useEffect(() => {
    if (currentOffer === null) {
      dispatch(fetchOffer(id as string));
    }
  }, [dispatch, currentOffer, id]);

  useEffect(() => {
    if (isArrayEmpty(nearOffers)) {
      dispatch(fetchNearOffers(id as string));
    }
  }, [dispatch, nearOffers, id]);

  useEffect(() => {
    if (isArrayEmpty(reviews)) {
      dispatch(fetchComments(id as string));
    }
  }, [dispatch, reviews, id]);

  // useEffect(() => {
  //   Promise.all([
  //     dispatch(fetchOffer(id as string)),
  //     dispatch(fetchNearOffers(id as string)),
  //     dispatch(fetchComments(id as string)),
  //   ]);
  // }, [dispatch, id, currentOffer]);

  if (loadingStatuses.includes(status)) {
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
