import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { FC, MutableRefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

import styles from './LocalesList.module.scss';

const languages = ['pl', 'en'];
const vars: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 40,
    opacity: 0,
  },
};

interface ILocaleListProps {
  isActive: boolean;
  toggleLocales: () => void;
}

export const LocalesList: FC<ILocaleListProps> = ({ isActive, toggleLocales }) => {
  const [mounted, setMounted] = useState(false);
  const { locale, asPath, push } = useRouter();
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  useKey('Escape', toggleLocales);
  useOutsideClick(ref, toggleLocales, isActive && !!mounted);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.div className={styles.visible} variants={vars} initial="initial" animate="animate" exit="exit" ref={ref}>
      {languages
        .filter((lng) => lng !== locale)
        .map((lng) => (
          <button
            key={lng}
            onClick={() => {
              if (isActive) toggleLocales();
              push(asPath, asPath, { locale: lng });
            }}
          >
            {lng}
          </button>
        ))}
    </motion.div>
  );
};
