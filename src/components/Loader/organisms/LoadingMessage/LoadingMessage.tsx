import { motion } from 'framer-motion';
import { Rings } from 'react-loader-spinner';

import { vars } from '@animations';
import { useInternationalizedRouting } from '@hooks';

import styles from './LoadingMessage.module.scss';

export const LoadingMessage = () => {
  const { loadingMessage } = useInternationalizedRouting('global');

  return (
    <motion.div className={styles.wrapper} variants={vars} initial="initial" animate="animate" exit="exit">
      <Rings width="32" height="32" color="#5100ff" radius="6" visible={true} ariaLabel="rings-loading" />
      <span>{loadingMessage}</span>
    </motion.div>
  );
};
