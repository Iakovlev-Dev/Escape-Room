import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/app/app';
import { quests } from './mocks/quests';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App props = {quests} />
  </React.StrictMode>
);
