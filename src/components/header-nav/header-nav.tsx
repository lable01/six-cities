import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { TextSignAuth } from 'components/header-nav/const.ts';
import { logout } from 'store/thunks/auth.ts';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import useFavoriteCount from 'hooks/use-favorite-count';
import useAuth from 'hooks/use-auth';

function HeaderNav() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAuth();
  const info = useAppSelector(userSelectors.info);
  const textSignAuth = authorizationStatus ? TextSignAuth.Out : TextSignAuth.In;
  const favoriteCount = useFavoriteCount();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus && info && (
          <li className="header__nav-item user">
            <a
              className="header__nav-link header__nav-link--profile"
              href={AppRoute.Favorites}
            >
              <div
                className="header__avatar-wrapper user__avatar-wrapper"
                style={{ backgroundImage: `url(${info?.avatarUrl})` }}
              ></div>
              <span className="header__user-name user__name">{info.email}</span>
              <span className="header__favorite-count">{favoriteCount}</span>
            </a>
          </li>
        )}
        <li className="header__nav-item">
          {authorizationStatus ? (
            <a className="header__nav-link" onClick={handleLogout}>
              <span className="header__signout">{textSignAuth}</span>
            </a>
          ) : (
            <Link to={AppRoute.Login} className="header__nav-link">
              <span className="header__signout">{textSignAuth}</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
