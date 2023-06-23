import { motion } from 'framer-motion';
import { useEffect } from 'react';

import useKey from '@rooks/use-key';
import { useBlurStore } from '@stories';

import styles from './Blur.module.scss';

export const Blur = () => {
  const [isBlur, updateIsBlur] = useBlurStore((state) => [state.isBlur, state.updateIsBlur]);
  const closeBlur = () => updateIsBlur(false);

  useKey('Escape', closeBlur, { when: isBlur });
  useEffect(() => {
    document.body.dataset.scroll = 'block';

    return () => {
      document.body.dataset.scroll = 'none';
    };
  }, []);

  return <motion.div className={styles.blur} onClick={closeBlur} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />;
};
