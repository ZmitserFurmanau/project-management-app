import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

import { useAppSelector } from '~/hooks/redux';
import LangCheckbox from '../LangCheckbox';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { isLogged } = useAppSelector(state => state.auth);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 75) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
  }, []);

  return (
    <>
      <div className={`${styles.wrapper} ${isSticky ? 'sticky' : ''}`}>
        <div className={styles.navbar}>
          {isLogged ? (
            <>
              <Button variant="contained" onClick={() => navigate('/logout')} sx={{ margin: 0.5 }}>
                {t('LOGOUT_LINK')}
              </Button>
              <Button variant="contained" onClick={() => navigate('/profile')} sx={{ margin: 0.5 }}>
                {t('EDIT_PROFILE_LINK')}
              </Button>
              {pathname === '/welcome' ? (
                <Button variant="contained" onClick={() => navigate('/')} sx={{ margin: 0.5 }}>
                  {t('MAIN_PAGE_LINK')}
                </Button>
              ) : (
                <Button variant="contained" onClick={() => navigate('/welcome')} sx={{ margin: 0.5 }}>
                  {t('WELCOME_PAGE_LINK')}
                </Button>
              )}
            </>
          ) : (
            <>
              <Button variant="contained" onClick={() => navigate('/login')} sx={{ margin: 0.5 }}>
                {t('LOGIN_LINK')}
              </Button>
              <Button variant="contained" onClick={() => navigate('/signup')} sx={{ margin: 0.5 }}>
                {t('SIGNUP_LINK')}
              </Button>
            </>
          )}
          <LangCheckbox />
        </div>
      </div>
      <div style={{ height: '130px' }}></div>
    </>
  );
};

export default Header;
