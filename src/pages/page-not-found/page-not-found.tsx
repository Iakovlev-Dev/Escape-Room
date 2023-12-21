import { Helmet } from 'react-helmet-async';
import Footer from '../../componets/footer/footer';
import Header from '../../componets/header/header';

export default function PageNotFound () {
  return (
    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room. Not found</title>
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
            <h1 className="title title--size-s login-form__title">Страница не найдена</h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
