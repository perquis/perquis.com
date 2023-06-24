import type { FC } from 'react';

import { StyledLink } from '@components/globals/atoms';
import type { Maybe } from '@graphql/databases/client';

import styles from './DateAndTitle.module.scss';

interface Details {
  date: string;
  title: Maybe<string>;
  href?: string;
}

export interface IDateAndTitle {
  isLink?: boolean;
}

export const DateAndTitle: FC<Record<'details', Details> & IDateAndTitle> = ({ details: { date, title, href }, isLink }) => {
  const isHref = href ? <StyledLink href={href}>{title}</StyledLink> : null;

  return (
    <div className={styles.wrapper}>
      <span className={styles.span}>{date}</span>
      <h2 className={styles.title}>{isLink ? isHref : <>{title}</>}</h2>
    </div>
  );
};
