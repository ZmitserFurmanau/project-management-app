import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Button } from '~/components/Button';
import CardBoard from '~/components/CardBoard';
import { ModalBoard } from '~/components/ModalBoard';
import { RootState } from '~/store';
import { setdataCardsBoards, unvisibleMB, visibleMB } from '~/store/reducers/mainPageSlice';
import styles from './MainPage.module.scss';
import Button from '@mui/material/Button';
import { Typography, Grid } from '@mui/material';
import { Container } from '@mui/system';

export interface ICard {
  id: string;
  title: string | undefined;
  description: string | undefined;
}

const MainPage: FC = () => {
  const isVisibleModalBoard = useSelector<RootState, boolean>(state => state.mainPage.isVisibleModalBoard);
  const dataCardsBoards = useSelector<RootState, ICard[]>(state => state.mainPage.dataCardsBoards);
  const dispatch = useDispatch();

  const addDataCard = (data: ICard) => {
    dispatch(setdataCardsBoards(data));
  };

  return (
    <div className={styles.mainPage}>
      <>
        <Container fixed style={{ margin: 15 }}>
          <Typography variant="h4" gutterBottom>
            Boards
          </Typography>
          <Button variant="contained" onClick={() => dispatch(visibleMB())}>
            Create a board
          </Button>
        </Container>
        <Grid container style={{ padding: 15 }} spacing={2}>
          {dataCardsBoards.map(item => {
            return (
              <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                <CardBoard data={item} />
              </Grid>
            );
          })}
        </Grid>
        <ModalBoard
          id={String(Date.now())}
          open={isVisibleModalBoard}
          closeModal={() => dispatch(unvisibleMB())}
          dataCard={addDataCard}
        />
        ;
      </>
    </div>
  );
};

export default MainPage;
