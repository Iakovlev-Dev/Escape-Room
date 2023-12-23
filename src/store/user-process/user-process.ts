import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { APIRoute, AuthorisaionStatus, NameSpace } from '../../const';
import { AppDispatch, State, UserProcess } from '../../types/type-store';
import { AxiosInstance } from 'axios';

const initialState: UserProcess = {
  authorizationStatus: AuthorisaionStatus.NoAuth
};

type ApiAction = {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }

export const checkAuthAction = createAsyncThunk<void, undefined, ApiAction>('user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);

  }
);

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorisaionStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorisaionStatus.NoAuth;
      });
  },

});
