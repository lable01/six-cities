import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { fetchFavorites } from 'store/thunks/favorites.ts';
import { logout } from 'store/thunks/auth';
import { AuthorizationStatus, RequestStatus } from 'const/const.ts';
import { favoritesSelectors } from 'store/slices/favorites.ts';
import { userSelectors } from 'store/slices/user.ts';

function useNavLogout() {
  const dispatch = useAppDispatch();
  const favoriteStatus = useAppSelector(favoritesSelectors.favoriteStatus);
  const userStatus = useAppSelector(userSelectors.status);
  const favoriteCount = useAppSelector(favoritesSelectors.favorites).length;

  useEffect(() => {
    if (
      favoriteStatus === RequestStatus.Idle &&
      userStatus === AuthorizationStatus.Auth
    ) {
      dispatch(fetchFavorites());
    }
  }, [favoriteStatus, userStatus, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    favoriteCount,
    handleLogout,
  };
}

export default useNavLogout;
