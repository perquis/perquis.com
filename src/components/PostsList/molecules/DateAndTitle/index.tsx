import type { FC } from 'react';

import { StyledLink } from '@components/global/atoms/StyledLink';

import styles from './DateAndTitle.module.scss';

interface IDateAndTitle {
  date: string;
  title: string;
  href: string;
}

export const DateAndTitle: FC<Record<'details', IDateAndTitle>> = ({ details: { date, title, href } }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.span}>{date}</span>
      <h2 className={styles.title}>
        <StyledLink href={href}>{title}</StyledLink>
      </h2>
    </div>
  );
};
