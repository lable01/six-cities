import Map from 'components/map';
import { TOfferDetail } from 'types/offer-detail.ts';
import { TReview } from 'types/review.ts';
import ReviewsBlock from 'components/reviews-block';
import { TOfferItem } from 'types/offer-item.ts';
import OfferGallery from 'components/offer-gallery';
import OfferBadge from 'components/offer-badge';
import OfferBookmark from 'components/offer-bookmark';
import OfferFeatures from 'components/offer-features';
import { ClassNameOffer } from '../../const.ts';
import OfferHost from 'components/offer-host';

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
    isFavorite,
    title,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    rating,
    host,
  } = offer;
  console.log(offer);

  return (
    <section className="offer">
      <div className="offer__gallery-container container">
        <OfferGallery images={images} type={type} />
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <OfferBadge className={ClassNameOffer.Offer} isPremium={isPremium} />
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{title}</h1>
            <OfferBookmark
              className={ClassNameOffer.Offer}
              type="offerDetail"
              isFavorite={isFavorite}
            />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: '80%' }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <OfferFeatures
            type={type}
            bedrooms={bedrooms}
            maxAdults={maxAdults}
          />
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
          <OfferHost host={host} />
          <ReviewsBlock reviews={reviews} />
        </div>
      </div>
      <Map className="offer__map" offers={nearOffers} activeOfferId={id} />
    </section>
  );
}

export default OfferDetails;
