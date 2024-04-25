import { createSelector } from '@reduxjs/toolkit';
import { selectCards } from '.';

const getColumnId = (state, columnId) => columnId;

export const selectCardsByColumnId = createSelector(
  [selectCards, getColumnId],
  (cards, columnId) => cards.filter((card) => card.columnId === columnId)
);
