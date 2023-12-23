
// type Reducer = ReturnType<typeof rootReduser>

import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { browserHistory } from '../../browser-history';

export const redirect: Middleware<unknown> =
    () =>
      (next) =>
        (action: PayloadAction<string>) => {
          if (action.type === 'redirectToRoute') {
            browserHistory.push(action.payload);
          }

          return next(action);
        };
