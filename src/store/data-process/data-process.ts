import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorisaionStatus, NameSpace } from '../../const';
import { DataProcess } from '../../types/type-store';
import { checkAuthAction, fetchBookingAction, fetchQuestAction, fetchQuestsAction, loginAction, logoutAction, myReservation } from '../api-action';
import { QuestsMinArrayType } from '../../types/type-quest';

export const initialState: DataProcess = {
  sortType: 'all',
  sortLevel: 'any',
  quests: [],
  booking: [],
  currentBooking: null,
  quest: null,
  authorizationStatus: AuthorisaionStatus.Unknow,
  myReservation: null
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
    },
    setQuests(state, action: PayloadAction<QuestsMinArrayType>) {
      state.quests = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action)=> {
        state.quests = action.payload;
      })
      .addCase(fetchBookingAction.fulfilled, (state, action)=> {
        state.booking = action.payload;
        state.currentBooking = action.payload[0];
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quest = action.payload;
      })
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorisaionStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorisaionStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorisaionStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorisaionStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorisaionStatus.NoAuth;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.authorizationStatus = AuthorisaionStatus.Auth;
      })
      .addCase(myReservation.fulfilled, (state, action) => {
        state.myReservation = action.payload;
      });
  },
});

export const {setSortType, setSortLevel, setQuests} = dataProcess.actions;
