import React, { FC } from 'react';
import { Button } from '~/components/Button';
import { ModalBoard } from '~/components/ModalBoard';
import styles from './MainPage.module.scss'

export interface ICard {
  title: string | undefined
  description: string | undefined
}

const MainPage: FC = () => {
  const [isVisibleModalBoard, setIsVisibleModalBoard] = React.useState(false);
  const [dataCardsBoards, setDataCardsBoards] = React.useState<Array<ICard>>([])

  const closeModal = () => {
  setIsVisibleModalBoard(false)
  
}

const addDataCard = (data: ICard) => {
  setDataCardsBoards((prev) => {
      return [...prev, data]
  })
  setIsVisibleModalBoard(false)
}

  return (
    <div className={styles.mainPage}>
      <h1>Boards</h1>
      <Button name='Create a board' onClick={() => setIsVisibleModalBoard(true)} />
      <div className='block-boards'>
        {dataCardsBoards.map((item) => {
          return <p>{item.title}</p>
        })}
      </div>
      {isVisibleModalBoard && <ModalBoard closeModal={closeModal} addDataCard={addDataCard}/> }
    </div>
  );
};

export default MainPage;
