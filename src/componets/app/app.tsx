import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageMain from '../../pages/page-main/page-main';
import { AppRoute, AuthorisaionStatus } from '../../const';
import PageLogin from '../../pages/page-login/page-login';
import PrivateRoute from '../private-route/private-route';
import PageMyQuests from '../../pages/page-reservation/page-reservation';
import PageBooking from '../../pages/page-booking/page-booking';
import PageQuest from '../../pages/page-quest/page-quest';
import PageContacts from '../../pages/page-contacts/page-contacts';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { HelmetProvider } from 'react-helmet-async';
import { QuestMinType } from '../../types/type-quest';
import { BookingInfoType } from '../../types/type-booking';

type AppProps = {
  props: QuestMinType[];
  book: BookingInfoType[];
}

export default function App ({props, book}: AppProps) {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PageMain prop = {props}/>}
          />
          <Route
            path={AppRoute.Login}
            element={<PageLogin />}
          />
          <Route
            path={AppRoute.Reservation}
            element={
              <PrivateRoute authorisationStatus={AuthorisaionStatus.NoAuth}>
                <PageMyQuests />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute authorisationStatus={AuthorisaionStatus.Auth}>
                <PageBooking book={book} quest={props}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Quest}
            element={<PageQuest prop = {props}/>}
          />
          <Route
            path={AppRoute.Contacts}
            element={<PageContacts />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>


  );
}
