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
>('POST /users/register', async (data: IRegisterUserRequestBody, thunkAPI) => {
  try {
    const result = await api.users.register(data);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.request.status === 409) {
        return thunkAPI.rejectWithValue('The email is already in use.');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const loginThunk = createAsyncThunk<
  ILoginThunkPayload,
  IUserCredentials,
  IThunkAPI
>('POST /users/login', async (credentials: IUserCredentials, thunkAPI) => {
  try {
    const result = await api.users.login(credentials);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.request.status === 403) {
        return thunkAPI.rejectWithValue(
          "The email doesn't exist or password is incorrect. Please try again."
        );
      }
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
>('PATCH /users/avatar', async (image: FormData, thunkAPI) => {
  try {
    const result = await api.users.avatar(image);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
