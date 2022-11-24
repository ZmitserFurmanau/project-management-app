import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Button } from '~/components/Button';
import CardBoard from '~/components/CardBoard';
import { ModalBoard } from '~/components/ModalBoard';
import { RootState } from '~/store';
import { unvisibleMB, visibleMB } from '~/store/reducers/mainPageReducer';
import styles from './MainPage.module.scss';
import Button from '@mui/material/Button';

export interface ICard {
  id: number;
  title: string | undefined;
  description: string | undefined;
}

const MainPage: FC = () => {
  const isVisibleModalBoard = useSelector<RootState>(state => state.mainPage.isVisibleModalBoard);
  console.log(isVisibleModalBoard);

  const dispatch = useDispatch();
  // const [isVisibleModalBoard, setIsVisibleModalBoard] = React.useState(false);
  const [dataCardsBoards, setDataCardsBoards] = React.useState<Array<ICard>>([]);

  const closeModal = () => {
    dispatch(unvisibleMB());
  };

  const addDataCard = (data: ICard) => {
    setDataCardsBoards(prev => {
      return [...prev, data];
    });
    dispatch(unvisibleMB());
  };

  return (
    <div className={styles.mainPage}>
      <>
        <h1>Boards</h1>
        {/* <Button name="Create a board" onClick={() => dispatch(visibleMB())} /> */}
        <Button variant="contained" onClick={() => dispatch(visibleMB())}>
          Create a board
        </Button>
        <div className={styles.blockBoards}>
          {dataCardsBoards.map(item => {
            return <CardBoard key={item.id} />;
          })}
        </div>
        {isVisibleModalBoard && <ModalBoard closeModal={closeModal} addDataCard={addDataCard} />}
      </>
    </div>
  );
};

export default MainPage;
