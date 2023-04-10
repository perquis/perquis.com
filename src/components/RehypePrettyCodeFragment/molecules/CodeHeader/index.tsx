import type { FC } from 'react';

import { Dot } from '@GlobalComponents/atoms/Dot';

import { CopyButton } from '@components/RehypePrettyCodeFragment/atoms/CopyButton';

import { dots } from '@data/dots';

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
