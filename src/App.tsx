import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/Header';
import Footer from './components/Footer';
import './style/style.scss';

const App: FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
