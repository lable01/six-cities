import { Fragment, memo, useState } from 'react';
import { ReviewLength } from './const.ts';
import { Rating } from 'components/login-form/const.ts';
import { InitialReviewState } from 'components/reviews-components/reviews-form/const.ts';
import useReviewForm from 'hooks/use-review-form';
import useFieldChange from 'hooks/use-field-change';
import { getValidReview } from 'components/reviews-components/reviews-form/function.ts';

type TReviewsForm = {
  activeOfferId: string;
};

function ReviewsForm({ activeOfferId }: TReviewsForm) {
  const [review, setReview] = useState(InitialReviewState);
  const isValidReviews = getValidReview(review);
  const handleFieldChange = useFieldChange({
    state: review,
    setState: setReview,
  });
  const { handleSubmit } = useReviewForm({ activeOfferId, setReview, review });

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
        {Rating.map(({ value, title }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              checked={review.rating === value}
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
        value={review.comment}
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
