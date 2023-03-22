import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { emailInputMaxLength } from '@data/validations';

import styles from './EmailInput.module.scss';

export const EmailInput = (props: Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'>) => (
  <input type="email" className={styles.input} {...props} maxLength={emailInputMaxLength} />
);
