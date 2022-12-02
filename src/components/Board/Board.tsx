import React, { FC } from 'react';
import { ColumnState } from '~/types/board';
import dataAPI from '~/services/boardService';
import { columnOptions } from '~/utils/utils';
import BoardAddItem from '../BoardAddItem';
import BoardColumn from '../BoardColumn';
import styles from './Board.module.scss';

const Board: FC = () => {
  const columns = dataAPI.useGetColumnsQuery('a4467fd3-c1f2-4abc-8cdb-039dca57a7f4').currentData;
  return (
    <div className={styles.board}>
      {columns &&
        columns.map((column: ColumnState) => {
          return <BoardColumn key={column.id} id={column.id} title={column.title} />;
        })}
      <BoardAddItem options={columnOptions} />
    </div>
  );
};

export default Board;
