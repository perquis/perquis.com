import type { FC, ReactHTMLElementProps } from 'react';
import { useRef } from 'react';

import { Dot } from '@GlobalComponents/atoms/Dot';

import { CopyButton } from '@components/RehypePrettyCodeFragment/atoms/CopyButton';

import styles from './pre.module.scss';

const arr = [0, 1, 2];

export const RehypePrettyCodeFragment: FC<ReactHTMLElementProps<HTMLPreElement>> = ({ children, ...props }) => {
  // @ts-ignore
  const lang = props['data-language'] || 'shell';
  // @ts-ignore
  const theme = props['data-theme'] || 'default';
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={`code-header ${theme}`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {arr.map((_, i) => (
            <Dot key={i} isBig />
          ))}
        </div>
        <div className={styles.flex}>
          <CopyButton text={ref.current?.textContent ?? ''} />
          <span>{lang}</span>
        </div>
      </div>
      <pre {...props} className={styles.pre}>
        <div ref={ref} className="code">
          {children}
        </div>
      </pre>
    </>
  );
};
