import { useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import { memo } from 'react';
import useAuth from 'hooks/use-auth';
import NavLogin from 'components/header-components/nav-login';
import NavLogout from 'components/header-components/nav-logout';

function HeaderNav() {
  const authorizationStatus = useAuth();
  const info = useAppSelector(userSelectors.info);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {info && authorizationStatus ? <NavLogin info={info} /> : <NavLogout />}
      </ul>
    </nav>
  );
}

export default memo(HeaderNav);
