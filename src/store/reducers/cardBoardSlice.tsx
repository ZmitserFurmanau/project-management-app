import { createSlice } from '@reduxjs/toolkit';
import { ICard } from '~/pages/MainPage/MainPage';

export interface MainPageState {
  openModal: boolean;
  openModalDel: boolean;
  currentData: ICard;
}

const initialState: MainPageState = {
  openModal: false,
  openModalDel: false,
  currentData: {
    id: '',
    title: '',
    description: '',
  },
};

export const cardBoardSlice = createSlice({
  name: 'cardBoard',
  initialState,
  reducers: {
    openModalEdit(state) {
      state.openModal = true;
    },
    closeModalEdit(state) {
      state.openModal = false;
    },
    setCurrentData(state, action) {
      state.currentData = action.payload;
    },
    openModalDelete(state) {
      state.openModalDel = true;
    },
    closeModalDelete(state) {
      state.openModalDel = false;
    },
  },
});

export default cardBoardSlice.reducer;
export const { openModalEdit, closeModalEdit, setCurrentData, openModalDelete, closeModalDelete } =
  cardBoardSlice.actions;
