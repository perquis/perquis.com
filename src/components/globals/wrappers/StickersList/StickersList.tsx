import type { Children, FC } from 'react';

import styles from './StickersList.module.scss';

export const StickersList: FC<Children> = ({ children }) => {
  return <div className={styles['stickers-list']}>{children}</div>;
};
