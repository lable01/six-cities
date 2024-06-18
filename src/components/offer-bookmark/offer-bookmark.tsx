import clsx from 'clsx';
import { SizesBookmark } from '../../const.ts';
import { useAppDispatch } from 'hooks/store';
import { changeFavorite } from 'store/thunks/favorites.ts';
import { useCallback, useState } from 'react';

type BookmarkType = keyof typeof SizesBookmark;

type TOfferBookmark = {
  isFavorite: boolean;
  type: BookmarkType;
  className: 'place-card' | 'offer';
  offerId: string;
};

function OfferBookmark({
  type,
  isFavorite: initialIsFavorite,
  className,
  offerId,
}: TOfferBookmark) {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const size = SizesBookmark[type];
  const classIsFavorite = isFavorite
    ? ' place-card__bookmark-button--active'
    : '';
  const isFavoriteText = isFavorite ? 'In bookmarks' : 'To bookmarks';

  const handleClick = useCallback(() => {
    const newStatus = !isFavorite;
    setIsFavorite(newStatus);
    dispatch(changeFavorite({ offerId, status: Number(!isFavorite) }));
  }, [dispatch, isFavorite, offerId]);

  return (
    <button
      className={clsx(`${className}__bookmark-button button`, classIsFavorite)}
      type="button"
      onClick={handleClick}
    >
      <svg
        className="place-card__bookmark-icon"
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
