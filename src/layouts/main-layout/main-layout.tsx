
import Header from 'components/header';
import {Outlet, useLocation} from 'react-router-dom';
import clsx from 'clsx';

function MainLayout(): JSX.Element {
  const { pathname } = useLocation();
  const headerLoginClass = (pathname === '/login') ? 'page--login' : 'page--main';
  const headerClass = clsx(
    'page page--gray',
    headerLoginClass
  );
  return (
    <div className={headerClass}>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
