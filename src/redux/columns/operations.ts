import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../../api';
import {
  IThunkAPI,
  ICreateColumnRequestBody,
  ICreateColumnThunkPayload,
  IUpdateColumnByIdRequest,
  IUpdateColumnByIdThunkPayload,
  Id,
} from '../../types';

export const createColumnThunk = createAsyncThunk<
  ICreateColumnThunkPayload,
  ICreateColumnRequestBody,
  IThunkAPI
>('POST /columns', async (data, thunkAPI) => {
  try {
    const result = await api.columns.createColumn(data);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const updateColumnByIdThunk = createAsyncThunk<
  IUpdateColumnByIdThunkPayload,
  IUpdateColumnByIdRequest,
  IThunkAPI
>('PATCH /columns/{id}', async ({ id, newColumnBody }, thunkAPI) => {
  try {
    const result = await api.columns.updateColumnById(id, newColumnBody);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const deleteColumnByIdThunk = createAsyncThunk<Id, Id, IThunkAPI>(
  'DELETE /columns/{id}',
  async (id, thunkAPI) => {
    try {
      await api.columns.deleteColumnById(id);
      return id;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
      throw error;
    }
  }
);
