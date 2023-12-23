import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorisaionStatus, NameSpace } from '../../const';
import { DataProcess } from '../../types/type-store';
import { quests } from '../../mocks/quests';
import { booking } from '../../mocks/bookings';

export const initialState: DataProcess = {
  sortType: 'all',
  authorizationStatus: AuthorisaionStatus.Auth,
  sortLevel: 'any',
  quests,
  booking
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setSortType(state, action: PayloadAction<string>) {
      state.sortType = action.payload;
    },
    setSortLevel(state, action: PayloadAction<string>) {
      state.sortLevel = action.payload;
    }
  }
});

export const {setSortType, setSortLevel} = dataProcess.actions;
