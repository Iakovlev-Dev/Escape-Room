import { Helmet } from 'react-helmet-async';
import Footer from '../../componets/footer/footer';
import Header from '../../componets/header/header';
import { FormEvent, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginAction } from '../../store/api-action';
import { AuthData } from '../../types/type-auth-data';
import { isUserAuthorezed, selectQuestId } from '../../store/data-process/selectors';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function PageLogin () {
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const isAuth = useAppSelector(isUserAuthorezed);
  const questId = useAppSelector(selectQuestId);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: emailRef.current.value,
        password: passwordRef.current.value
      });
    }

  };

  if (isAuth && (!questId)) {
    return <Navigate to={AppRoute.Main} />;
  }

  if (isAuth && (questId)) {
    return <Navigate to={`/quest/${questId}/booking`} />;
  }

  return (
    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room. Login</title>
      </Helmet>
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              className="login-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">
                E&nbsp;–&nbsp;mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Адрес электронной почты"
                      required
                      ref={emailRef}
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">
                  Пароль
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Пароль"
                      required
                      ref={passwordRef}
                    />
                  </div>
                </div>
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                >
                Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
                <input
                  type="checkbox"
                  id="id-order-agreement"
                  name="user-agreement"
                  required
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
            Я&nbsp;согласен с
                  <a className="link link--active-silver link--underlined" href="#">
              правилами обработки персональных данных
                  </a>
            &nbsp;и пользовательским соглашением
                </span>
              </label>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
