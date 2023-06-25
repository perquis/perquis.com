import type { MotionProps } from 'framer-motion';
import type { FC, ReactHTMLElementProps } from 'react';
import { useRef, useState } from 'react';

import { CodeHeader, PreFragment, PreMotionFragment } from '@components/locals/CodeHighlighter/molecules';

import styles from './CodeHighlighter.module.scss';

interface ICodeHighlighter {
  'data-theme'?: string;
  'data-language'?: string;
}

export const CodeHighlighter: FC<Omit<ReactHTMLElementProps<HTMLPreElement>, 'ref'> & ICodeHighlighter & MotionProps> = ({ ...props }) => {
  const [copiedCode, setCopiedCode] = useState('');
  const theme = props['data-theme'] || 'default';
  const ref = useRef<HTMLDivElement>(null);
  const isAnimate = ref.current?.parentElement?.parentElement?.classList.contains('code-children') ?? false;

  return (
    <div className={`code-container ${theme} ${styles.container}`} ref={ref}>
      <CodeHeader text={copiedCode} />
      {isAnimate ? <PreMotionFragment setCopiedCode={setCopiedCode} {...props} /> : <PreFragment setCopiedCode={setCopiedCode} {...props} />}
    </div>
  );
};
