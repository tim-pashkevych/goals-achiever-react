import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  registerThunk,
  loginThunk,
  logoutThunk,
  updateUserInfoThunk,
  updateUserTheme,
  refreshThunk,
  issuesThunk,
} from './operations';
import { IUserState } from '../../types';

const initialState: IUserState = {
  token: '',
  refreshToken: '',
  user: {
    name: '',
    email: '',
    avatarURL: '',
    theme: '',
  },
  isLoggedIn: false,
  isLoading: false,
  firstLoad: false,
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
      .addCase(
        loginThunk.fulfilled,
        (state, { payload: { token, user, refreshToken } }) => {
          state.isLoading = false;
          state.token = token;
          state.user = user;
          state.refreshToken = refreshToken;
          state.isLoggedIn = true;
        }
      )
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(
        updateUserInfoThunk.fulfilled,
        (state, { payload: { name, email, avatarURL } }) => {
          state.user.avatarURL = avatarURL;
          state.user.name = name;
          state.user.email = email;
          state.isLoading = false;
        }
      )
      .addCase(updateUserTheme.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user.theme = payload;
      })
      .addCase(
        refreshThunk.fulfilled,
        (state, { payload: { token, user, refreshToken } }) => {
          state.isLoading = false;
          state.token = token;
          state.user = user;
          state.refreshToken = refreshToken;
          state.isLoggedIn = true;
          state.firstLoad = false;
        }
      )
      .addCase(refreshThunk.pending, (state) => {
        state.firstLoad = true;
      })
      .addCase(refreshThunk.rejected, (state) => {
        state.firstLoad = false;
      })
      .addCase(issuesThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          registerThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          updateUserInfoThunk.pending,
          updateUserTheme.pending,
          refreshThunk.pending,
          issuesThunk.pending
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
          updateUserTheme.rejected,
          refreshThunk.rejected,
          issuesThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectToken: (state) => state.isLoggedIn,
    selectRefreshToken: (state) => state.refreshToken,
    selectIsLoggedIn: (state) => state.isLoggedIn,
    selectIsUserLoading: (state) => state.isLoading,
    selectUser: (state) => state.user,
    selectTheme: (state) => state.user.theme,
    selectFirstLoad: (state) => state.firstLoad,
  },
});

export const userReducer = slice.reducer;

export const {
  selectToken,
  selectIsLoggedIn,
  selectIsUserLoading,
  selectUser,
  selectTheme,
  selectRefreshToken,
  selectFirstLoad,
} = slice.selectors;
