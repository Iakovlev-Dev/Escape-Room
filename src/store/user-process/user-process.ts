// import { createSlice } from '@reduxjs/toolkit';
// import { AuthorisaionStatus, NameSpace } from '../../const';
// import { UserProcess } from '../../types/type-store';
// import { checkAuthAction } from '../api-action';

// const initialState: UserProcess = {
//   authorizationStatus: AuthorisaionStatus.Unknow
// };

// export const userProcess = createSlice({
//   name: NameSpace.User,
//   initialState,
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(checkAuthAction.fulfilled, (state) => {
//         state.authorizationStatus = AuthorisaionStatus.Auth;
//       })
//       .addCase(checkAuthAction.rejected, (state) => {
//         state.authorizationStatus = AuthorisaionStatus.NoAuth;
//       });
//   },
// });
