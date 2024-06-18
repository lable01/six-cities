import { useAppDispatch, useAppSelector } from 'hooks/store';
import {
  favoritesActions,
  favoritesSelectors,
} from 'store/slices/favorites.ts';
import { useEffect } from 'react';
import { RequestStatus } from '../../const.ts';
import { fetchFavorites } from 'store/thunks/favorites.ts';

function useFavoriteCount() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(favoritesSelectors.favoriteStatus);
  const count = useAppSelector(favoritesSelectors.favorites).length;

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      dispatch(favoritesActions.fetchFavorites());
    }
  }, [status, fetchFavorites]);

  return count;
}

export default useFavoriteCount;
