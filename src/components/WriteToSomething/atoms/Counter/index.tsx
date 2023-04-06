import type { FC } from 'react';

import type { UseFormResult } from '@hooks/useForm';

import { textAreaMaxLength } from '@data/validations';

import styles from './Counter.module.scss';

export const Counter: FC<Pick<UseFormResult, 'content'>> = ({ content: keywords }) => {
  return (
    <span className={styles.counter}>
      {keywords.length}/{textAreaMaxLength}
    </span>
  );
};
