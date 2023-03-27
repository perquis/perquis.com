import clsx from 'clsx';
import type { Children, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Button.module.scss';

interface Props {
  isSecondary?: boolean;
  isTertiary?: boolean;
}

type ComponentAttributes = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonProps = Children & Props & Omit<ComponentAttributes, 'className'>;

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
