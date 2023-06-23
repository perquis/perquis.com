import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { FC, MutableRefObject } from 'react';
import { useRef } from 'react';

import { vars } from '@animations';
import { languages } from '@data/languages/languages';
import { useDropdownMenu, usePushOnBlogPage } from '@hooks';

import styles from './LocalesList.module.scss';

interface ILocaleListProps {
  isActive: boolean;
  toggleLocales: () => void;
}

export const LocalesList: FC<ILocaleListProps> = ({ isActive, toggleLocales }) => {
  const { locale } = useRouter();
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  const { handleChangeLocalesOnBlogPage } = usePushOnBlogPage();
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
              handleChangeLocalesOnBlogPage();
            }}
          >
            {lng}
          </button>
        ))}
    </motion.div>
  );
};
