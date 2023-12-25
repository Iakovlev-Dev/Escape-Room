import { Route, Routes } from 'react-router-dom';
import PageMain from '../../pages/page-main/page-main';
import { AppRoute } from '../../const';
import PageLogin from '../../pages/page-login/page-login';
import PrivateRoute from '../private-route/private-route';
import PageMyQuests from '../../pages/page-reservation/page-reservation';
import PageBooking from '../../pages/page-booking/page-booking';
import PageQuest from '../../pages/page-quest/page-quest';
import PageContacts from '../../pages/page-contacts/page-contacts';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import { browserHistory } from '../../browser-history';
import { useAppSelector } from '../../store/hooks';
import { selectAuthStatus } from '../../store/data-process/selectors';

export default function App () {
  console.log(useAppSelector(selectAuthStatus));
  
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PageMain />}
          />
          <Route
            path={AppRoute.Login}
            element={<PageLogin />}
          />
          <Route
            path={AppRoute.Reservation}
            element={
              <PrivateRoute >
                <PageMyQuests />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Booking}
            element={
              <PrivateRoute >
                <PageBooking />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Quest}
            element={<PageQuest />}
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
      </HistoryRouter>
    </HelmetProvider>
  );
}
