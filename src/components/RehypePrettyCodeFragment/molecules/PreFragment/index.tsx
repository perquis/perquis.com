/* eslint-disable */
import { motion, MotionProps } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { Dispatch, FC, ReactHTMLElementProps, SetStateAction } from 'react';

import { codeVars, preVars } from '@animations/code-motion';

import styles from './PreFragment.module.scss';

interface IPreFragment {
  setCopiedCode: Dispatch<SetStateAction<string>>;
}

export const PreMotionFragment: FC<Omit<ReactHTMLElementProps<HTMLPreElement>, 'ref'> & IPreFragment & MotionProps> = ({ children, setCopiedCode, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => setCopiedCode(ref.current?.textContent ?? ''), []);

  return (
    <motion.pre {...props} className={styles.pre} variants={preVars} initial="initial" animate="animate" exit="exit">
      <motion.div ref={ref} className="code" variants={codeVars} initial="initial" animate="animate" exit="exit">
        {children}
      </motion.div>
    </motion.pre>
  );
};

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
