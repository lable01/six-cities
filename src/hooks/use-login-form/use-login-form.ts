import { FormEvent } from 'react';
import { login } from 'store/thunks/auth.ts';
import { useAppDispatch } from 'hooks/store';
import { toast } from 'react-toastify';
import { validateLoginForm } from 'utils/function.ts';
import { InitialLoginState } from 'components/login-form/const.ts';

type HTMLLoginForm = HTMLFormElement & {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

export function useLoginForm(formData: typeof InitialLoginState) {
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent<HTMLLoginForm>) {
    event.preventDefault();

    const validationErrors = validateLoginForm(formData);
    const validateEmail = () =>
      validationErrors.email && toast.error(validationErrors.email);
    const validatePassword = () =>
      validationErrors.password && toast.error(validationErrors.password);

    if (
      Object.keys(validationErrors).every(
        (key) => !validationErrors[key as keyof typeof validationErrors],
      )
    ) {
      dispatch(login(formData));
    } else {
      validateEmail();
      validatePassword();
    }
  }

  return { handleSubmit };
}
