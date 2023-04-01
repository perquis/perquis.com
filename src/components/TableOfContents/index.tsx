import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { MutableRefObject } from 'react';
import { useRef } from 'react';

import { useTOCStore } from '@stories/toc';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './TableOfContents.module.scss';

export const TableOfContents = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { tableOfContentsHeading } = useInternationalizedRouting('global');
  const [__html, toggleToc, updateToggleToc] = useTOCStore((state) => [state.slugs, state.toggleToc, state.updateToggleToc]);

  useKey('Escape', () => updateToggleToc(true));
  useOutsideClick(ref as unknown as MutableRefObject<HTMLElement>, () => updateToggleToc(true));

  return (
    <motion.div className={styles.toc} initial={{ x: '110%' }} animate={toggleToc ? { x: 400 } : { x: 24 }} exit={{ x: '110%' }} transition={{ ease: 'easeInOut' }} ref={ref}>
      <button className={clsx(styles.button, !toggleToc && styles.active)} onClick={() => updateToggleToc(!toggleToc)} />
      <div className={styles['toc-list']}>
        <h3>{tableOfContentsHeading}</h3>
        <nav dangerouslySetInnerHTML={{ __html }} />
      </div>
    </motion.div>
  );
};
