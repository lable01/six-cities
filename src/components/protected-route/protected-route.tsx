import {AuthorizationStatus} from '../../const.ts';
import {Navigate} from 'react-router-dom';

type TPrivateRouteProps = {
  children: JSX.Element;
  redirectTo: string;
  restrictedFor: string|JSX.Element;
}

function ProtectedRoute({restrictedFor, redirectTo, children}: TPrivateRouteProps) {
  const authorizationStatus = AuthorizationStatus.Auth;
  return restrictedFor === authorizationStatus ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

export default ProtectedRoute;
