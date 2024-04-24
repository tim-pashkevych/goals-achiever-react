import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  createBoardThunk,
  getBoardByIdThunk,
  updateBoardByIdThunk,
  deleteBoardByIdThunk,
} from './operations';
import { IBoardsState, IShortBoard } from '../../types';

const initialState: IBoardsState = {
  items: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
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
      .addCase(
        getBoardByIdThunk.fulfilled,
        (state, { payload: { result: board } }) => {
          state.isLoading = false;

          state.items = state.items.map((item) =>
            item._id === board._id
              ? { ...item, active: true }
              : { ...item, active: false }
          );
        }
      )
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
      })
      // .addCase(createColumnThunk.fulfilled, (state, payload) => {
      //   state.activeBoard?.columns.push(payload);
      // })
      // .addCase(updateColumnByIdThunk.fulfilled, (state, payload) => {
      //   state.activeBoard!.columns = state.activeBoard!.columns.map((column) =>
      //     column._id === payload._id ? payload : column
      //   );
      // })
      // .addCase(deleteColumnById, (state, payload) => {
      //   state.activeBoard!.columns = state.activeBoard!.columns.filter(
      //     (column) => column._id !== payload
      //   );
      // })
      .addMatcher(
        isAnyOf(
          createBoardThunk.pending,
          getBoardByIdThunk.pending,
          updateBoardByIdThunk.pending,
          deleteBoardByIdThunk.pending
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
          deleteBoardByIdThunk.rejected
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
