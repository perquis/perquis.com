import type { Children, FC } from 'react';

import styles from './IframeContainer.module.scss';

export const IframeContainer: FC<Children> = ({ children }) => <div className={styles['iframe-container']}>{children}</div>;
