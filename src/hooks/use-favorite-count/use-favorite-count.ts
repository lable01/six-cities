import { useAppDispatch, useAppSelector } from 'hooks/store';
import {
  favoritesActions,
  favoritesSelectors,
} from 'store/slices/favorites.ts';
import { useEffect } from 'react';
import { AuthorizationStatus, RequestStatus } from '../../const.ts';
import { fetchFavorites } from 'store/thunks/favorites.ts';
import { userSelectors } from 'store/slices/user.ts';

function useFavoriteCount() {
  const dispatch = useAppDispatch();
  const favoriteStatus = useAppSelector(favoritesSelectors.favoriteStatus);
  const userStatus = useAppSelector(userSelectors.status);
  const count = useAppSelector(favoritesSelectors.favorites).length;

  useEffect(() => {
    if (
      favoriteStatus === RequestStatus.Idle &&
      userStatus === AuthorizationStatus.Auth
    ) {
      dispatch(favoritesActions.fetchFavorites());
    }
  }, [favoriteStatus, userStatus, fetchFavorites]);

  return count;
}

export default useFavoriteCount;
