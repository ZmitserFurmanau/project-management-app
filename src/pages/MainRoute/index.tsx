import * as React from 'react';
import { BoardsList } from '../../components/BoardsLists';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './MainRoute.scss'

// export interface IAppProps {
// }

export function MainRoute () {
  return (
    <div className='main-route'>
      <Header nameBtnA='Make board' nameBtnB='Profile'/>
      <BoardsList />
      <Footer />
    </div>
  );
}

