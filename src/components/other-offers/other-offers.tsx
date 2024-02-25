import { TOfferDetail } from 'types/offer-detail.ts';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../const.ts';

type TOtherOffersProps = {
  offers: TOfferDetail[];
};

function OtherOffers({ offers }: TOtherOffersProps) {
  const { id } = useParams();
  const otherOffers = offers.filter((offer) => offer.id !== id);
  if (!otherOffers) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {otherOffers.slice(0, 3).map((otherOffer) => (
          <article key={otherOffer.id} className="near-places__card place-card">
            <div className="near-places__image-wrapper place-card__image-wrapper">
              <Link to={`${AppRoute.Offer}/${otherOffer.id}`}>
                <img
                  className="place-card__image"
                  src={otherOffer.previewImage}
                  width="260"
                  height="200"
                  alt="Place image"
                />
              </Link>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">
                    &euro;{otherOffer.price}
                  </b>
                  <span className="place-card__price-text">
                    &#47;&nbsp;night
                  </span>
                </div>
                <button
                  className="place-card__bookmark-button place-card__bookmark-button--active button"
                  type="button"
                >
                  <svg
                    className="place-card__bookmark-icon"
                    width="18"
                    height="19"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={`${AppRoute.Offer}/${otherOffer.id}`}>
                  {otherOffer.title}
                </Link>
              </h2>
              <p className="place-card__type">{otherOffer.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OtherOffers;
