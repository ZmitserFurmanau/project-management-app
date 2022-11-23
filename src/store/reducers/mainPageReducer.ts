import { createSlice } from '@reduxjs/toolkit';
import { ICard } from '~/pages/MainPage/MainPage';

export interface MainPageState {
  isVisibleModalBoard: boolean;
  dataCardsBoards: Array<ICard>;
}

const initialState: MainPageState = {
  isVisibleModalBoard: false,
  dataCardsBoards: [],
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    visibleMB(state) {
      state.isVisibleModalBoard = true;
    },
    unvisibleMB(state) {
      state.isVisibleModalBoard = false;
    },
  },
});

export default mainPageSlice.reducer;
export const { visibleMB, unvisibleMB } = mainPageSlice.actions;
