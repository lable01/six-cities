import clsx from 'clsx';
import {
  AppRoute,
  AuthorizationStatus,
  SizesBookmark,
} from '../../../const.ts';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { changeFavorite } from 'store/thunks/favorites.ts';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userSelectors } from 'store/slices/user.ts';
import { TFavoriteStatus } from 'types/favorite-status.ts';

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
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);
  const size = SizesBookmark[type];
  const userStatus = useAppSelector(userSelectors.status);
  const isFavoriteText =
    userStatus === AuthorizationStatus.Auth && isFavorite
      ? 'In bookmarks'
      : 'To bookmarks';

  const handleClick = useCallback(() => {
    if (userStatus === AuthorizationStatus.Auth) {
      const newStatus = !isFavorite;
      setIsFavorite(newStatus);
      const favoriteStatus: TFavoriteStatus = newStatus ? 1 : 0;
      dispatch(changeFavorite({ offerId, status: favoriteStatus }));
    } else {
      navigate(AppRoute.Login);
    }
  }, [dispatch, isFavorite, offerId, userStatus, navigate]);

  return (
    <button
      className={clsx(
        `${className}__bookmark-button button`,
        isFavorite && 'place-card__bookmark-button--active',
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
export default OfferBookmark;
