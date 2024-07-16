import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from 'const/const.ts';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { favoritesSelectors } from 'store/slices/favorites.ts';
import { userSelectors } from 'store/slices/user.ts';
import { useEffect } from 'react';
import { fetchFavorites } from 'store/thunks/favorites.ts';
import { logout } from 'store/thunks/auth.ts';
import { TUser } from 'types/user.ts';

type TNavLoginProps = {
  info: TUser;
};

function NavLogout({ info }: TNavLoginProps) {
  const dispatch = useAppDispatch();
  const userStatus = useAppSelector(userSelectors.status);
  const favoriteCount = useAppSelector(favoritesSelectors.favorites).length;

  useEffect(() => {
    if (userStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavorites());
    }
  }, [userStatus, dispatch]);

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

export default NavLogout;
