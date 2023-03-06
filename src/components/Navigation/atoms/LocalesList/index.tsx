import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { FC, MutableRefObject } from 'react';
import { useRef } from 'react';

import { vars } from '@animations/pop-up';

import { useDropdownMenu } from '@hooks/useDropdownMenu';

import { languages } from '@data/languages';

import styles from './LocalesList.module.scss';

interface ILocaleListProps {
  isActive: boolean;
  toggleLocales: () => void;
}

export const LocalesList: FC<ILocaleListProps> = ({ isActive, toggleLocales }) => {
  const { locale, asPath, push } = useRouter();
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  useDropdownMenu(toggleLocales, { ref, state: { isActive } });

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
