import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  registerThunk,
  loginThunk,
  logoutThunk,
  updateUserInfoThunk,
  updateUserTheme,
} from './operations';
import { IUserState } from '../../types';

const initialState: IUserState = {
  token: '',
  user: {
    name: '',
    email: '',
    avatarURL: '',
    theme: '',
  },
  isLoggedIn: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload: { token, user } }) => {
        state.isLoading = false;
        state.token = token;
        state.user = user;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(
        updateUserInfoThunk.fulfilled,
        (state, { payload: { name, email, avatarURL } }) => {
          state.user.avatarURL = avatarURL;
          state.user.name = name;
          state.user.email = email;
        }
      )
      .addCase(updateUserTheme.fulfilled, (state, { payload }) => {
        state.user.theme = payload;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          updateUserInfoThunk.pending,
          updateUserTheme.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          updateUserInfoThunk.rejected,
          updateUserTheme.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectToken: (state) => state.isLoggedIn,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsUserLoading: (state) => state.isLoading,
    selectUser: (state) => state.user,
    selectTheme: (state) => state.user.theme,
  },
});

export const userReducer = slice.reducer;

export const {
  selectToken,
  selectIsLoggedIn,
  selectIsUserLoading,
  selectUser,
  selectTheme,
} = slice.selectors;
