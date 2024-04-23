import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  registerThunk,
  loginThunk,
  logoutThunk,
  updateUserAvatarThunk,
} from './operations';
import { IUserState } from '../../types';

const initialState: IUserState = {
  isLoading: false,
  isLoggedIn: false,
  token: '',
  user: {
    name: '',
    email: '',
    avatarURL: '',
  },
};

const slice = createSlice({
  name: 'user',
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
      );
  },
  selectors: {
    selectToken: (state) => state.isLoggedIn,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsLoading: (state) => state.isLoading,
    selectUser: (state) => state.user,
  },
});

export const userReducer = slice.reducer;

export const { selectToken, selectIsLoggedIn, selectIsLoading, selectUser } =
  slice.selectors;
