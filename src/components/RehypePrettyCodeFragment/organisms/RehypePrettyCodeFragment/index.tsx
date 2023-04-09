import type { MotionProps } from 'framer-motion';
import { useRef, useState } from 'react';
import type { FC, ReactHTMLElementProps } from 'react';

import { CodeHeader } from '@components/RehypePrettyCodeFragment/molecules/CodeHeader';
import { PreFragment, PreMotionFragment } from '@components/RehypePrettyCodeFragment/molecules/PreFragment';

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
  // const filename = ref.current?.parentElement?.querySelector('[data-rehype-pretty-code-title]')?.textContent ?? '';

  // console.log(test);

  return (
    <div className={`code-container ${theme} ${styles.container}`} ref={ref}>
      <CodeHeader text={copiedCode} />
      {isAnimate ? <PreMotionFragment setCopiedCode={setCopiedCode} {...props} /> : <PreFragment setCopiedCode={setCopiedCode} {...props} />}
    </div>
  );
};
