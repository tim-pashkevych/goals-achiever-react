import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../../api';

export const createCardThunk = createAsyncThunk(
  'POST /cards',
  async (data, thunkAPI) => {
    try {
      const result = await api.cards.create(data);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const changeCardThunk = createAsyncThunk(
  'PATCH /cards/{id}',
  async (data, thunkAPI) => {
    try {
      const result = await api.cards.updateById(data);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const deleteCardThunk = createAsyncThunk(
  'DELETE /cards/{id}',
  async (id, thunkAPI) => {
    try {
      const result = await api.cards.deleteById(id);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const moveCardThunk = createAsyncThunk(
  'PATCH /cards/{id}/move',
  async (data, thunkAPI) => {
    try {
      const result = await api.cards.moveById(data);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
