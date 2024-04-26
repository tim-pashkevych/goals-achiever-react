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
} from '../../types';

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
      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
});

export const loginThunk = createAsyncThunk<
  ILoginThunkPayload,
  IUserCredentials,
  IThunkAPI
>('POST /users/login', async (credentials, thunkAPI) => {
  try {
    const result = await api.users.login(credentials);
    thunkAPI.dispatch(fetchUserThunk());

    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
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
        return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const fetchUserThunk = createAsyncThunk(
  'GET users',
  async (_, thunkAPI) => {
    try {
      const result = await api.users.current();
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const updateUserTheme = createAsyncThunk(
  'PATCH /users/theme',
  async (data: object, thunkAPI) => {
    try {
      const result = await api.users.theme(data);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
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
    thunkAPI.dispatch(fetchUserThunk());

    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
