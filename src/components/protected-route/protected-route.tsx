import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppRoute, RequestStatus } from '../../const.ts';
import { useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import Loader from 'components/loader';

type TPrivateRouteProps = {
  children: ReactNode;
  onlyUnAuth?: boolean;
};

function ProtectedRoute({ children, onlyUnAuth }: TPrivateRouteProps) {
  const location = useLocation();
  const user = useAppSelector(userSelectors.info);
  const requestStatus = useAppSelector(userSelectors.requestStatus);

  if (requestStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  if (onlyUnAuth && user) {
    // если будут ошибки по ts то переустанови плиз зависимости npm, хз в чем проблема здесь у меня все ок, может какую нить зависимость накатывал в ходе проекта, хз
    // редирект на главную после успешной авторизации плюс страница только для не авторизированных пользователей
    const from = location.state?.from || { pathname: AppRoute.Main };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    // момент навигации на предыдущую страницу после авторизации
    return <Navigate state={{ from: location }} to={AppRoute.Login} />;
  }

  return children;
}

export default ProtectedRoute;
