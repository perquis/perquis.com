import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import { emailInputMaxLength } from '@data/validations';

import styles from './EmailInput.module.scss';

interface IEmailInputProps {
  isFullWidth?: boolean;
}

type Props = Omit<ReactHTMLElementProps<HTMLInputElement>, 'className' | 'children'> & IEmailInputProps;

export const EmailInput: FC<Props> = ({ isFullWidth, ...props }) => (
  <input type="email" className={clsx(styles.input, isFullWidth && styles['full-width'])} maxLength={emailInputMaxLength} {...props} />
);
