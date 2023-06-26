import clsx from 'clsx';
import type { FC, ReactHTMLElementProps } from 'react';
import { CgArrowLongRightC } from 'react-icons/cg';

import styles from './Item.module.scss';

export const Item: FC<ReactHTMLElementProps<HTMLLIElement>> = ({ children, className, ...props }) => {
  return (
    <li className={clsx(styles.li, className)} {...props}>
      <div>
        <CgArrowLongRightC size={24} />
      </div>
      {children}
    </li>
  );
};
