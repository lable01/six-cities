import Map from 'components/map';
import { TOfferDetail } from 'types/offer-detail.ts';
import { TReview } from 'types/review.ts';
import ReviewsBlock from 'components/reviews-block';
import { TOfferItem } from 'types/offer-item.ts';

type TOfferDetailsProps = {
  offer: TOfferDetail;
  reviews: TReview[];
  nearOffers: TOfferItem[];
};

function OfferDetails({ offer, reviews, nearOffers }: TOfferDetailsProps) {
  const {
    id,
    images,
    isPremium,
    title,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    rating,
    host,
  } = offer;

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.slice(0, 6).map((image) => (
            <div key={image} className="offer__image-wrapper">
              <img className="offer__image" src={image} alt="Photo studio" />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          {isPremium && (
            <div className="offer__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{title}</h1>
            <button className="offer__bookmark-button button" type="button">
              <svg className="offer__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">{type}</li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((good) => (
                <li key={good} className="offer__inside-item">
                  {good}
                </li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">
              <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                <img
                  className="offer__avatar user__avatar"
                  src={host.avatarUrl}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="offer__user-name">{host.name}</span>
              <span className="offer__user-status">{host.isPro}</span>
            </div>
            <div className="offer__description">
              <p className="offer__text">
                A quiet cozy and picturesque that hides behind a a river by the
                unique lightness of Amsterdam. The building is green and from
                18th century.
              </p>
              <p className="offer__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
              </p>
            </div>
          </div>
          <ReviewsBlock reviews={reviews} />
        </div>
      </div>
      <Map className="offer__map" offers={nearOffers} activeOfferId={id} />
    </section>
  );
}

export default OfferDetails;
