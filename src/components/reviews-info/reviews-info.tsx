import { TOfferDetail } from 'types/offer-detail.ts';
import { date } from '../../const.ts';
import { getCurrentDate } from '../../utils/function.ts';

type TOfferReviewsInfo = {
  offer: TOfferDetail;
};
function ReviewsInfo({ offer }: TOfferReviewsInfo) {
  const { host } = offer;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={host.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{host.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          A quiet cozy and picturesque that hides behind a a river by the unique
          lightness of Amsterdam. The building is green and from 18th century.
        </p>
        <time className="reviews__time" dateTime={getCurrentDate(date, true)}>
          {getCurrentDate(date, false)}
        </time>
      </div>
    </li>
  );
}

export default ReviewsInfo;
