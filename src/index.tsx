import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/app/app';
import { quests } from './mocks/quests';
import { booking } from './mocks/bookings';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      props = {quests}
      book = {booking}
    />
  </React.StrictMode>
);
