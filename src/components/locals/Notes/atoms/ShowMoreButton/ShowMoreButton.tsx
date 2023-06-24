import { motion } from 'framer-motion';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { useInternationalizedRouting } from '@hooks';

import styles from './ShowMoreButton.module.scss';

export const ShowMoreButton = (props: DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  const [isFocus, setFocus] = useState(false);
  const { gotchaButton } = useInternationalizedRouting('global');

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
      {gotchaButton}{' '}
      <motion.div className={styles.icon} animate={isFocus ? { x: -6 } : { x: 0 }}>
        <IoIosArrowBack size={18} />
      </motion.div>
    </button>
  );
};
