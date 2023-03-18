import type { FC } from 'react';

import { StyledLink } from '@GlobalComponents/atoms/StyledLink';

import type { Maybe } from '@graphql/databases/client';

import styles from './DateAndTitle.module.scss';

interface IDateAndTitle {
  date: string;
  title: Maybe<string>;
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
