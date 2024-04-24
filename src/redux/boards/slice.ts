import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  createBoardThunk,
  getBoardByIdThunk,
  updateBoardByIdThunk,
  deleteBoardByIdThunk,
} from './operations';
import { IBoardsState, IShortBoard } from '../../types';
import api from '../../api';

const initialState: IBoardsState = {
  activeBoard: null,
  boards: [],
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
          };
          state.boards.push(newBoard);
          state.activeBoard = board;
        }
      )
      .addCase(
        getBoardByIdThunk.fulfilled,
        (state, { payload: { result: board } }) => {
          state.isLoading = false;

          state.activeBoard = board;
        }
      )
      .addCase(
        updateBoardByIdThunk.fulfilled,
        (state, { payload: { result: newBoard } }) => {
          state.isLoading = false;

          if (state.activeBoard?._id === newBoard._id) {
            state.activeBoard = newBoard;
          }

          const newShortBoard: IShortBoard = {
            _id: newBoard._id,
            title: newBoard.title,
            icon: newBoard.icon,
            backgroundImage: newBoard.backgroundImage,
          };
          state.boards = state.boards.map((board) =>
            board._id === newShortBoard._id ? newShortBoard : board
          );
        }
      )
      .addCase(deleteBoardByIdThunk.fulfilled, (state, { payload: id }) => {
        if (state.activeBoard?._id === id) {
          let i;
          for (i = 0; i < state.boards.length; i++) {
            if (state.boards[i]._id === state.activeBoard?._id) {
              break;
            }
          }
          let newBoardIndex;
          if (state.boards[i + 1]) {
            newBoardIndex = i + 1;
          } else if (state.boards[i - 1]) {
            newBoardIndex = i - 1;
          } else {
            newBoardIndex = -1;
          }

          if (newBoardIndex !== -1) {
            api.boards
              .getBoardById(state.boards[newBoardIndex]._id)
              .then((data) => {
                state.activeBoard = data;
              })
              .catch((error) =>
                console.log(
                  `Something went wrong during new board fetch. Error: ${error}`
                )
              );
          }
        }

        state.boards = state.boards.filter((board) => board._id !== id);
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
    selectBoards: (state) => state.boards,
    selectIsBoardLoading: (state) => state.isLoading,
    selectActiveBoard: (state) => state.activeBoard,
    selectColumns: (state) =>
      state.activeBoard ? state.activeBoard.columns : [],
  },
});

export const boardsReducer = slice.reducer;

export const {
  selectBoards,
  selectIsBoardLoading,
  selectActiveBoard,
  selectColumns,
} = slice.selectors;
