import { Helmet } from 'react-helmet-async';
import Footer from '../../componets/footer/footer';
import Header from '../../componets/header/header';


import BookingSlot from '../../componets/booking-slot/booking-slot';
import { useAppSelector } from '../../store/hooks';
import { selectBooking, selectCurrentQuest } from '../../store/data-process/selectors';


export default function PageBooking () {
  const booking = useAppSelector(selectBooking);
  const currentQuest = useAppSelector(selectCurrentQuest);

  return (booking && currentQuest &&
    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room. Booking</title>
      </Helmet>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type='image/webp'
              srcSet={currentQuest.coverImgWebp}
            />
            <img
              src={currentQuest.coverImg}
              srcSet={currentQuest.coverImg}
              width={1366}
              height={1959}
              alt=''
            />
          </picture>
        </div>
        {booking.map((item) => (
          <div className="container container--size-s" key={item.id}>
            <div className="page-content__title-wrapper">
              <h1 className="subtitle subtitle--size-l page-content__subtitle">
            Бронирование квеста
              </h1>
              <p className="title title--size-m title--uppercase page-content__title">
                {currentQuest.title}
              </p>
            </div>
            <div className="page-content__item">
              <div className="booking-map">
                <div className="map">
                  <div className="map__container" />
                </div>
                <p className="booking-map__address">
                  {item.location.address}
                </p>
              </div>
            </div>
            <form
              className="booking-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
            >
              <fieldset className="booking-form__section">
                <legend className="visually-hidden">Выбор даты и времени</legend>
                <fieldset className="booking-form__date-section">
                  <legend className="booking-form__date-title">Сегодня</legend>
                  <div className="booking-form__date-inner-wrapper">
                    {item.slots.today.map((day) => <BookingSlot key={day.time} slot={day}/>)}
                  </div>
                </fieldset>
                <fieldset className="booking-form__date-section">
                  <legend className="booking-form__date-title">Завтра</legend>
                  <div className="booking-form__date-inner-wrapper">
                    {item.slots.tomorrow.map((day) => <BookingSlot key={day.time} slot={day}/>)}
                  </div>
                </fieldset>
              </fieldset>
              <fieldset className="booking-form__section">
                <legend className="visually-hidden">Контактная информация</legend>
                <div className="custom-input booking-form__input">
                  <label className="custom-input__label" htmlFor="name">
            Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Имя"
                    required
                    pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
                  />
                </div>
                <div className="custom-input booking-form__input">
                  <label className="custom-input__label" htmlFor="tel">
            Контактный телефон
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="Телефон"
                    required
                    pattern="[0-9]{10,}"
                  />
                </div>
                <div className="custom-input booking-form__input">
                  <label className="custom-input__label" htmlFor="person">
            Количество участников
                  </label>
                  <input
                    type="number"
                    id="person"
                    name="person"
                    placeholder="Количество участников"
                    required
                  />
                </div>
                <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                  <input
                    type="checkbox"
                    id="children"
                    name="children"
                  />
                  <span className="custom-checkbox__icon">
                    <svg width={20} height={17} aria-hidden="true">
                      <use xlinkHref="#icon-tick" />
                    </svg>
                  </span>
                  <span className="custom-checkbox__label">
            Со мной будут дети
                  </span>
                </label>
              </fieldset>
              <button
                className="btn btn--accent btn--cta booking-form__submit"
                type="submit"
              >
            Забронировать
              </button>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
                <input
                  type="checkbox"
                  id="id-order-agreement"
                  name="user-agreement"
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
        ))}
      </main>
      <Footer />
    </div>

  );
}
