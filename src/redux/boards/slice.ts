import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  createBoardThunk,
  getBoardByIdThunk,
  updateBoardByIdThunk,
  deleteBoardByIdThunk,
} from './operations';
import { IBoardsState, IShortBoard } from '../../types';
import { fetchUserThunk, logoutThunk } from '..';

const initialState: IBoardsState = {
  items: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    updateActiveBoard: (state, { payload }) => {
      state.items = state.items.map((board) =>
        board._id === payload
          ? { ...board, active: true }
          : { ...board, active: false }
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        createBoardThunk.fulfilled,
        (state, { payload: { result: board } }) => {
          state.isLoading = false;

          const newBoard: IShortBoard = {
            _id: board._id,
            backgroundImage: board.backgroundImage,
            icon: board.icon,
            title: board.title,
            active: true,
            createdAt: board.createdAt,
          };

          state.items.push(newBoard);
          state.items = state.items.map((board) =>
            board._id === newBoard._id ? board : { ...board, active: false }
          );
        }
      )
      .addCase(getBoardByIdThunk.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(
        updateBoardByIdThunk.fulfilled,
        (state, { payload: { result: newBoard } }) => {
          state.isLoading = false;

          state.items = state.items.map((board) =>
            board._id === newBoard._id ? { ...board, ...newBoard } : board
          );
        }
      )
      .addCase(deleteBoardByIdThunk.fulfilled, (state, { payload: id }) => {
        state.items = state.items.filter((board) => board._id !== id);

        state.items = state.items.map((board, index) =>
          index === 0 ? { ...board, active: true } : { ...board, active: false }
        );
        state.isLoading = false;
      })
      .addCase(fetchUserThunk.fulfilled, (state, { payload: { result } }) => {
        state.isLoading = false;
        state.items = result.boards;
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addMatcher(
        isAnyOf(
          createBoardThunk.pending,
          getBoardByIdThunk.pending,
          updateBoardByIdThunk.pending,
          deleteBoardByIdThunk.pending,
          fetchUserThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          createBoardThunk.rejected,
          getBoardByIdThunk.rejected,
          updateBoardByIdThunk.rejected,
          deleteBoardByIdThunk.rejected,
          fetchUserThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectBoards: (state) => state.items,
    selectIsBoardLoading: (state) => state.isLoading,
    selectActiveBoard: (state) => state.items.find((board) => board.active),
  },
});

export const boardsReducer = slice.reducer;

export const { selectBoards, selectIsBoardLoading, selectActiveBoard } =
  slice.selectors;

export const { updateActiveBoard } = slice.actions;
