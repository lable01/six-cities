import Header from 'components/header';
// import {AppRoute} from '../../const.ts';
// import {Outlet, useLocation} from 'react-router-dom';
// import clsx from 'clsx';

function MainLayout({children}: JSX.Element) {
  return (
    <div className='page page--gray page--login'>
      <Header />
      {children}
    </div>
  );
}

// type TClassNameProps = {
//   className: {
//     Login: string;
//     Main: string;
//   };
// }
//
// function MainLayout({className}: TClassNameProps): JSX.Element {
//   const { Login: loginClass, Main: mainClass} = className;
//   const { pathname } = useLocation();
//   const headerLoginClass = (pathname === AppRoute.Login) ? loginClass : mainClass;
//   const headerClass = clsx(
//     'page page--gray',
//     headerLoginClass
//   );
//   return (
//     <div className={headerClass}>
//       <Header />
//       <Outlet />
//     </div>
//   );
// }

export default MainLayout;
