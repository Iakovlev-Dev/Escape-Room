import { createAsyncThunk } from '@reduxjs/toolkit';
import { QuestMaxType, QuestsMinArrayType } from '../types/type-quest';
import { AppDispatch, StateType } from '../types/type-store';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { BookingInfoType } from '../types/type-booking';
import { UserData } from '../types/type-user-data';
import { AuthData } from '../types/type-auth-data';
import { dropToken, setToken } from '../services/token';
import { redirectToRoute } from './action';
import { ReservationType } from '../types/type-reservation';

type ApiAction = {
    dispatch: AppDispatch;
    state: StateType;
    extra: AxiosInstance;
  }

export const checkAuthAction = createAsyncThunk<void, undefined, ApiAction>('checkAuth',
  async (_arg, { extra: api}) => {
    await api.get(APIRoute.Login);
  });

export const fetchQuestsAction = createAsyncThunk<QuestsMinArrayType, undefined, ApiAction>('fetchQuests',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<QuestsMinArrayType>(APIRoute.Quest);
    return data;
  }
);

export const fetchBookingAction = createAsyncThunk<BookingInfoType[], string, ApiAction> ('fetchBooking',
  async (questId, {extra: api}) => {
    const {data} = await api.get<BookingInfoType[]>(`${APIRoute.Quest}/${questId}/booking`);
    return data;
  }
);

export const fetchQuestAction = createAsyncThunk<QuestMaxType, string, ApiAction> ('fetchQuest',
  async (questId, {extra: api}) => {
    const {data} = await api.get<QuestMaxType>(`${APIRoute.Quest}/${questId}`);
    return data;
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ApiAction>('loginAction',
  async({login: email, password}, {extra: api, dispatch}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    setToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ApiAction>('logout',
  async(_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const myReservation = createAsyncThunk<ReservationType[] | null, undefined, ApiAction>('myReservation', 
  async(_arg, {extra: api}) => {
    const {data} = await api.get<ReservationType[]>(APIRoute.Reservation);
    console.log(data);
    return data;
  }
);
