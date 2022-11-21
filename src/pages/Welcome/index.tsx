import React, { FC } from 'react'
import './Welcome.scss';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

const Welcome: FC = () => {
  return (
    <div className='welcome-page'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Welcome;