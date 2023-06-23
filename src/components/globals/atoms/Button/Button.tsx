import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import styles from './Button.module.scss';

interface Props {
  isSecondary?: boolean;
  isTertiary?: boolean;
  disabled?: boolean;
}

type ButtonProps = Props & Omit<ReactHTMLElementProps<HTMLButtonElement>, 'className'>;

export const Button: FC<ButtonProps> = ({ children, isSecondary, isTertiary, disabled, ...rest }) => {
  const className = clsx(styles.button, isSecondary && styles.secondary, isTertiary && styles.tertiary, !isSecondary && !isTertiary && !disabled && styles.interactions);
  const type = clsx(isTertiary ? 'reset' : 'submit');

  return (
    // @ts-ignore
    <button className={className} type={type} {...rest} disabled={disabled}>
      {children}
    </button>
  );
};
