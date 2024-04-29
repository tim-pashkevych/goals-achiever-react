import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../../api';
import {
  IUserCredentials,
  IRegisterThunkPayload,
  ILoginThunkPayload,
  IUpdateAvatarThunkPayload,
  IRegisterUserRequestBody,
  IRefreshCredentials,
  IIssuesThunkPayload,
  IIssuesCredentials,
  IFetchUserThunkPayload,
} from '../../types';
import { AppDispatch, RootState } from '../store';

interface IThunkAPI {
  rejectValue: string;
}

export const registerThunk = createAsyncThunk<
  IRegisterThunkPayload,
  IRegisterUserRequestBody,
  IThunkAPI
>('POST /users/register', async (data, thunkAPI) => {
  try {
    const result = await api.users.register(data);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});

export const loginThunk = createAsyncThunk<
  ILoginThunkPayload,
  IUserCredentials,
  { dispatch: AppDispatch }
>('POST /users/login', async (credentials, thunkAPI) => {
  try {
    const result = await api.users.login(credentials);
    thunkAPI.dispatch(fetchUserThunk({ boardId: '' }));

    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});

export const logoutThunk = createAsyncThunk(
  'POST /users/logout',
  async (_, thunkAPI) => {
    try {
      const result = await api.users.logout();
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(
          error.response?.data.message || error.message
        );
      }
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk<
  IUpdateAvatarThunkPayload,
  FormData,
  IThunkAPI
>('PATCH /users', async (data, thunkAPI) => {
  try {
    const result = await api.users.info(data);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});

export const fetchUserThunk = createAsyncThunk<
  IFetchUserThunkPayload,
  { boardId: string },
  { state: RootState }
>('GET users', async ({ boardId }, thunkAPI) => {
  try {
    const result = await api.users.current(boardId);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});

export const updateUserTheme = createAsyncThunk(
  'PATCH /users/theme',
  async (data: object, thunkAPI) => {
    try {
      const result = await api.users.theme(data);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(
          error.response?.data.message || error.message
        );
      }
    }
  }
);

export const refreshThunk = createAsyncThunk<
  ILoginThunkPayload,
  IRefreshCredentials,
  IThunkAPI
>('POST /users/refresh', async (data, thunkAPI) => {
  try {
    const result = await api.users.refresh(data);

    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});

export const issuesThunk = createAsyncThunk<
  IIssuesThunkPayload,
  IIssuesCredentials,
  IThunkAPI
>('POST /issues', async (data, thunkAPI) => {
  try {
    const result = await api.users.issues(data);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});
