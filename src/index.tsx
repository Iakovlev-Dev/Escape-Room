import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/app/app';
import { quests } from './mocks/quests';
import { booking } from './mocks/bookings';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        props = {quests}
        book = {booking}
      />
    </Provider>

  </React.StrictMode>
);
