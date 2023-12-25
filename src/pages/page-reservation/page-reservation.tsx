import { Helmet } from 'react-helmet-async';
import Footer from '../../componets/footer/footer';
import Header from '../../componets/header/header';
import { useAppSelector } from '../../store/hooks';
import { selectMyReservation } from '../../store/data-process/selectors';
import QuestCardReservation from '../../componets/quest-card-reservation/quest-card-reservation';

export default function PageMyQuests () {

  const myReservation = useAppSelector(selectMyReservation);
  return (
    <div className="wrapper">
      <Header />
      <Helmet>
        <title>Escape Room. Reservation</title>
      </Helmet>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
        Мои бронирования
            </h1>
          </div>
          <div className="cards-grid">
            {myReservation === null ? 'Забронируйте квест' : myReservation.map((item) => <QuestCardReservation reserv={item} key={item.id}/>)}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
