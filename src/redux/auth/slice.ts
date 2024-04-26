import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  registerThunk,
  loginThunk,
  logoutThunk,
  updateUserAvatarThunk,
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
        updateUserAvatarThunk.fulfilled,
        (state, { payload: { avatarURL } }) => {
          state.user.avatarURL = avatarURL;
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
          updateUserAvatarThunk.pending,
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
          updateUserAvatarThunk.rejected,
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
