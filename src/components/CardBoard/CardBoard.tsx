import React, { FC } from 'react';
import styles from './CardBoard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

// interface ICardBoardProps {
// }

const CardBoard: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.icons}>
      <FontAwesomeIcon icon={faTrash} className={styles.icon} />
      <FontAwesomeIcon icon={faPen} className={styles.icon} />
      </div>
      <h3 className={styles.title}>Title</h3>
      <p className={styles.description}>Description</p>
    </div>
  );
};

export default CardBoard;
