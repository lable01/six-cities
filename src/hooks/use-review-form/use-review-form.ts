import { useAppDispatch, useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import { useNavigate } from 'react-router-dom';
import { reviewsSelectors } from 'store/slices/reviews.ts';
import { Dispatch, FormEvent, SetStateAction, useCallback } from 'react';
import {
  AppRoute,
  AuthorizationStatus,
  ErrorToast,
  RequestStatus,
} from 'const/const.ts';
import { postComment } from 'store/thunks/comments.ts';
import { InitialReviewState } from 'components/reviews-components/reviews-form/const.ts';
import { toast } from 'react-toastify';
import { ReviewState } from 'types/review-state.ts';

type HTMLReviewForm = HTMLFormElement & {
  comment: HTMLInputElement;
  rating: HTMLInputElement;
};

type userReviewFormProps = {
  activeOfferId: string;
  setReview: Dispatch<SetStateAction<ReviewState>>;
  review: ReviewState;
};

function useReviewForm({
  activeOfferId,
  review,
  setReview,
}: userReviewFormProps) {
  const dispatch = useAppDispatch();
  const userStatus = useAppSelector(userSelectors.status);
  const navigate = useNavigate();
  const reviewStatus = useAppSelector(reviewsSelectors.reviewsStatus);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLReviewForm>) => {
      event.preventDefault();

      if (userStatus === AuthorizationStatus.Auth) {
        dispatch(postComment({ body: review, offerId: activeOfferId }));

        if (reviewStatus === RequestStatus.Success) {
          setReview(InitialReviewState);
        }
      } else {
        toast.error(ErrorToast.ReviewFormError);
        navigate(AppRoute.Login);
      }
    },
    [
      dispatch,
      userStatus,
      review,
      activeOfferId,
      reviewStatus,
      navigate,
      setReview,
    ],
  );

  return { handleSubmit };
}

export default useReviewForm;
