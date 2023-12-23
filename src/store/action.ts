import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const changeSortByType = createAction<string>('changeSortByType');
export const changeSortByLevel = createAction<string>('changeSortByLevel');
