import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Button } from '~/components/Button';
import CardBoard from '~/components/CardBoard';
import { ModalBoard } from '~/components/Modals/ModalBoard';
import { RootState } from '~/store';
import { isOpen } from '~/store/reducers/mainPageSlice';
import styles from './MainPage.module.scss';
import Button from '@mui/material/Button';
import { Typography, Grid } from '@mui/material';
import { Container } from '@mui/system';
import { getDataCardsBoards } from '~/store/selectors';
import { MainPageText } from './data';

const MainPage: FC = () => {
  const dispatch = useDispatch();

  const dataCardsBoards = useSelector(getDataCardsBoards);

  const { title, btnCreateBoard } = MainPageText;

  return (
    <div className={styles.mainPage}>
      <>
        <Container fixed style={{ margin: 15 }}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Button variant="contained" onClick={() => dispatch(isOpen(true))}>
            {btnCreateBoard}
          </Button>
        </Container>
        <Grid container style={{ padding: 15 }} spacing={2}>
          {dataCardsBoards.map(({ idBoard, titleBoard, descriptionBoard }) => {
            return (
              <Grid key={idBoard} item xs={12} sm={6} md={4} lg={3}>
                <CardBoard idBoard={idBoard} titleBoard={titleBoard} descriptionBoard={descriptionBoard} />
              </Grid>
            );
          })}
        </Grid>
        <ModalBoard />;
      </>
    </div>
  );
};

export default MainPage;
