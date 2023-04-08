import { useState } from 'react';
import type { FC, ReactHTMLElementProps } from 'react';

import { CodeHeader } from '@components/RehypePrettyCodeFragment/molecules/CodeHeader';
import { PreFragment } from '@components/RehypePrettyCodeFragment/molecules/PreFragment';

interface IRehypePrettyCodeFragment {
  'data-theme'?: string;
  'data-language'?: string;
}

export const RehypePrettyCodeFragment: FC<ReactHTMLElementProps<HTMLPreElement> & IRehypePrettyCodeFragment> = ({ ...props }) => {
  // const lang = props['data-language'] || 'shell';
  const theme = props['data-theme'] || 'default';
  const [copiedCode, setCopiedCode] = useState('');

  return (
    <div className={`code-container ${theme}`}>
      <CodeHeader text={copiedCode} />
      {/* @ts-ignore */}
      <PreFragment setCopiedCode={setCopiedCode} {...props} />
    </div>
  );
};
