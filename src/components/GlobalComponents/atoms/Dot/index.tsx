import clsx from 'clsx';
import type { FC } from 'react';

import styles from './Dot.module.scss';

interface IDotProps {
  isBig?: boolean;
  isSandpack?: boolean;
}

export const Dot: FC<IDotProps> = ({ isBig, isSandpack }) => <div className={clsx(styles.dot, isBig && styles.big, isSandpack && styles.sandpack)} />;
