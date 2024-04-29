import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import api from '../../api';
import {
  IThunkAPI,
  ICreateBoardRequestBody,
  ICreateBoardThunkPayload,
  IGetBoardByIdThunkPayload,
  IUpdateBoardByIdRequest,
  IUpdateBoardByIdThunkPayload,
  Id,
} from '../../types';

export const createBoardThunk = createAsyncThunk<
  ICreateBoardThunkPayload,
  ICreateBoardRequestBody,
  IThunkAPI
>('POST /boards', async (data, thunkAPI) => {
  try {
    const result = await api.boards.createBoard(data);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});

export const getBoardByIdThunk = createAsyncThunk<
  IGetBoardByIdThunkPayload,
  Id,
  IThunkAPI
>('GET /boards/{id}', async (id, thunkAPI) => {
  try {
    const result = await api.boards.getBoardById(id);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});

export const updateBoardByIdThunk = createAsyncThunk<
  IUpdateBoardByIdThunkPayload,
  IUpdateBoardByIdRequest,
  IThunkAPI
>('PATCH /boards/{id}', async (data, thunkAPI) => {
  try {
    const result = await api.boards.updateBoardById(data.id, data.newBoardBody);
    return result;
  } catch (error) {
    if (error instanceof AxiosError) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    }
  }
});

export const deleteBoardByIdThunk = createAsyncThunk<Id, Id, IThunkAPI>(
  'DELETE /boards/{id}',
  async (id, thunkAPI) => {
    try {
      await api.boards.deleteBoardById(id);
      return id;
    } catch (error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(
          error.response?.data.message || error.message
        );
      } else {
        throw error;
      }
    }
  }
);
