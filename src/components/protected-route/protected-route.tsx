import { AuthorizationStatus } from '../../const';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

type TPrivateRouteProps = {
  children: ReactNode;
  redirectTo: string;
  restrictedFor: string | ReactNode;
};

function ProtectedRoute({
  restrictedFor,
  redirectTo,
  children,
}: TPrivateRouteProps) {
  const authorizationStatus = AuthorizationStatus.Auth;
  return restrictedFor === authorizationStatus ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

export default ProtectedRoute;
