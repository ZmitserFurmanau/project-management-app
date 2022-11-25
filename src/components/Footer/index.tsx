import React, { FC } from 'react';
import './Footer.scss';
import rs from '../../assets/rs.svg';
import github from '../../assets/github.png';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <a className="rs" href="https://rs.school/react/">
        <img src={rs} alt="rs-school" />
      </a>
      <a className="github" href="https://github.com/ZmitserFurmanau">
        <img src={github} alt="rs-school" />
        Дмитрий
      </a>
      <a className="github" href="https://github.com/Glav-Tz">
        <img src={github} alt="rs-school" />
        Антон
      </a>
      <a className="github" href="https://github.com/alexandr2075">
        <img src={github} alt="rs-school" />
        Александр
      </a>
      <p>2022</p>
    </footer>
  );
};

export default Footer;
