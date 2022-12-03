import React, { FC } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__project}>
        <a href="https://rs.school/react/">
          <img className={styles.footer__project_school} src={require(`../../assets/rs.svg`)} alt="logoRs" />
        </a>
        <a href="https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/project-management-system-EN.md">
          <img className={styles.footer__project_task} src={require(`../../assets/github.png`)} alt="logoGit" />
        </a>
      </div>
      <div className={styles.footer__team}>
        <a className={styles.footer__team_link} href="https://github.com/ZmitserFurmanau">
          Zmitser Furmanau
        </a>
        <a className={styles.footer__team_link} href="https://github.com/alexandr2075">
          Alexander Li
        </a>
        <a className={styles.footer__team_link} href="https://github.com/Glav-Tz">
          Anton Gorshkov
        </a>
      </div>
      <div className={styles.footer__year}>2022г.</div>
    </div>
  );
};

export default Footer;
