import { createSlice } from '@reduxjs/toolkit';

export interface MainPageState {
  isEdit: boolean;
  idEdit: string;
  titleEdit: string;
  descriptionEdit: string;
}

const initialState: MainPageState = {
  isEdit: false,
  idEdit: '',
  titleEdit: '',
  descriptionEdit: '',
};

export const cardBoardSlice = createSlice({
  name: 'cardBoard',
  initialState,
  reducers: {
    isEdit(state, action) {
      const { idBoard, titleBoard, descriptionBoard } = action.payload;
      state.isEdit = true;
      state.idEdit = idBoard;
      state.titleEdit = titleBoard;
      state.descriptionEdit = descriptionBoard;
    },
  },
});

export default cardBoardSlice.reducer;
export const { isEdit } = cardBoardSlice.actions;
