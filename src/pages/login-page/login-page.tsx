import MainLayout from 'layouts/main-layout';
import Header from 'components/header';
import { ClassName } from '../../const';
import { Helmet } from 'react-helmet-async';
import { FormEvent, ReactEventHandler, useState } from 'react';
import { useAppDispatch } from 'hooks/store';
import { login } from 'store/thunks/auth.ts';

type HTMLLoginForm = HTMLFormElement & {
  email: HTMLInputElement;
  password: HTMLInputElement;
};

type ChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

function LoginPage() {
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
    dispatch(login(formData));
  }

  return (
    <MainLayout header={<Header />} className={ClassName.Login}>
      <Helmet>
        <title>Login six cities service for travelers - official website</title>
      </Helmet>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
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
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}

export default LoginPage;
