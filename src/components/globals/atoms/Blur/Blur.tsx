import { motion } from 'framer-motion';
import { useEffect } from 'react';

import useKey from '@rooks/use-key';
import { useGlobalStore } from '@stories';

import styles from './Blur.module.scss';

export const Blur = () => {
  const [open, updateOpen] = useGlobalStore(({ open, updateOpen }) => [open, updateOpen]);
  const closeBlur = () => updateOpen(null);

  useKey('Escape', closeBlur, { when: open === 'blur' });
  useEffect(() => {
    document.body.dataset.scroll = 'block';

    return () => {
      document.body.dataset.scroll = 'none';
    };
  }, []);

  return <motion.div className={styles.blur} onClick={closeBlur} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />;
};
