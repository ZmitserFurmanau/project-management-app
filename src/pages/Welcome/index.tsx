import React, { FC } from 'react'
import './Welcome.scss';
import logo from '../../assets/logo.svg';
import rs from '../../assets/rs.svg';
import github from '../../assets/github.png';

const Welcome: FC = () => {
  return (
    <div className='welcome-page'>
      <header className='header'>
        <a className='logo' href='/'><img src={logo} alt='logo' /></a>
        <div className='block-sign'>
          <a className='sign' href='/'>Sign in</a>
          <a className='sign' href='/'>Sign up</a>
          <select className='sign sel'>
            <option value="value1">EN</option>
            <option value="value2">RU</option>
          </select>
        </div>

      </header>
      <main className='main'>
        Welcome
      </main>
      <footer className='footer'>
        <a className='rs' href='https://rs.school/react/'>
        <img src={rs} alt='rs-school' />
        </a>
        <a className='github' href='https://rs.school/react/'>
        <img src={github} alt='rs-school' />Дмитрий
        </a>
        <a className='github' href='https://rs.school/react/'>
        <img src={github} alt='rs-school' />Антон
        </a>
        <a className='github' href='https://rs.school/react/'>
        <img src={github} alt='rs-school' />Александр
        </a>
        <p>2022</p>
      </footer>

    </div>
  )
}

export default Welcome;