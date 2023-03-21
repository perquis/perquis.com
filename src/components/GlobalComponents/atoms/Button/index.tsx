import type { Children, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Button.module.scss';

interface Props {
  isSecondary?: boolean;
  isTertiary?: boolean;
}

type ComponentAttributes = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonProps = Children & Props & Omit<ComponentAttributes, 'className'>;

export const Button: FC<ButtonProps> = (props) => {
  const { children, isSecondary, isTertiary, ...rest } = props;
  const className = isSecondary ? `${styles.button} ${styles.secondary}` : isTertiary ? `${styles.tertiary} ${styles.button}` : `${styles.button} ${styles.interactions}`;

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};
