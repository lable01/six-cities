import { useState } from 'react';
import useFieldChange from 'hooks/use-field-change';
import {
  InitialLoginState,
  PasswordMinLength,
} from 'components/login-form/const.ts';
import { useLoginForm } from 'hooks/use-login-form/use-login-form.ts';

function LoginForm() {
  const [formData, setFormData] = useState(InitialLoginState);
  const handleChange = useFieldChange({
    state: formData,
    setState: setFormData,
  });
  const { handleSubmit } = useLoginForm(formData);

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
          minLength={PasswordMinLength}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
