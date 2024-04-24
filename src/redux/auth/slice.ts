import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  registerThunk,
  loginThunk,
  logoutThunk,
  updateUserAvatarThunk,
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
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          updateUserAvatarThunk.pending
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
          updateUserAvatarThunk.rejected
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
  },
});

export const userReducer = slice.reducer;

export const {
  selectToken,
  selectIsLoggedIn,
  selectIsUserLoading,
  selectUser,
} = slice.selectors;
