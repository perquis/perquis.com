import type { MotionProps } from 'framer-motion';
import type { FC, ReactHTMLElementProps } from 'react';
import { useRef, useState } from 'react';

import { CodeHeader, PreFragment, PreMotionFragment } from '@components/locals/RehypePrettyCodeFragment/molecules';

import styles from './RehypePrettyCodeFragment.module.scss';

interface IRehypePrettyCodeFragment {
  'data-theme'?: string;
  'data-language'?: string;
}

export const RehypePrettyCodeFragment: FC<Omit<ReactHTMLElementProps<HTMLPreElement>, 'ref'> & IRehypePrettyCodeFragment & MotionProps> = ({ ...props }) => {
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
