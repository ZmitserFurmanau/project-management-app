import React, { FC, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { useAppSelector, useAppDispatch } from '~/hooks/redux';
import { resetIsDeleted } from '~/store/reducers/authSlice';
import Footer from '~/components/Footer';

import styles from './WelcomePage.module.scss';

const WelcomePage: FC = () => {
  const { isDeleted } = useAppSelector(state => state.auth);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    isDeleted &&
      toast.success(t('EDIT_PROFILE.USER_DELETED'), {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    return () => {
      dispatch(resetIsDeleted());
    };
  }, [dispatch, isDeleted, t]);

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h1 className={styles.title}>Project management app</h1>
            <span className={styles.subtitle}>{t('WELCOME_PAGE.SUBTITLE')}</span>
            <p className={styles.descr}>{t('WELCOME_PAGE.DESCR')}</p>
          </div>
          <div className={styles.imgWrapper}>
            <img src="/assets/img/main.svg" alt="" width="1200" />
          </div>
        </div>
      </div>
      <img src="/assets/img/wave.svg" alt="" style={{ width: '100%', display: 'block', marginBottom: '-5px' }} />
      <div className={styles.filled}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.rslogoWrapper}>
              <img src="/assets/img/logo-rs.svg" alt="" width="647" />
            </div>
            <div className={styles.info}>
              <p className={styles.descr}>
                {t('WELCOME_PAGE.DESCR_RS')}
                <a href="https://rs.school/react/" target="__blank">
                  Rolling Scopes School React2022Q3
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/img/wave.svg"
        alt=""
        style={{ width: '100%', display: 'block', transform: 'rotate(180deg)', marginTop: '-5px' }}
      />
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.teamInfo}>
            <p className={styles.teamTitle}>{t('WELCOME_PAGE.TEAM_TITLE')}</p>
            <div className={styles.teamRow}>
              <img className={styles.avatar} src="/assets/img/team_zmitser_furmanau.png" alt="" />
              <p className={styles.member}>Zmitser Furmanau</p>
              <a href="https://github.com/ZmitserFurmanau" target="__blank" className={styles.github}>
                <img src="/assets/img/logo-github.svg" alt="" />
              </a>
            </div>
            <div className={styles.teamRow}>
              <img className={styles.avatar} src="/assets/img/team_alexander_li.png" alt="" />
              <p className={styles.member}>Alexander Li</p>
              <a href="https://github.com/alexandr2075" target="__blank" className={styles.github}>
                <img src="/assets/img/logo-github.svg" alt="" />
              </a>
            </div>
            <div className={styles.teamRow}>
              <img className={styles.avatar} src="/assets/img/team_anton_gorshkov.png" alt="" />
              <p className={styles.member}>Anton Gorshkov</p>
              <a href="https://github.com/Glav-Tz" target="__blank" className={styles.github}>
                <img src="/assets/img/logo-github.svg" alt="" />
              </a>
            </div>
          </div>
          <div className={styles.imgWrapper}>
            <img src="/assets/img/team.jpg" alt="" width="1000" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WelcomePage;
