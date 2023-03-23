import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { emailInputMaxLength } from '@data/validations';

import styles from './EmailInput.module.scss';

interface IEmailInput {
  isFullWidth?: boolean;
}

export const EmailInput = ({ isFullWidth, ...props }: Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'> & IEmailInput) => (
  <input type="email" className={`${styles.input} ${isFullWidth ? styles['full-width'] : ''}`} {...props} maxLength={emailInputMaxLength} />
);
