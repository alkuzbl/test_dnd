import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v1 } from 'uuid';

import { CurrentCardType, DropDataType, InitialStateType } from 'redux/types';

const initialState: InitialStateType = {
  dropData: {} as DropDataType,
  currentCard: {} as CurrentCardType,
  data: [
    {
      id: v1(),
      boardTitle: 'Table-1',
      cardsList: [
        { id: v1(), order: 1, title: '1' },
        { id: v1(), order: 2, title: '2' },
        { id: v1(), order: 3, title: '3' },
        { id: v1(), order: 4, title: '4' },
        { id: v1(), order: 5, title: '5' },
        { id: v1(), order: 6, title: '6' },
      ],
    },
    {
      id: v1(),
      boardTitle: 'Table-2',
      cardsList: [
        { id: v1(), order: 1, title: '1' },
        { id: v1(), order: 2, title: '2' },
        { id: v1(), order: 3, title: '3' },
        { id: v1(), order: 4, title: '4' },
        { id: v1(), order: 5, title: '5' },
        { id: v1(), order: 6, title: '6' },
        { id: v1(), order: 7, title: '7' },
        { id: v1(), order: 8, title: '8' },
        { id: v1(), order: 9, title: '9' },
        { id: v1(), order: 10, title: '10' },
      ],
    },
  ],
};

const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setCurrentCard: (state, action) => {
      state.currentCard = action.payload;
    },

    removeDropCard: state => {
      const board = state.data.find(({ id }) => id === state.currentCard.boardId);
      if (board) {
        board.cardsList.splice(state.currentCard.cardIndex, 1);
      }
    },

    setDropCard: (state, action: PayloadAction<DropDataType>) => {
      const board = state.data.find(({ id }) => id === action.payload.boardId);
      if (board && board.id === state.currentCard.boardId) {
        board.cardsList.splice(
          action.payload.dropIndex,
          0,
          state.currentCard.currentCard,
        );
      }
      if (board && board.id !== state.currentCard.boardId) {
        board.cardsList.splice(
          action.payload.dropIndex + 1,
          0,
          state.currentCard.currentCard,
        );
      }
    },
  },
});

export const boardsReducer = boardsSlice.reducer;

export const { setCurrentCard, setDropCard, removeDropCard } = boardsSlice.actions;
