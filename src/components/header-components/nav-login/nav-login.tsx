import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, RequestStatus } from '../../../const';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { logout } from 'store/thunks/auth';
import { TUser } from 'types/user.ts';
import { favoritesSelectors } from 'store/slices/favorites.ts';
import { userSelectors } from 'store/slices/user.ts';
import { useEffect } from 'react';
import { fetchFavorites } from 'store/thunks/favorites.ts';

type TNavLoginProps = {
  info: TUser;
};

function NavLogin({ info }: TNavLoginProps) {
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

  return (
    <>
      <li className="header__nav-item user">
        <Link
          to={AppRoute.Favorites}
          className="header__nav-link header__nav-link--profile"
        >
          <div
            className="header__avatar-wrapper user__avatar-wrapper"
            style={{ backgroundImage: `url(${info?.avatarUrl})` }}
          ></div>
          <span className="header__user-name user__name">{info.email}</span>
          <span className="header__favorite-count">{favoriteCount}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" onClick={handleLogout}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
}

export default NavLogin;
