import { useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import { AuthorizationStatus } from 'const/const.ts';

function useAuth() {
  const status = useAppSelector(userSelectors.status);

  return status === AuthorizationStatus.Auth;
}

export default useAuth;
