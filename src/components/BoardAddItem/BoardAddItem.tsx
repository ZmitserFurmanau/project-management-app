import React, { FC, useState } from 'react';
import Modal from 'react-modal';
import ModalWindowForm from '../ModalWindowForm/ModalWindowForm';
import { ModalWindowFormProps } from '~/types/board';
import { createColumn } from '~/services/columns';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { setCurrentBoard, setColumnTaskData } from '~/store/reducers/currentBoardSlice';
import { ColumnData, TaskData } from '~/types/api';
import { createTask, getAllTasks } from '~/services/tasks';

import styles from '../Board/Board.module.scss';

const BoardAddItem: FC<ModalWindowFormProps> = props => {
  const { currentBoard } = useAppSelector(state => state.currentBoard);
  const { userId } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(): void {
    setIsModalOpen(true);
  }

  function handleCloseModal(): void {
    setIsModalOpen(false);
  }

  const setData = (data: string): void => {
    console.log(data);
    if (props.options.type === 'column') {
      createNewColumn(data);
    }

    if (props.options.type === 'task') {
      createNewTask(data);
    }
  };

  const createNewColumn = async (newColumnTitle: string) => {
    const data = await createColumn(currentBoard.id, newColumnTitle, (currentBoard.columns?.length as number) + 1);
    dispatch(
      setCurrentBoard({
        id: currentBoard.id,
        title: currentBoard.title,
        columns: [...(currentBoard.columns || []), data as ColumnData],
      }),
    );
    return data;
  };

  const createNewTask = async (newTaskTitle: string) => {
    if (currentBoard && props.columnId) {
      const existingTasks = await getAllTasks(currentBoard.id, props.columnId);
      const newTask = await createTask(
        currentBoard.id,
        props.columnId,
        newTaskTitle,
        (existingTasks as TaskData[]).length + 1,
        'description',
        userId,
      );
      console.log(newTask);
      dispatch(
        setColumnTaskData({
          columnId: props.columnId,
          tasks: [...(existingTasks as TaskData[]), newTask as TaskData],
        }),
      );
      return newTask;
    }
  };

  return (
    <>
      <Modal
        className={styles.modalForm}
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        shouldCloseOnOverlayClick
      >
        <ModalWindowForm
          options={{ options: props.options, columnId: props.columnId }}
          setData={{ setData: setData }}
          handleCloseModal={{
            handleCloseModal: handleCloseModal,
          }}
        />
        <i className={`${styles.cancelBtn} ${styles.modalCloseBtn}`} onClick={handleCloseModal}>
          ×
        </i>
      </Modal>
      {!isModalOpen && (
        <button className={styles.btn} onClick={handleOpenModal}>
          {props.options.btnTitle}
        </button>
      )}
    </>
  );
};

export default BoardAddItem;
