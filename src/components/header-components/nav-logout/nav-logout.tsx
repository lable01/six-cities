import { Link } from 'react-router-dom';
import { AppRoute, LoadingStatuses } from 'const/const.ts';
import { TUser } from 'types/user.ts';
import useNavLogout from 'hooks/use-nav-login';
import Loader from 'components/loader';
import { useAppSelector } from 'hooks/store';
import { favoritesSelectors } from 'store/slices/favorites.ts';

type TNavLoginProps = {
  info: TUser;
};

function NavLogout({ info }: TNavLoginProps) {
  const { favoriteCount, handleLogout } = useNavLogout();
  const favoriteStatus = useAppSelector(favoritesSelectors.favoriteStatus);

  if (LoadingStatuses.includes(favoriteStatus)) {
    return <Loader />;
  }

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
