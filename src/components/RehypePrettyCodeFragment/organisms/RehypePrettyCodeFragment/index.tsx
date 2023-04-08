import type { FC, ReactHTMLElementProps } from 'react';
import { useRef } from 'react';

import { CodeHeader } from '@components/RehypePrettyCodeFragment/molecules/CodeHeader';
import { PreFragment } from '@components/RehypePrettyCodeFragment/molecules/PreFragment';
import { ProgrammingLanguagesList } from '@components/RehypePrettyCodeFragment/molecules/ProgrammingLanguagesList';

import styles from './RehypePrettyCodeFragment.module.scss';

interface IRehypePrettyCodeFragment {
  'data-theme'?: string;
  'data-language'?: string;
}

export const RehypePrettyCodeFragment: FC<ReactHTMLElementProps<HTMLPreElement> & IRehypePrettyCodeFragment> = ({ ...props }) => {
  // const lang = props['data-language'] || 'shell';
  const theme = props['data-theme'] || 'default';
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={`code-wrapper ${theme} ${styles.wrapper}`}>
      <ProgrammingLanguagesList />
      <div className="code-container">
        <CodeHeader text={ref.current?.textContent ?? ''} />
        {/* @ts-ignore */}
        <PreFragment ref={ref} {...props} />
      </div>
    </div>
  );
};
