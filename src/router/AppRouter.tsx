import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import MainPage from '~/pages/MainPage';
import WelcomePage from '~/pages/WelcomePage';
import LoginPage from '~/pages/LoginPage';
import SignupPage from '~/pages/SignupPage';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<WelcomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="main" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
