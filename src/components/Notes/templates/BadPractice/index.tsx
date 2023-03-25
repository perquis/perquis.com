import type { Children as ChildrenProps, FC } from 'react';

import { NoteTemplate } from '@components/Notes/organisms/NoteTemplate';

import styles from './BadPractice.module.scss';

export const BadPractice: FC<ChildrenProps> = ({ children }) => {
  return (
    <NoteTemplate noteClassName={styles.note} heroPatternClassName={styles['hero-pattern']}>
      {children}
    </NoteTemplate>
  );
};
