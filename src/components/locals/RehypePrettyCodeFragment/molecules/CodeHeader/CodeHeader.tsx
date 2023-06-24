import type { FC } from 'react';

import { Dot } from '@components/globals/atoms';
import { CopyButton } from '@components/locals/RehypePrettyCodeFragment/atoms';
import { dots } from '@data';

import styles from './CodeHeader.module.scss';

interface ICodeHeader {
  text: string;
}

export const CodeHeader: FC<ICodeHeader> = ({ text }) => {
  return (
    <div className={`code-header ${styles.header}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {dots.map((_, i) => (
          <Dot key={i} isBig />
        ))}
      </div>
      <CopyButton text={text} />
    </div>
  );
};
