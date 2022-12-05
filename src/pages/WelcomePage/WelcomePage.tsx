import React, { FC, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { useAppSelector, useAppDispatch } from '~/hooks/redux';
import { resetIsDeleted } from '~/store/reducers/authSlice';

import styles from './WelcomePage.module.scss';

const WelcomePage: FC = () => {
  const { isDeleted } = useAppSelector(state => state.auth);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    isDeleted &&
      toast.success(t('EDIT_PROFILE.USER_DELETED'), {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    return () => {
      dispatch(resetIsDeleted());
    };
  }, [dispatch, isDeleted, t]);

  return (
    <div>
      <ToastContainer />
      <h1>Welcome Page</h1>
    </div>
  );
};

export default WelcomePage;
