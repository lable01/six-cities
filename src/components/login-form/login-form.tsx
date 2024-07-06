import { FormEvent, ReactEventHandler, useState } from 'react';
import { login } from 'store/thunks/auth.ts';
import { useAppDispatch } from 'hooks/store';
import { toast } from 'react-toastify';
import { validateloginForm } from '../../utils/function.ts';

type HTMLLoginForm = HTMLFormElement & {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

function LoginForm() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(event: FormEvent<HTMLLoginForm>) {
    event.preventDefault();

    const validationErrors = validateloginForm(formData);
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

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
          minLength={6}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
