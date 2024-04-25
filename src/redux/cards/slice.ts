import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  createCardThunk,
  updateCardByIdThunk,
  deleteCardByIdThunk,
  moveCardByIdThunk,
} from './operations';
import { ICardsState, IShortCard } from '../../types';
import { fetchUserThunk } from '..';

const initialState: ICardsState = {
  items: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        createCardThunk.fulfilled,
        (state, { payload: { result: card } }) => {
          state.isLoading = false;

          const newCard: IShortCard = {
            _id: card._id,
            boardId: card.boardId,
            columnId: card.columnId,
            title: card.title,
            description: card.description,
            priority: card.priority,
            deadline: card.deadline,
            createdAt: card.createdAt,
          };

          state.items.push(newCard);
        }
      )
      .addCase(
        updateCardByIdThunk.fulfilled,
        (state, { payload: { result: newCard } }) => {
          state.isLoading = false;

          state.items = state.items.map((card) =>
            card._id === newCard._id ? { ...card, ...newCard } : card
          );
        }
      )
      .addCase(
        moveCardByIdThunk.fulfilled,
        (state, { payload: { result: newCard } }) => {
          state.isLoading = false;

          state.items = state.items.map((card) =>
            card._id === newCard._id ? { ...card, ...newCard } : card
          );
        }
      )
      .addCase(deleteCardByIdThunk.fulfilled, (state, { payload: id }) => {
        state.items = state.items.filter((card) => card._id !== id);
      })
      .addCase(fetchUserThunk.fulfilled, (state, { payload: { result } }) => {
        state.isLoading = false;
        state.items = result.cards;
      })
      .addMatcher(
        isAnyOf(
          createCardThunk.pending,
          updateCardByIdThunk.pending,
          deleteCardByIdThunk.pending,
          moveCardByIdThunk.pending,
          fetchUserThunk.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          createCardThunk.rejected,
          updateCardByIdThunk.rejected,
          deleteCardByIdThunk.rejected,
          moveCardByIdThunk.rejected,
          fetchUserThunk.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectCards: (state) => state.items,
    selectIsCardLoading: (state) => state.isLoading,
  },
});

export const CardsReducer = slice.reducer;

export const { selectCards, selectIsCardLoading } = slice.selectors;
