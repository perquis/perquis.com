import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

import { vars } from '@animations/pop-up';

import { useTOCStore } from '@stories/toc';

import styles from './TableOfContents.module.scss';

export const TableOfContents = () => {
  const { t } = useTranslation('global');
  const heading = t('toc');
  const [__html] = useTOCStore((state) => [state.slugs]);

  return (
    <motion.div className={styles.toc} variants={vars} initial="initial" animate="animate" exit="exit">
      <h3>{heading}</h3>
      <nav dangerouslySetInnerHTML={{ __html }}></nav>
    </motion.div>
  );
};
