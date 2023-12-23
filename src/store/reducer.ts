import { createReducer } from '@reduxjs/toolkit';
import { AuthorisaionStatus } from '../const';
import { changeSortByLevel, changeSortByType } from './action';

type InitialState = {
    sortType: string;
    sortLevel: string;
    authorizationStatus: string;
}

export const initialState: InitialState = {
  sortType: 'all',
  authorizationStatus: AuthorisaionStatus.Auth,
  sortLevel: 'any'

};

export const reducer = createReducer (initialState, (builder) => {
  builder
    .addCase(changeSortByType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changeSortByLevel, (state, action) => {
      state.sortLevel = action.payload;
    });
});
