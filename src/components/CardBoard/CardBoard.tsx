import React, { FC, useCallback, MouseEvent } from 'react';
import styles from './CardBoard.module.scss';

import { Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { isOpen, isOpenDelete } from '~/store/reducers/mainPageSlice';
import { CardBoardTextData } from './data';
import { ICard } from '~/types/interface';
import { getDataCardsBoards } from '~/store/selectors';
import { isEdit } from '~/store/reducers/cardBoardSlice';
import { ModalConfirm } from '../Modals/ModalConfirm';

const CardBoard = ({ idBoard, titleBoard, descriptionBoard }: ICard) => {
  const dispatch = useDispatch();

  const dataCardsBoards = useSelector(getDataCardsBoards);

  const { btnDelText, btnEditText } = CardBoardTextData;

  const onClickEdit = (event: MouseEvent<HTMLElement>) => {
    const currentID = event.currentTarget.id;
    const currentData = dataCardsBoards.find(item => item.idBoard === currentID);
    dispatch(isEdit(currentData));
    dispatch(isOpen(true));
  };

  const onClickDelete = (event: MouseEvent<HTMLElement>) => {
    const currentID = event.currentTarget.id;
    dispatch(isOpenDelete({ stateModal: true, currentID: currentID }));
  };

  return (
    <>
      <Card>
        <CardContent className={styles.cardContent}>
          <Typography align="center" variant="h6">
            {titleBoard}
          </Typography>
          <Typography align="center">{descriptionBoard}</Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Button id={idBoard} color="secondary" variant="contained" size="small" onClick={onClickDelete}>
            {btnDelText}
          </Button>
          <Button id={idBoard} color="info" variant="contained" size="small" onClick={onClickEdit}>
            {btnEditText}
          </Button>
        </CardActions>
      </Card>
      <ModalConfirm />
    </>
  );
};

export default CardBoard;
