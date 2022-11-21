import React, { FC } from 'react'
import './Header.scss';
import logo from '../../assets/logo.svg';

const Header: FC = () => {
  return (
	<header className='header'>
        <a className='logo' href='/'><img src={logo} alt='logo' /></a>
        <div className='block-sign'>
          <a className='sign' href='/'><span>Sign in</span></a>
          <a className='sign' href='/'><span>Sign up</span></a>
          <select className='select'>
            <option value="value1">EN</option>
            <option value="value2">RU</option>
          </select>
        </div>
      </header>
  )
}

export default Header