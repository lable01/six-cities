import { Link } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import { useAuth } from 'hooks/use-auth/use-auth.tsx';
import { TextSignAuth } from 'components/header-nav/const.ts';
import { logout } from 'store/thunks/auth.ts';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';

function HeaderNav() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAuth();
  const info = useAppSelector(userSelectors.info);

  const textSignAuth = authorizationStatus ? TextSignAuth.Out : TextSignAuth.In;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div
              className="header__avatar-wrapper user__avatar-wrapper"
              style={{ backgroundImage: `url(${info?.avatarUrl})` }}
            ></div>
            {authorizationStatus && info && (
              <>
                <span className="header__user-name user__name">
                  {info.email}
                </span>
                <span className="header__favorite-count">3</span>
              </>
            )}
          </a>
        </li>
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
