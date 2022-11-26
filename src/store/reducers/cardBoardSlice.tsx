import { createSlice } from '@reduxjs/toolkit';
import { ICard } from '~/pages/MainPage/MainPage';

export interface MainPageState {
  isOpenModalEdit: boolean;
  isOpenModalDelete: boolean;
  currentData: ICard;
}

const initialState: MainPageState = {
  isOpenModalEdit: false,
  isOpenModalDelete: false,
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
      state.isOpenModalEdit = true;
    },
    closeModalEdit(state) {
      state.isOpenModalEdit = false;
    },
    setCurrentData(state, action) {
      state.currentData = action.payload;
    },
    openModalDelete(state) {
      state.isOpenModalDelete = true;
    },
    closeModalDelete(state) {
      state.isOpenModalDelete = false;
    },
  },
});

export default cardBoardSlice.reducer;
export const { openModalEdit, closeModalEdit, setCurrentData, openModalDelete, closeModalDelete } =
  cardBoardSlice.actions;
