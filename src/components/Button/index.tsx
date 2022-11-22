import * as React from 'react';
import './Button.scss'

export interface INameButtonProps {
  name: string
  onClick?: ()=>void
}

export const Button: React.FC<INameButtonProps> = (props) => {

  return (
    <>
      <a className='neo-button' onClick={props.onClick}>
        <span>{props.name}</span>
      </a>
    </>
  );
}
