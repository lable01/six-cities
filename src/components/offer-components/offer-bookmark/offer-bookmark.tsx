import clsx from 'clsx';
import { memo } from 'react';
import { SizesBookmark } from 'components/offer-components/offer-bookmark/const.ts';
import { useOfferBookmark } from 'hooks/use-offer-bookmark/use-offer-bookmark.ts';
import { useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import { AuthorizationStatus } from 'const/const.ts';

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
  const size = SizesBookmark[type];

  const { isFavorite, isFavoriteText, handleClick } = useOfferBookmark(
    initialIsFavorite,
    offerId,
  );
  const userStatus =
    useAppSelector(userSelectors.status) === AuthorizationStatus.Auth;
  return (
    <button
      className={clsx(
        `${className}__bookmark-button button`,
        userStatus && isFavorite && 'place-card__bookmark-button--active',
      )}
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
export default memo(OfferBookmark);
