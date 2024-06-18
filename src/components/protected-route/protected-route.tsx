import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import { AppRoute, AuthorizationStatus } from '../../const.ts';
import Loader from 'components/loader';

type TPrivateRouteProps = {
  children: ReactNode;
  onlyUnAuth?: boolean;
};

function ProtectedRoute({ children, onlyUnAuth }: TPrivateRouteProps) {
  const location = useLocation();
  const user = useAppSelector(userSelectors.info);
  const status = useAppSelector(userSelectors.status);

  if (status !== AuthorizationStatus.Auth) {
    return <Loader />;
  }

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
