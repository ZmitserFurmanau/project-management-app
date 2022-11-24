import React, { FC } from 'react';
import styles from './CardBoard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons';

// interface ICardBoardProps {
// }

const CardBoard: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.icons}>
        <FontAwesomeIcon icon={faTrashCan} className={styles.icon} />
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <h4 className={styles.title}>Title</h4>
      <p className={styles.description}>Description</p>
    </div>
  );
};

export default CardBoard;
