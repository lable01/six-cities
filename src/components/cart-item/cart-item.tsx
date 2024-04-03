import { Link } from 'react-router-dom';
import { TOfferItem } from 'types/offer-item.ts';
import clsx from 'clsx';
import { AppRoute, SizesCards } from '../../const';

type TCartItemProps = {
  offer: TOfferItem;
  onCardHover?: (offerId: string | null) => void;
  typeCard: 'cities' | 'near-places' | 'favorites';
};

function CartItem({ offer, onCardHover, typeCard }: TCartItemProps) {
  const { id, isPremium, previewImage, title, price, isFavorite, type } = offer;
  const classIsFavorite = isFavorite
    ? ' place-card__bookmark-button--active'
    : '';
  const size = SizesCards[typeCard];
  function handleMouseEnter() {
    onCardHover?.(id);
  }
  function handleMouseLeave() {
    onCardHover?.(null);
  }

  return (
    <article
      className={`${typeCard}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${typeCard}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={size.width}
            height={size.height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={clsx(
              'place-card__bookmark-button button',
              classIsFavorite,
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CartItem;
