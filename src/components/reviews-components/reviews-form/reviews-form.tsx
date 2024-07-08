import {
  FormEvent,
  ReactEventHandler,
  useCallback,
  useState,
  memo,
} from 'react';
import { Fragment } from 'react';
import { AppRoute, AuthorizationStatus, ReviewLength } from '../../../const.ts';
import { rating } from 'components/login-form/const.ts';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { postComment } from 'store/thunks/comments.ts';
import { userSelectors } from 'store/slices/user.ts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

type HTMLReviewForm = HTMLFormElement & {
  comment: HTMLInputElement;
  rating: HTMLInputElement;
};

type TReviewsForm = {
  activeOfferId: string;
};

function ReviewsForm({ activeOfferId }: TReviewsForm) {
  const dispatch = useAppDispatch();
  const [review, setReview] = useState({
    comment: '',
    rating: 0,
  });
  const userStatus = useAppSelector(userSelectors.status);
  const navigate = useNavigate();

  const isValidReviews =
    review.comment.length < ReviewLength.min ||
    review.comment.length > ReviewLength.max ||
    review.rating === 0;

  const handleFieldChange: TChangeHandler = (event) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value } = target;
    setReview({ ...review, [name]: name === 'rating' ? Number(value) : value });
  };

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLReviewForm>) => {
      event.preventDefault();

      if (userStatus === AuthorizationStatus.Auth) {
        dispatch(postComment({ body: review, offerId: activeOfferId }));
      } else {
        toast.error(
          'sending reviews is possible only to authorized users, please log in',
        );
        navigate(AppRoute.Login);
      }
    },
    [review, activeOfferId, dispatch, userStatus, navigate],
  );

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({ value, title }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              onChange={handleFieldChange}
              type="radio"
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        onChange={handleFieldChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{ReviewLength.min} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isValidReviews}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default memo(ReviewsForm);
