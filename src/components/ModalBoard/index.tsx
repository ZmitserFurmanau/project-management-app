import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { FC, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICard } from '~/pages/MainPage/MainPage';
import { RootState } from '~/store';
import {
  setDescriptionBoard,
  setIsVisibleErrorDescription,
  setIsVisibleErrorTitle,
  setTitleBoard,
} from '~/store/reducers/modalBoardSlice';
import './ModalBoard.scss';

interface IModalProps {
  id: string;
  closeModal: () => void;
  dataCard: (data: ICard) => void;
  open: boolean;
  valueTitle?: string;
  valueDescription?: string;
}

export const ModalBoard: FC<IModalProps> = props => {
  const titleBoard = useSelector<RootState, string>(state => state.modalBoard.titleBoard);
  const descriptionBoard = useSelector<RootState, string>(state => state.modalBoard.descriptionBoard);
  const isVisibleErrorTitle = useSelector<RootState, boolean>(state => state.modalBoard.isVisibleErrorTitle);
  const isVisibleErrorDescription = useSelector<RootState, boolean>(
    state => state.modalBoard.isVisibleErrorDescription,
  );
  const dispatch = useDispatch();

  const titleOnChange = (e: SyntheticEvent<EventTarget>) => {
    if ((e.target as HTMLInputElement).value) {
      dispatch(setTitleBoard((e.target as HTMLInputElement).value));
      dispatch(setIsVisibleErrorTitle(false));
    }
  };

  const descriptionOnChange = (e: SyntheticEvent<EventTarget>) => {
    if ((e.target as HTMLInputElement).value) {
      dispatch(setDescriptionBoard((e.target as HTMLInputElement).value));
      dispatch(setIsVisibleErrorDescription(false));
    }
  };

  const onClick = () => {
    dispatch(setTitleBoard(''));
    dispatch(setDescriptionBoard(''));
    props.dataCard({ id: props.id, title: titleBoard, description: descriptionBoard });
    dispatch(setIsVisibleErrorTitle(true));
    dispatch(setIsVisibleErrorDescription(true));
    props.closeModal();
  };

  return (
    <Dialog open={props.open}>
      <DialogTitle>Create board</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          onChange={titleOnChange}
          error={isVisibleErrorTitle}
          defaultValue={props.valueTitle}
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
          defaultValue={props.valueDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClick} disabled={isVisibleErrorTitle || isVisibleErrorDescription}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
