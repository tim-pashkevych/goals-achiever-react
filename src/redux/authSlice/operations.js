import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setAxiosToken } from '../../api/axios';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('users/signup', credentials);
      setAxiosToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('users/login', credentials);
      setAxiosToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
