/* eslint-disable */
import { useEffect, useRef } from 'react';
import type { Dispatch, FC, ReactHTMLElementProps, SetStateAction } from 'react';

import styles from './PreFragment.module.scss';

interface IPreFragment {
  setCopiedCode: Dispatch<SetStateAction<string>>;
}

export const PreFragment: FC<ReactHTMLElementProps<HTMLPreElement> & IPreFragment> = ({ children, setCopiedCode, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setCopiedCode(ref.current?.textContent ?? ''), []);

  return (
    <pre {...props} className={styles.pre}>
      <div ref={ref} className="code">
        {children}
      </div>
    </pre>
  );
};
