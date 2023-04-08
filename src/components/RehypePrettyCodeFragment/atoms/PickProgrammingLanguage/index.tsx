import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';

import { firaCode } from '@fonts/FiraCode';

import styles from './PickProgrammingLanguage.module.scss';

export const PickProgrammingLanguage: FC<ReactHTMLElementProps<HTMLButtonElement> & { isActive: boolean }> = ({ children, isActive, ...props }) => {
  return (
    <button
      className={clsx(styles['pick-programming-language'], isActive && styles['is-active'], !isActive && styles['is-not-active'], firaCode.className, 'pick-language')}
      {...props}
      tabIndex={isActive ? -1 : 0}
    >
      {children}
    </button>
  );
};
