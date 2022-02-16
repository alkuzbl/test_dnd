import { configureStore } from '@reduxjs/toolkit';

import { boardsReducer } from 'redux/slice/boards-slice';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
