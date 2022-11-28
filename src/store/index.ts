import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import mainPageReducer from './reducers/mainPageSlice';
// import modalBoardReducer from './reducers/modalBoardSlice';
import cardBoardReducer from './reducers/cardBoardSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    mainPage: mainPageReducer,
    // modalBoard: modalBoardReducer,
    cardBoard: cardBoardReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
