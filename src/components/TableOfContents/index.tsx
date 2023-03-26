import { motion } from 'framer-motion';

import { vars } from '@animations/pop-up';

import { useTOCStore } from '@stories/toc';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './TableOfContents.module.scss';

export const TableOfContents = () => {
  const { tableOfContentsHeading } = useInternationalizedRouting('global');
  const [__html] = useTOCStore((state) => [state.slugs]);

  return (
    <motion.div className={styles.toc} variants={vars} initial="initial" animate="animate" exit="exit">
      <h3>{tableOfContentsHeading}</h3>
      <nav dangerouslySetInnerHTML={{ __html }} />
    </motion.div>
  );
};
