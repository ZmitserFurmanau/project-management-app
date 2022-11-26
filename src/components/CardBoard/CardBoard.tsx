import React, { FC, useCallback } from 'react';
import styles from './CardBoard.module.scss';
import { Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import { ICard } from '~/pages/MainPage/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store';
import { ModalBoard } from '../ModalBoard';
import {
  closeModalDelete,
  closeModalEdit,
  openModalDelete,
  openModalEdit,
  setCurrentData,
} from '~/store/reducers/cardBoardSlice';
import { updateDataCardBoards } from '~/store/reducers/mainPageSlice';
import { ModalConfirm } from '../ModalConfirm/ModalConfirm';

interface ICardBoardProps {
  data: ICard;
}

const CardBoard: FC<ICardBoardProps> = props => {
  const dataCardsBoards = useSelector<RootState, ICard[]>(state => state.mainPage.dataCardsBoards);
  const isOpenModalEdit = useSelector<RootState, boolean>(state => state.cardBoard.isOpenModalEdit);
  const isOpenModalDelete = useSelector<RootState, boolean>(state => state.cardBoard.isOpenModalDelete);
  const currentData = useSelector<RootState, ICard>(state => state.cardBoard.currentData);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModalEdit());
  };

  const updateDataCard = (data: ICard) => {
    dispatch(updateDataCardBoards(data));
  };

  const onClickEdit = () => {
    dispatch(openModalEdit());
    const currentData = dataCardsBoards.find(item => item.id === props.data.id);
    dispatch(setCurrentData(currentData));
  };

  const onClickOpenDelete = () => {
    dispatch(openModalDelete());
  };

  const onCloseModalDelete = () => {
    dispatch(closeModalDelete());
  };

  return (
    <>
      <Card id={props.data.id}>
        <CardContent className={styles.cardContent}>
          <Typography align="center" variant="h6">
            {props.data.title}
          </Typography>
          <Typography align="center">{props.data.description}</Typography>
        </CardContent>
        <CardActions className={styles.cardActions}>
          <Button color="secondary" variant="contained" size="small" onClick={onClickOpenDelete}>
            Delete
          </Button>
          <Button color="info" variant="contained" size="small" onClick={onClickEdit}>
            Edit
          </Button>
        </CardActions>
      </Card>
      <ModalBoard
        id={currentData.id}
        open={isOpenModalEdit}
        closeModal={handleClose}
        dataCard={updateDataCard}
        valueTitle={currentData.title}
        valueDescription={currentData.description}
      />
      <ModalConfirm id={props.data.id} open={isOpenModalDelete} closeModal={onCloseModalDelete} />
    </>
  );
};

export default CardBoard;
