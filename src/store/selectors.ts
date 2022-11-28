import { RootState } from '~/store';

export const getIsOpen = (state: RootState) => state.mainPage.isVisibleModalBoard;
export const getDataCardsBoards = (state: RootState) => state.mainPage.dataCardsBoards;

export const getEditIdBoard = (state: RootState) => state.cardBoard.idEdit;
export const getIsEdit = (state: RootState) => state.cardBoard.isEdit;
export const getEditTitleBoard = (state: RootState) => state.cardBoard.titleEdit;
export const getEditDescriptionBoard = (state: RootState) => state.cardBoard.descriptionEdit;

export const getIsOpenModalDelete = (state: RootState) => state.mainPage.isVisibleModalBoardDelete;
