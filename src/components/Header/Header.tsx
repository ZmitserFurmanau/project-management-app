import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '~/hooks/redux';
import LangCheckbox from '../LangCheckbox';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { isLogged } = useAppSelector(state => state.auth);
  const { t } = useTranslation();
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
          <NavLink to="/logout" className={styles.link}>
            {t('LOGOUT_LINK')}
          </NavLink>
        )}
        <LangCheckbox />
      </div>
    </div>
  );
};

export default Header;
