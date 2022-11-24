import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '~/hooks/redux';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { isLogged } = useAppSelector(state => state.auth);
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        {!isLogged && (
          <>
            <NavLink to="/login" className={styles.link}>
              Войти
            </NavLink>
            <NavLink to="/signup" className={styles.link}>
              Зарегистрироваться
            </NavLink>
          </>
        )}
        {isLogged && (
          <NavLink to="/logout" className={styles.link}>
            Выйти
          </NavLink>
        )}
      </div>
      {/* <select className={styles.selectLang}>
        <option value="EN">EN</option>
        <option value="RU">RU</option>
      </select> */}
    </div>
  );
};

export default Header;
