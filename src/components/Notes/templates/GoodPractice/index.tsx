import type { Children as ChildrenProps, FC } from 'react';

import { NoteTemplate } from '@components/Notes/organisms/NoteTemplate';

import styles from './GoodPractice.module.scss';

export const GoodPractice: FC<ChildrenProps> = ({ children }) => {
  return (
    <NoteTemplate noteClassName={styles.note} heroPatternClassName={styles['hero-pattern']}>
      {children}
    </NoteTemplate>
  );
};
