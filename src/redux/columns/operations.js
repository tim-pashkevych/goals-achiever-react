import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../../api';

export const createColumnThunk = createAsyncThunk(
  'POST /columns',
  async (data, thunkAPI) => {
    try {
      const result = await api.columns.create(data);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const changeColumnThunk = createAsyncThunk(
  'PATCH /columns/{id}',
  async (data, thunkAPI) => {
    try {
      const result = await api.columns.change(data);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const deleteColumnThunk = createAsyncThunk(
  'DELETE /columns/{id}',
  async (id, thunkAPI) => {
    try {
      const result = await api.columns.remove(id);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
