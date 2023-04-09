import { LayoutGroup } from 'framer-motion';
import { useState } from 'react';
import type { FC, ReactHTMLElementProps } from 'react';

import { CodeHeader } from '@components/RehypePrettyCodeFragment/molecules/CodeHeader';
import { PreFragment } from '@components/RehypePrettyCodeFragment/molecules/PreFragment';

import styles from './RehypePrettyCodeFragment.module.scss';

interface IRehypePrettyCodeFragment {
  'data-theme'?: string;
  'data-language'?: string;
}

export const RehypePrettyCodeFragment: FC<ReactHTMLElementProps<HTMLPreElement> & IRehypePrettyCodeFragment> = ({ ...props }) => {
  const [copiedCode, setCopiedCode] = useState('');
  const theme = props['data-theme'] || 'default';

  return (
    <div className={`code-container ${theme} ${styles.container}`}>
      <CodeHeader text={copiedCode} />
      <LayoutGroup>
        <PreFragment setCopiedCode={setCopiedCode} {...props} />
      </LayoutGroup>
    </div>
  );
};
