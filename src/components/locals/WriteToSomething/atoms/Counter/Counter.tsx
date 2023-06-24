import type { FC } from 'react';

import { textAreaMaxLength } from '@data';
import type { UseFormResult } from '@hooks';

import styles from './Counter.module.scss';

export const Counter: FC<Pick<UseFormResult, 'content'>> = ({ content: keywords }) => {
  return (
    <span className={styles.counter}>
      {keywords.length}/{textAreaMaxLength}
    </span>
  );
};
