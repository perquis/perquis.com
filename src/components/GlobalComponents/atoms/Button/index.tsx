import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import styles from './Button.module.scss';

interface Props {
  isSecondary?: boolean;
  isTertiary?: boolean;
}

type ButtonProps = Props & Omit<ReactHTMLElementProps<HTMLButtonElement>, 'className'>;

export const Button: FC<ButtonProps> = ({ children, isSecondary, isTertiary, ...rest }) => {
  const className = clsx(styles.button, isSecondary && styles.secondary, isTertiary && styles.tertiary, !isSecondary && !isTertiary && styles.interactions);
  const type = clsx(isTertiary ? 'reset' : 'submit');

  return (
    // @ts-ignore
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  );
};
