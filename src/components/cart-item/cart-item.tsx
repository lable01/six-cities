import { Link } from 'react-router-dom';
import { TOfferItem } from 'types/offer-item.ts';
import { AppRoute, ClassNamePages, SizesCards } from '../../const';
import OfferBadge from 'components/offer-badge';
import OfferBookmark from 'components/offer-bookmark';

type TCartItemProps = {
  offer: TOfferItem;
  onCardHover?: (offerId: string | null) => void;
  typeCard: 'cities' | 'near-places' | 'favorites';
};

function CartItem({ offer, onCardHover, typeCard }: TCartItemProps) {
  const { id, isPremium, previewImage, title, price, isFavorite, type } = offer;
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
      <OfferBadge className={ClassNamePages.Main} isPremium={isPremium} />
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
          <OfferBookmark
            className={ClassNamePages.Main}
            type="offers"
            isFavorite={isFavorite}
          />
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
