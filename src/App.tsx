import React, { FC, useEffect, useState } from 'react';

import Header from '~/components/Header';
import AppRouter from './router/AppRouter';
import Footer from '~/components/Footer';
import { restoreLang } from './store/reducers/langSlice';
import { restoreToken, setUserId, setUserLogin, setUserName } from './store/reducers/authSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getDecodedToken } from '~/utils/getDecodedToken';
import { DecodedTokenData } from './types/api';
import { getUserName } from '~/utils/getUserName';
import '~/locales';

import './style/style.scss';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { token, isLogged } = useAppSelector(state => state.auth);
  const [isInit, setIsInit] = useState(false);

  const getName = async (userId: string) => {
    const userName = await getUserName(userId);
    dispatch(setUserName(userName));
  };

  useEffect(() => {
    dispatch(restoreToken());
    dispatch(restoreLang());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      const { userId, login } = getDecodedToken() as DecodedTokenData;
      dispatch(setUserId(userId));
      dispatch(setUserLogin(login));
      getName(userId);
    }
  }, [dispatch, token]);

  useEffect(() => {
    setIsInit(true);
  }, [isLogged]);

  return isInit ? (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  ) : (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    ></div>
  );
};

export default App;
