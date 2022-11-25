import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteDataCardBoards } from '~/store/reducers/mainPageSlice';

interface IModalConfirm {
  id: string;
  open: boolean;
  closeModal: () => void;
}

export const ModalConfirm: FC<IModalConfirm> = props => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteDataCardBoards(props.id));
    props.closeModal();
  };

  return (
    <div>
      <Dialog open={props.open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{'Do you really want to delete?'}</DialogTitle>
        <DialogActions>
          <Button onClick={props.closeModal}>NO</Button>
          <Button onClick={handleDelete} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
