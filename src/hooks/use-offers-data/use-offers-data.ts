import { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import {
  offerAction,
  offerSelectors,
  selectNearByStatuses,
  selectOfferStatuses,
} from 'store/slices/offer.ts';
import { reviewsActions, reviewsSelectors } from 'store/slices/reviews.ts';
import { NumberCitiesNearby } from 'const/const.ts';

function useOffersData() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const currentOffer = useAppSelector(offerSelectors.offer);
  const reviews = useAppSelector(reviewsSelectors.reviews);
  const nearOffers = useAppSelector(offerSelectors.nearByOffers);
  const status = useAppSelector(selectOfferStatuses);
  const nearByStatus = useAppSelector(selectNearByStatuses);

  const nearCurrentOffers = nearOffers.slice(
    NumberCitiesNearby.Min,
    NumberCitiesNearby.Max,
  );

  const fetchOfferData = useCallback(() => {
    if (id) {
      dispatch(offerAction.fetchOffer(id));
      dispatch(offerAction.fetchNearOffers(id));
      dispatch(reviewsActions.fetchComments(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    fetchOfferData();
  }, [fetchOfferData]);

  return {
    currentOffer,
    reviews,
    nearCurrentOffers,
    status,
    nearByStatus,
  };
}

export default useOffersData;
