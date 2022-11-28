import { createSlice } from '@reduxjs/toolkit';
import { ICard } from '~/types/interface';

interface MainPageState {
  isVisibleModalBoard: boolean;
  isVisibleModalBoardDelete: boolean;
  IdCurrentBoard: string;
  dataCardsBoards: Array<ICard>;
}

const initialState: MainPageState = {
  isVisibleModalBoard: false,
  isVisibleModalBoardDelete: false,
  IdCurrentBoard: '',
  dataCardsBoards: [],
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    isOpen(state, action) {
      state.isVisibleModalBoard = action.payload;
    },
    isOpenDelete(state, action) {
      console.log(action.payload);
      const { stateModal, currentID } = action.payload;

      state.isVisibleModalBoardDelete = stateModal;
      state.IdCurrentBoard = currentID;
    },
    setdataCardsBoards(state, action) {
      state.dataCardsBoards.push(action.payload);
    },
    updateDataCardBoards(state, action) {
      const arr = state.dataCardsBoards;
      const index = arr.findIndex(element => element.idBoard === action.payload.idBoard);
      arr[index].titleBoard = action.payload.titleBoard;
      arr[index].descriptionBoard = action.payload.descriptionBoard;
    },
    deleteDataCardBoards(state) {
      const id = state.IdCurrentBoard;
      state.dataCardsBoards = state.dataCardsBoards.filter(element => element.idBoard !== id);
      state.IdCurrentBoard = '';
    },
  },
});

export default mainPageSlice.reducer;
export const { isOpen, isOpenDelete, setdataCardsBoards, updateDataCardBoards, deleteDataCardBoards } =
  mainPageSlice.actions;
