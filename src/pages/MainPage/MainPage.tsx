import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';

import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { deleteBoard, getAllBoards } from '~/services/boards';
import { setBoards } from '~/store/reducers/boardSlice';
import { getBoard } from '~/services/boards';
import { setCurrentBoard } from '~/store/reducers/currentBoardSlice';
import { BoardData } from '~/types/api';
import { SearchTasksProps } from '~/types/mainRoute';
import { searchAllTasks } from '~/services/tasks';
import ConfirmationModal from '~/components/ConfirmationModal';
import { clearError } from '~/store/reducers/authSlice';
import SearchForm from '~/components/SearchForm/SearchForm';
import { searchCategory } from '~/utils/constants';
import Loader from '~/components/Loader';
import BoardEditModal from '~/components/BoardEditModal/BoardEditModal';

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  const { boards } = useAppSelector(state => state.boards);
  const { isLogged, error } = useAppSelector(state => state.auth);
  const [countArr, setCountArr] = useState<BoardData[]>([]);

  const [pageState, setPageState] = useState({
    state: false,
    boardOnDelete: '',
    isLoading: false,
  });

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onModalClick = async (resp: boolean) => {
    setPageState(prev => {
      return { ...prev, isLoading: true };
    });
    if (resp) {
      const boardId = pageState.boardOnDelete;
      const deleteResp = await deleteBoard(boardId);
      if (deleteResp) dispatch(setBoards(boards.filter(board => board.id !== boardId)));
    }
    setPageState({ state: false, boardOnDelete: '', isLoading: false });
  };

  const openBoard = (boardId: string): void => {
    dispatch(setCurrentBoard(boards.find(board => board.id === boardId) as BoardData));
  };

  const tasksCount = (board: BoardData) => {
    const boardToCount = countArr.find(item => board.id === item.id) as BoardData;
    const columns = boardToCount?.columns?.length || 0;
    let tasksNumber = 0;
    columns
      ? boardToCount.columns?.forEach(item => {
          if (item.tasks) {
            tasksNumber += item.tasks.length;
          }
        })
      : 0;
    return { columns, tasksNumber };
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(clearError());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (isLogged) {
      const getBoards = async (): Promise<void> => {
        const data = await getAllBoards();
        if (Array.isArray(data)) {
          dispatch(setBoards(data as BoardData[]));
          const arr = await Promise.all(data.map(async item => await getBoard(item.id)));
          const arrFilter = arr.filter(item => item !== undefined) as BoardData[];
          setCountArr(arrFilter ? [...arrFilter] : []);
        }
      };
      getBoards();
    }
  }, [dispatch, isLogged]);

  return (
    <div className="container">
      <div className={styles.mainPage}>
        <div className={styles.main_route_sidebar}>
          <SearchForm callback={handleSearch} searchState={pageState.searchFlag} />
          {Array.isArray(boards) && !pageState.searchFlag && (
            <ul className={styles.list}>
              {boards.map((board: BoardData) => {
                return (
                  <li key={board.id} onClick={() => openBoard(board.id)} className={styles.boardWrapper}>
                    <NavLink to={`board/${board.id}`} className={styles.board}>
                      {countArr && (
                        <ul className={styles.list}>
                          <li className={styles.listItem}>{board.title}</li>
                          <li>
                            {t('MAIN_ROUTE.COLUMNS_COUNT')} {tasksCount(board).columns}
                          </li>
                          <li className={styles.listItem}>
                            {t('MAIN_ROUTE.TASKS_COUNT')} {tasksCount(board).tasksNumber}
                          </li>
                        </ul>
                      )}
                    </NavLink>
                    <div className={styles.deleteIcon_wrapper}>
                      <BackspaceIcon
                        color="error"
                        className={styles.deleteIcon}
                        onClick={() =>
                          setPageState(prev => {
                            return { ...prev, state: true, boardOnDelete: board.id };
                          })
                        }
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
          {pageState.searchFlag && pageState.searchTasks.length !== 0 && (
            <li className={styles.listItem}>
              {pageState.searchTasks.map((value, index) => (
                <NavLink to="board" className={styles.search_task} key={`${value.title + index}`}>
                  <li onClick={() => openBoard(value.boardId)}>Task title: {value.title}</li>
                </NavLink>
              ))}
            </li>
          )}
          {pageState.searchFlag && pageState.searchTasks.length === 0 && (
            <div className={styles.search_no_tasks}>
              <div>There are no tasks with such title...</div>
            </div>
          )}
        </div>
        <ConfirmationModal callback={onModalClick} text={t('MAIN_ROUTE.DELETE_MESSAGE')} isActive={pageState.state} />
        <div style={{ height: '110px' }}></div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MainPage;
