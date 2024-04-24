import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../../api';
import {
  IThunkAPI,
  ICreateCardRequestBody,
  ICreateCardThunkPayload,
  IUpdateCardByIdRequest,
  IUpdateCardByIdThunkPayload,
  IMoveCardByIdRequest,
  IMoveCardThunkPayload,
  Id,
} from '../../types';

export const createCardThunk = createAsyncThunk<
  ICreateCardThunkPayload,
  ICreateCardRequestBody,
  IThunkAPI
>('POST /cards', async (data, thunkAPI) => {
  try {
    const result = await api.cards.createCard(data);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const updateCardByIdThunk = createAsyncThunk<
  IUpdateCardByIdThunkPayload,
  IUpdateCardByIdRequest,
  IThunkAPI
>('PATCH /cards/{id}', async (data, thunkAPI) => {
  try {
    const result = await api.cards.updateCardById(data.id, data.newCardBody);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const deleteCardByIdThunk = createAsyncThunk<Id, Id, IThunkAPI>(
  'DELETE /cards/{id}',
  async (id, thunkAPI) => {
    try {
      const result = await api.cards.deleteCardById(id);
      return result;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const moveCardByIdThunk = createAsyncThunk<
  IMoveCardThunkPayload,
  IMoveCardByIdRequest,
  IThunkAPI
>('PATCH /cards/{id}/move', async (data, thunkAPI) => {
  try {
    const result = await api.cards.moveCardById(data.id, data.newCardBody);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
