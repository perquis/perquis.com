import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoMdArrowDropleft } from 'react-icons/io';

import { LocalesList } from '@components/Navigation/atoms/LocalesList';

import { useChangeLocalesOnBlogPage } from '@hooks/usePushOnBlogPage';

import styles from './ChangeLocales.module.scss';

export const ChangeLocales = () => {
  const { locale } = useRouter();

  const [isActive, setActive] = useState(false);
  const toggleLocales = () => setActive(!isActive);

  const { handleChangeLocalesOnBlogPage } = useChangeLocalesOnBlogPage();

  return (
    <div className={styles.locales}>
      <button className={styles.button} onClick={toggleLocales} onKeyDown={(e) => e.key === 'ArrowUp' && handleChangeLocalesOnBlogPage()}>
        {locale}{' '}
        <motion.div animate={isActive ? { rotate: -90 } : { rotate: 0 }}>
          <IoMdArrowDropleft size={19} />
        </motion.div>
      </button>
      {<AnimatePresence>{isActive && <LocalesList isActive={isActive} toggleLocales={toggleLocales} />}</AnimatePresence>}
    </div>
  );
};
