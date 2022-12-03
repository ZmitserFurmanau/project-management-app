import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import authReducer from './reducers/authSlice';
import boardReducer from './reducers/boardSlice';
import currentBoardReducer from './reducers/currentBoardSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    boards: boardReducer,
    currentBoard: currentBoardReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
