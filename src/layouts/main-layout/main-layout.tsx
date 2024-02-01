import Header from 'components/header';
import {AppRoute} from '../../const.ts';
import {Outlet, useLocation} from 'react-router-dom';
import clsx from 'clsx';

type ClassNameProps = {
  className: {
    Login: string;
    Main: string;
  };
}

function MainLayout({className}: ClassNameProps): JSX.Element {
  const { Login: loginClass, Main: mainClass} = className;
  const { pathname } = useLocation();
  const headerLoginClass = (pathname.slice(1) === AppRoute.Login) ? loginClass : mainClass;
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
