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
    setdataCardsBoards(state, action) {
      state.dataCardsBoards.push(action.payload);
    },
    updateDataCardBoards(state, action) {
      console.log(action);
      const arr = state.dataCardsBoards;
      const index = arr.findIndex(element => element.id === action.payload.id);
      arr[index].title = action.payload.title;
      arr[index].description = action.payload.description;
    },
    deleteDataCardBoards(state, action) {
      state.dataCardsBoards = state.dataCardsBoards.filter(element => element.id !== action.payload);
    },
  },
});

export default mainPageSlice.reducer;
export const { visibleMB, unvisibleMB, setdataCardsBoards, updateDataCardBoards, deleteDataCardBoards } =
  mainPageSlice.actions;
