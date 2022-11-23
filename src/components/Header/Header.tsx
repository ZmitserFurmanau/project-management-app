import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <NavLink to="/" className={styles.link}>
          Welcome
        </NavLink>
        <NavLink to="/login" className={styles.link}>
          Login
        </NavLink>
        <NavLink to="/signup" className={styles.link}>
          Sign up
        </NavLink>
        <NavLink to="/main" className={styles.link}>
          Main
        </NavLink>
      </div>
      <select className={styles.selectLang}>
        <option value="EN">EN</option>
        <option value="RU">RU</option>
      </select>
    </div>
  );
};

export default Header;
