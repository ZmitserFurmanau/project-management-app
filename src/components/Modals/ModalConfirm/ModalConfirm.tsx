import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDataCardBoards, isOpenDelete } from '~/store/reducers/mainPageSlice';
import { getIsOpenModalDelete } from '~/store/selectors';
import { ModalConfirmText } from '../data';

export const ModalConfirm = () => {
  const dispatch = useDispatch();

  const isOpenModalDelete = useSelector(getIsOpenModalDelete);

  const { dtnTextYes, dtnTextNo, requestText } = ModalConfirmText;

  const handleDelete = () => {
    dispatch(deleteDataCardBoards());
  };

  return (
    <div>
      <Dialog
        open={isOpenModalDelete}
        onClose={() => dispatch(isOpenDelete({ stateModal: false, currentID: '' }))}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{requestText}</DialogTitle>
        <DialogActions>
          <Button onClick={() => dispatch(isOpenDelete(false))}>{dtnTextNo}</Button>
          <Button onClick={handleDelete} autoFocus>
            {dtnTextYes}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
