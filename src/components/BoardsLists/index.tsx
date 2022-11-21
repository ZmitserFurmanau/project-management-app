import * as React from 'react';
import { Button } from '../Button';
import './BoardsList.scss'

// export interface IAppProps {
// }

export function BoardsList () {
  return (
    <div className='boards-list'>
      <h1>Boards</h1>
      <Button name='Make board' />
      <div className='block-boards'></div>
    </div>
  );
}
