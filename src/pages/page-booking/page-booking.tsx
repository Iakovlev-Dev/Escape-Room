import { Helmet } from 'react-helmet-async';
import Footer from '../../componets/footer/footer';
import Header from '../../componets/header/header';
import { useAppSelector } from '../../store/hooks';
import { selectBooking, selectCurrentQuest, selectQuestPlaceId } from '../../store/data-process/selectors';
import FormBooking from '../../componets/form-booking/form-booking';
import Map from '../../componets/map/map';


export default function PageBooking () {
  const currentQuest = useAppSelector(selectCurrentQuest);
  const booking = useAppSelector(selectBooking);
  const currentid = useAppSelector(selectQuestPlaceId);
  const currentBooking = booking?.find((item) => item.id === currentid);


  return (currentQuest &&
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
        <div className="container container--size-s">
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
                <div className="map__container">
                  {booking && <Map page='booking' booking={booking}/>}
                </div>
              </div>
              <p className="booking-map__address">
                {currentBooking && currentBooking.location.address}
              </p>
            </div>
          </div>
          {currentBooking && <FormBooking booking={currentBooking}/>}
        </div>
      </main>
      <Footer />
    </div>

  );
}
