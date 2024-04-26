import { createSelector } from '@reduxjs/toolkit';
import { selectBoards } from '.';

const getBoardId = (state, boardId) => boardId;

export const selectBoardById = createSelector(
  [selectBoards, getBoardId],
  (boards, boardId) => boards.find((board) => board._id === boardId)
);
