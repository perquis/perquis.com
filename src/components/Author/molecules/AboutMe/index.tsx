import type { FC } from 'react';

import styles from './AboutMe.module.scss';

interface IAboutMe {
  title: string;
  description: string;
}

export const AboutMe: FC<IAboutMe> = ({ title, description }) => {
  return (
    <div className={styles.wrapper}>
      <b>{title}</b>
      <p>{description}</p>
    </div>
  );
};
