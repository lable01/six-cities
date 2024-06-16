import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth } from 'hooks/use-auth/use-auth.tsx';

type TPrivateRouteProps = {
  children: ReactNode;
  redirectTo: string;
};

function ProtectedRoute({ redirectTo, children }: TPrivateRouteProps) {
  const authorizationStatus = useAuth();
  console.log(authorizationStatus);
  return authorizationStatus ? <Navigate to={redirectTo} /> : children;
}

export default ProtectedRoute;
