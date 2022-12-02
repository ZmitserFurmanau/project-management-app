import React, { FC } from 'react';
import { BoardColumnProps } from '~/types/board';
import BoardTask from '../BoardTask';
import dataAPI from '~/services/boardService';
import BoardAddTaskCard from '../BoardAddItem';
import { handleFocus, taskOptions } from '~/utils/utils';
import styles from '../Board/Board.module.scss';

const BoardColumn: FC<BoardColumnProps> = ({ id, title }: BoardColumnProps) => {
  const tasks = dataAPI.useGetTasksQuery({
    columnId: id,
    boardId: '8f535fb8-7897-42d3-b2c7-898ed959c637',
  }).currentData;

  const handleDeleteColumn = () => {
    // request delete column
  };

  return (
    <div className={styles.boardItem}>
      <i className={styles.deleteBtn} onClick={handleDeleteColumn}>
        ×
      </i>
      <textarea className={`${styles.textarea} ${styles.columnTitle}`} onFocus={handleFocus}>
        {title}
      </textarea>
      {tasks &&
        tasks.map(task => {
          return (
            <BoardTask
              id={task.id}
              key={task.id}
              title={task.title}
              columnId={task.columnId}
              description={task.description}
              order={task.order}
              userId={task.userId}
              boardId={task.boardId}
            />
          );
        })}
      <BoardAddTaskCard options={taskOptions} />
    </div>
  );
};

export default BoardColumn;
