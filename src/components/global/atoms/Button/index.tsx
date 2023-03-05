import type { Children, DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import styles from './Button.module.scss';

interface Props {
  isSecondary?: boolean;
}

type ComponentAttributes = DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonProps = Children & Props & Omit<ComponentAttributes, 'className'>;

export const Button: FC<ButtonProps> = (props) => {
  const { children, isSecondary, ...rest } = props;

  const className = isSecondary ? `${styles.button} ${styles.secondary}` : `${styles.button} ${styles.interactions}`;

  return (
    <button {...rest} className={className}>
      {children}
    </button>
  );
};
