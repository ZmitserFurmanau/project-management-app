import * as React from 'react';
import './Button.scss'

export interface INameButtonProps {
    name: string
}

export const Button: React.FC<INameButtonProps> = (props) => {
  return (
    <>
      <a className='neo-button' href='/'>
        <span>{props.name}</span>
        </a>
    </>
  );
}
