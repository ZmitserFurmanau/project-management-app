import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEdit } from '~/store/reducers/cardBoardSlice';
import { isOpen, setdataCardsBoards, updateDataCardBoards } from '~/store/reducers/mainPageSlice';
import {
  getEditDescriptionBoard,
  getEditIdBoard,
  getEditTitleBoard,
  getIsEdit,
  getIsOpen,
} from '../../../store/selectors';
import { modalBoardTextData } from '../data';
import './ModalBoard.scss';

export const ModalBoard = () => {
  const dispatch = useDispatch();

  const isOpenModal = useSelector(getIsOpen);
  const isEditData = useSelector(getIsEdit);

  const idEditBoard = useSelector(getEditIdBoard);
  const editTitleBoard = useSelector(getEditTitleBoard);
  const editDescriptionBoard = useSelector(getEditDescriptionBoard);

  const [idBoard, getIdBoard] = useState(String(Date.now()));
  const [titleBoard, getTitleBoard] = useState('');
  const [descriptionBoard, getDescriptionBoard] = useState('');

  const { titleCreateText, btnCreateText, titleUpdateText, btnUpdateText } = modalBoardTextData;
  const [text, getText] = useState({ titleText: titleCreateText, btnText: btnCreateText });

  const [isVisibleErrorTitle, setIsVisibleErrorTitle] = useState(false);
  const [isVisibleErrorDescription, setIsVisibleErrorDescription] = useState(false);

  const resetData = () => {
    getTitleBoard('');
    getDescriptionBoard('');
    getIdBoard(String(Date.now()));
    dispatch(isOpen(false));
  };

  useEffect(() => {
    if (isEditData) {
      getIdBoard(idEditBoard);
      getTitleBoard(editTitleBoard);
      getDescriptionBoard(editDescriptionBoard);
      getText({ ...text, titleText: titleUpdateText, btnText: btnUpdateText });
      dispatch(isEdit(false));
    }
  }, [isEditData]);

  const titleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value) {
      setIsVisibleErrorTitle(false);
    }

    getTitleBoard(event.currentTarget.value);
  };

  const descriptionOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.value) {
      setIsVisibleErrorDescription(false);
    }

    getDescriptionBoard(event.currentTarget.value);
  };

  const createBoard = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (!titleBoard || !descriptionBoard) {
      setIsVisibleErrorTitle(!titleBoard);
      setIsVisibleErrorDescription(!descriptionBoard);
      return;
    }

    if (isEditData) {
      dispatch(updateDataCardBoards({ idBoard, titleBoard, descriptionBoard }));
      resetData();
      return;
    }

    dispatch(setdataCardsBoards({ idBoard, titleBoard, descriptionBoard }));
    resetData();
  };

  return (
    <Dialog open={isOpenModal} onClose={() => dispatch(isOpen(false))}>
      <DialogTitle>{text.titleText}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={titleBoard}
          onChange={titleOnChange}
          error={isVisibleErrorTitle}
          // defaultValue={props.valueTitle}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          onChange={descriptionOnChange}
          error={isVisibleErrorDescription}
          value={descriptionBoard}
          // defaultValue={props.valueDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={createBoard} disabled={isVisibleErrorTitle || isVisibleErrorDescription}>
          {text.btnText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
