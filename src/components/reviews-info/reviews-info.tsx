import { TReviewType } from 'types/review.ts';
import { getCurrentDate, getStarsWidth } from '../../utils/function.ts';

type TReviewsInfo = {
  review: TReviewType;
};

function ReviewsInfo({ review }: TReviewsInfo) {
  const {
    user: { name, avatarUrl },
    date,
    comment,
    rating,
  } = review;
  const starWidth = getStarsWidth(rating);

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
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${starWidth}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={getCurrentDate(date)}>
          {getCurrentDate(date, false)}
        </time>
      </div>
    </li>
  );
}

export default ReviewsInfo;
