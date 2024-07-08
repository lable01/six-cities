import { TReview } from 'types/review.ts';
import { getCurrentDate } from '../../../utils/function.ts';
import RatingStars from 'components/rating-stars';
import { ClassNamePages } from '../../../const.ts';
import { memo } from 'react';

type TReviewsInfo = {
  review: TReview;
};

function ReviewsInfo({ review }: TReviewsInfo) {
  const {
    user: { name, avatarUrl },
    date,
    comment,
    rating,
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <RatingStars type={ClassNamePages.Reviews} rating={rating} />
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={getCurrentDate(date)}>
          {getCurrentDate(date, false)}
        </time>
      </div>
    </li>
  );
}

export default memo(ReviewsInfo);
