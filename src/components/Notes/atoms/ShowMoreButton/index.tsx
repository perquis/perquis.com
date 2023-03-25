import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import styles from './ShowMoreButton.module.scss';

export const ShowMoreButton = (props: DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  const [isFocus, setFocus] = useState(false);
  const { t } = useTranslation('global');
  const button = t('gotcha-button');

  const handleSetFocusOnTrue = () => setFocus(true);
  const handleSetFocusOnFalse = () => setFocus(false);

  return (
    <button
      className={styles.button}
      onMouseEnter={handleSetFocusOnTrue}
      onMouseLeave={handleSetFocusOnFalse}
      onFocus={handleSetFocusOnTrue}
      onBlur={handleSetFocusOnFalse}
      {...props}
    >
      {button}{' '}
      <motion.div className={styles.icon} animate={isFocus ? { x: -6 } : { x: 0 }}>
        <IoIosArrowBack size={18} />
      </motion.div>
    </button>
  );
};
