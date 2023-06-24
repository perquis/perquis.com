import type { FC, ReactHTMLElementProps } from 'react';

import styles from './FeaturedWarning.module.scss';

export const FeaturedWarning: FC<ReactHTMLElementProps<HTMLHeadingElement>> = ({ children }) => <h5 className={styles['featured-warning']}>{children}</h5>;
