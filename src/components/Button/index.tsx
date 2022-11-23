import * as React from 'react';
import './Button.scss';

export interface INameButtonProps {
  name: string;
  onClick?: () => void;
  signup?: string;
}

export const Button: React.FC<INameButtonProps> = props => {
  return (
    <>
      <a className="neo-button" href={props.signup} onClick={props.onClick}>
        <span>{props.name}</span>
      </a>
    </>
  );
};
