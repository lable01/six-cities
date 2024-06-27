import { FormEvent, ReactEventHandler, useState } from 'react';
import { login } from 'store/thunks/auth.ts';
import { useAppDispatch } from 'hooks/store';
import styles from './styles.module.scss';

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
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const handleChange: ChangeHandler = (evt) => {
    const { name, value } = evt.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  function validateForm() {
    const newErrors = {
      email: '',
      password: '',
    };
    let isValid = true;

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    } else if (
      !/[A-Za-z]/.test(formData.password) ||
      !/\d/.test(formData.password)
    ) {
      newErrors.password =
        'Password must contain at least one letter and one number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  function handleSubmit(event: FormEvent<HTMLLoginForm>) {
    event.preventDefault();
    if (validateForm()) {
      dispatch(login(formData));
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
        {errors.email && <span className={styles.error}>{errors.email}</span>}
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
        {errors.password && (
          <span className={styles.error}>{errors.password}</span>
        )}
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
