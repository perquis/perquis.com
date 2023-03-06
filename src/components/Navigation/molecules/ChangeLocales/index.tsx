import { AnimatePresence, motion } from 'framer-motion';
import { IoMdArrowDropleft } from 'react-icons/io';

import { LocalesList } from '@components/Navigation/atoms/LocalesList';

import { useChangeLocalization } from '@hooks/useChangeLocalization';

import styles from './ChangeLocales.module.scss';

export const ChangeLocales = () => {
  const { locale, isActive, toggleLocales } = useChangeLocalization();

  return (
    <div className={styles.locales}>
      <button className={styles.button} onClick={toggleLocales}>
        {locale}{' '}
        <motion.div animate={isActive ? { rotate: -90 } : { rotate: 0 }}>
          <IoMdArrowDropleft size={19} />
        </motion.div>
      </button>
      {<AnimatePresence>{isActive && <LocalesList isActive={isActive} toggleLocales={toggleLocales} />}</AnimatePresence>}
    </div>
  );
};
