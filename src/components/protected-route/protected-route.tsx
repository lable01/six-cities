import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute, RequestStatus } from '../../const.ts';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import { checkAuth } from 'store/thunks/auth.ts';
import Loader from 'components/loader';

type TPrivateRouteProps = {
  children: ReactNode;
  onlyUnAuth?: boolean;
};

function ProtectedRoute({ children, onlyUnAuth }: TPrivateRouteProps) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const user = useAppSelector(userSelectors.info);
  const requestStatus = useAppSelector(userSelectors.requestStatus);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (requestStatus === RequestStatus.Loading) {
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
