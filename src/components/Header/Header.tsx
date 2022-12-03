import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '~/hooks/redux';
import LangCheckbox from '../LangCheckbox';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { isLogged } = useAppSelector(state => state.auth);
<<<<<<< HEAD
  const { t } = useTranslation();
=======

>>>>>>> 97f9c5114bb71972832df9d5857aa18c1a1abde9
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        {!isLogged && (
          <>
            <NavLink to="/login" className={styles.link}>
              {t('LOGIN_LINK')}
            </NavLink>
            <NavLink to="/signup" className={styles.link}>
              {t('SIGNUP_LINK')}
            </NavLink>
          </>
        )}
        {isLogged && (
<<<<<<< HEAD
          <NavLink to="/logout" className={styles.link}>
            {t('LOGOUT_LINK')}
          </NavLink>
=======
          <>
            <NavLink to="/logout" className={styles.link}>
              Выйти
            </NavLink>
          </>
>>>>>>> 97f9c5114bb71972832df9d5857aa18c1a1abde9
        )}
        <LangCheckbox />
      </div>
    </div>
  );
};

export default Header;
