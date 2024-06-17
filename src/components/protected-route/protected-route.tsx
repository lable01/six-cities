import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import { AppRoute } from '../../const.ts';

type TPrivateRouteProps = {
  children: ReactNode;
  onlyUnAuth?: boolean;
};

function ProtectedRoute({ children, onlyUnAuth }: TPrivateRouteProps) {
  const location = useLocation();
  const user = useAppSelector(userSelectors.info);

  if (onlyUnAuth && user) {
    const from = location.state?.from || { pathname: AppRoute.Main };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate state={{ from: location }} to={AppRoute.Login} />;
  }

  return children;
}

export default ProtectedRoute;
