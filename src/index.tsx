import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componets/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchQuestsAction } from './store/api-action';

store.dispatch(checkAuthAction());
store.dispatch(fetchQuestsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
