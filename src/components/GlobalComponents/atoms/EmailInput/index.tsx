import clsx from 'clsx';
import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import { emailInputMaxLength } from '@data/validations';

import styles from './EmailInput.module.scss';

interface IEmailInputProps {
  isFullWidth?: boolean;
}

type Props = Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'> & IEmailInputProps;

export const EmailInput: FC<Props> = ({ isFullWidth, ...props }) => (
  <input type="email" className={clsx(styles.input, isFullWidth && styles['full-width'])} maxLength={emailInputMaxLength} {...props} />
);
