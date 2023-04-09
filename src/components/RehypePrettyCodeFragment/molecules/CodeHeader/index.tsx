import type { FC } from 'react';

import { Dot } from '@GlobalComponents/atoms/Dot';

import { CopyButton } from '@components/RehypePrettyCodeFragment/atoms/CopyButton';

import styles from './CodeHeader.module.scss';

interface ICodeHeader {
  text: string;
}

const arr = [0, 1, 2];

export const CodeHeader: FC<ICodeHeader> = ({ text }) => {
  return (
    <div className={`code-header ${styles.header}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {arr.map((_, i) => (
          <Dot key={i} isBig />
        ))}
      </div>
      <CopyButton text={text} />
    </div>
  );
};
