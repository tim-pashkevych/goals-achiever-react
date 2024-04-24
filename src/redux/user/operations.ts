import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../../api';
import {
  IUserCredentials,
  IRegisterThunkPayload,
  ILoginThunkPayload,
  IUpdateAvatarThunkPayload,
  IRegisterUserRequestBody,
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
      return thunkAPI.rejectWithValue(error.message);
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

export const updateUserAvatarThunk = createAsyncThunk<
  IUpdateAvatarThunkPayload,
  FormData,
  IThunkAPI
>('PATCH /users/avatar', async (image, thunkAPI) => {
  try {
    const result = await api.users.avatar(image);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
