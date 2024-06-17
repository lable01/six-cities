import { useAppSelector } from 'hooks/store';
import { userSelectors } from 'store/slices/user.ts';
import { AuthorizationStatus } from '../../const.ts';

export function useAuth() {
  const status = useAppSelector(userSelectors.status);

  return status === AuthorizationStatus.Auth;
}
