import { createAsyncThunk } from '@reduxjs/toolkit';
import { QuestMaxType, QuestsMinArrayType } from '../types/type-quest';
import { AppDispatch, State } from '../types/type-store';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { BookingInfoType } from '../types/type-booking';


type ApiAction = {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }

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
