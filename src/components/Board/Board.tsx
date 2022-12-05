import React, { FC, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import { useAppSelector, useAppDispatch } from '~/hooks/redux';
import { getAllColumns } from '~/services/columns';
import { setCurrentBoard } from '~/store/reducers/currentBoardSlice';
import { ColumnData, TaskData } from '~/types/api';
import { ModalWindowFormOptions } from '~/types/board';
import BoardAddItem from '../BoardAddItem';
import BoardColumn from '../BoardColumn';
// import { clearError } from '~/store/reducers/authSlice';
// import Footer from '~/components/Footer';

import styles from './Board.module.scss';

const Board: FC = () => {
  const { currentBoard } = useAppSelector(state => state.currentBoard);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id: currentBoardId } = useParams();

  const columnOptions: ModalWindowFormOptions = {
    type: 'column',
    btnTitle: t('BOARD.BUTTON_ADD_A_COLUMN'),
    placeholderText: t('BOARD.BUTTON_ADD_A_COLUMN_PLACEHOLDER'),
  };

  const moveBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const getColumns = async (): Promise<void> => {
      if (currentBoardId) {
        const columns = await getAllColumns(currentBoardId);
        dispatch(
          setCurrentBoard({
            id: currentBoardId,
            title: currentBoard.title,
            columns: columns as ColumnData[],
          }),
        );
      }
    };
    getColumns();
  }, [currentBoardId, currentBoard.title, dispatch]);

  const moveColumn = useCallback(
    (draggedColumnId: string, hoveredColumnId: string): void => {
      if (currentBoard.columns) {
        const draggedColumn = currentBoard.columns.find(column => column.id === draggedColumnId);
        const hoveredColumn = currentBoard.columns.find(column => column.id === hoveredColumnId);

        if (draggedColumn && hoveredColumn) {
          const dragItemIndex = currentBoard.columns.indexOf(draggedColumn);
          const hoverItemIndex = currentBoard.columns.indexOf(hoveredColumn);
          const updatedColumns = [...currentBoard.columns];
          updatedColumns[dragItemIndex] = hoveredColumn;
          updatedColumns[hoverItemIndex] = draggedColumn;
          dispatch(
            setCurrentBoard({
              id: currentBoardId as string,
              title: currentBoard.title,
              columns: updatedColumns,
            }),
          );
        }
      }
    },
    [currentBoard.columns, currentBoardId, currentBoard.title, dispatch],
  );

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error, {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //     });
  //     dispatch(clearError());
  //   }
  // }, [dispatch, error]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.boardContainer}>
        <Button variant="outlined" type="button" onClick={moveBack} sx={{ margin: '10px' }}>
          ← {t('BOARD.BUTTON_BACK')}
        </Button>
        <div className={styles.board}>
          {currentBoard.columns &&
            currentBoard.columns?.map((column: ColumnData, index: number) => {
              return (
                <BoardColumn
                  moveColumn={moveColumn}
                  key={column.id}
                  columnId={column.id}
                  columnTitle={column.title}
                  columnOrder={index}
                  columnTasks={column.tasks as TaskData[]}
                />
              );
            })}
          <BoardAddItem options={columnOptions} columnId={''} />
        </div>
        {/* <div className="footer-wrapper">
          <Footer />
        </div> */}
      </div>
      <ToastContainer />
    </DndProvider>
  );
};

export default Board;
