import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import { emailInputMaxLength } from '@data';

import styles from './EmailInput.module.scss';

interface IEmailInputProps {
  isFullWidth?: boolean;
}

type Props = Omit<ReactHTMLElementProps<HTMLInputElement>, 'className' | 'children'> & IEmailInputProps & { value: string };

export const EmailInput: FC<Props> = ({ isFullWidth, value, ...props }) => (
  <input
    type="email"
    name="email"
    className={clsx(styles.input, isFullWidth && styles['full-width'])}
    minLength={5}
    maxLength={emailInputMaxLength}
    {...props}
    value={value}
    required
  />
);
