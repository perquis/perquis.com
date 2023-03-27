import clsx from 'clsx';
import type { FC } from 'react';

import styles from './Dot.module.scss';

interface IDotProps {
  isBig?: boolean;
}

export const Dot: FC<IDotProps> = ({ isBig }) => <div className={clsx(styles.dot, isBig && styles.big)} />;
