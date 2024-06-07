import clsx from 'clsx';
import { SizesBookmark } from '../../const.ts';

type BookmarkType = keyof typeof SizesBookmark;

type TOfferBookmark = {
  isFavorite: boolean;
  type: BookmarkType;
  className: 'place-card' | 'offer';
};

function OfferBookmark({ type, isFavorite, className }: TOfferBookmark) {
  const size = SizesBookmark[type];
  const classIsFavorite = isFavorite
    ? ' place-card__bookmark-button--active'
    : '';
  const isFavoriteText = isFavorite ? 'In bookmarks' : 'To bookmarks';

  return (
    <button
      className={clsx(`${className}__bookmark-button button`, classIsFavorite)}
      type="button"
    >
      <svg
        className="offer__bookmark-icon"
        width={size.width}
        height={size.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavoriteText}</span>
    </button>
  );
}
export default OfferBookmark;
