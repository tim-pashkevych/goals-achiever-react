import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  createColumnThunk,
  updateColumnByIdThunk,
  deleteColumnByIdThunk,
} from './operations';
import { IColumnsState, IShortColumn } from '../../types';
import { fetchUserThunk, getBoardByIdThunk } from '..';

const initialState: IColumnsState = {
  items: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'columns',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        createColumnThunk.fulfilled,
        (state, { payload: { result: column } }) => {
          state.isLoading = false;

          const newColumn: IShortColumn = {
            _id: column._id,
            boardId: column.boardId,
            title: column.title,
            createdAt: column.createdAt,
          };

          state.items.push(newColumn);
        }
      )
      .addCase(
        updateColumnByIdThunk.fulfilled,
        (state, { payload: { result: newColumn } }) => {
          state.isLoading = false;

          state.items = state.items.map((column) =>
            column._id === newColumn._id ? { ...column, ...newColumn } : column
          );
        }
      )
      .addCase(deleteColumnByIdThunk.fulfilled, (state, { payload: id }) => {
        state.items = state.items.filter((column) => column._id !== id);
      })
      .addCase(fetchUserThunk.fulfilled, (state, { payload: { result } }) => {
        state.isLoading = false;
        state.items = result.columns;
      })
      .addCase(getBoardByIdThunk.fulfilled, (state, { payload }) => {
        state.items = payload.result.columns.map(
          (el: { _id: string; title: string }) => {
            return {
              _id: el._id,
              title: el.title,
            };
          }
        );
      })
      .addMatcher(
        isAnyOf(
          createColumnThunk.pending,
          updateColumnByIdThunk.pending,
          deleteColumnByIdThunk.pending,
          fetchUserThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          createColumnThunk.rejected,
          updateColumnByIdThunk.rejected,
          deleteColumnByIdThunk.rejected,
          fetchUserThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectColumns: (state) => state.items,
    selectIsColumnLoading: (state) => state.isLoading,
  },
});

export const ColumnsReducer = slice.reducer;

export const { selectColumns, selectIsColumnLoading } = slice.selectors;
