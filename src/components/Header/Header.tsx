import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

import { useAppSelector } from '~/hooks/redux';
import LangCheckbox from '../LangCheckbox';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { isLogged } = useAppSelector(state => state.auth);
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        {isLogged ? (
          <>
            <Button variant="contained" onClick={() => navigate('/logout')} sx={{ marginLeft: 1, marginRight: 1 }}>
              {t('LOGOUT_LINK')}
            </Button>
            <Button variant="contained" onClick={() => navigate('/profile')} sx={{ marginLeft: 1, marginRight: 1 }}>
              {t('EDIT_PROFILE_LINK')}
            </Button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={styles.link}>
              {t('LOGIN_LINK')}
            </NavLink>
            <NavLink to="/signup" className={styles.link}>
              {t('SIGNUP_LINK')}
            </NavLink>
          </>
        )}
        <LangCheckbox />
      </div>
    </div>
  );
};

export default Header;
