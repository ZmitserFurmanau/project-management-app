import React, { FC } from 'react'
import './Header.scss';
import logo from '../../assets/logo.svg';
import { Button } from '../Button';

interface INameBtnProps {
  nameBtnA: string
  nameBtnB: string
}

const Header: FC<INameBtnProps> = (props) => {

  return (
	<header className='header'>
        <a className='logo' href='/'><img src={logo} alt='logo' /></a>
        <div className='block-sign'>
          <Button name={props.nameBtnA} />
          <Button name={props.nameBtnB} />
          <select className='select'>
            <option value="value1">EN</option>
            <option value="value2">RU</option>
          </select>
        </div>
      </header>
  )
}

export default Header