import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import ReactFocusLock from 'react-focus-lock';

import { TocItem } from '@components/locals/TableOfContents/molecules';
import { useInternationalizedRouting } from '@hooks';
import useKey from '@rooks/use-key';
import { useTOCStore } from '@stories';

import styles from './TableOfContents.module.scss';

export const TableOfContents = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { tableOfContentsHeading } = useInternationalizedRouting('global');
  const [items, isOpen, toggleOpen] = useTOCStore(({ items, isOpen, toggleOpen }) => [items, isOpen, toggleOpen]);

  useKey('Escape', () => toggleOpen(true), { when: !isOpen });

  return (
    <motion.aside
      ref={ref}
      exit={{ x: '100%' }}
      initial={{ x: '100%' }}
      animate={isOpen ? { x: 560 } : { x: 0 }}
      className={clsx(styles.toc, !isOpen && styles['toc-active'])}
      transition={{ duration: 0.15 }}
    >
      <ReactFocusLock disabled={isOpen}>
        <button className={clsx(styles.button, !isOpen && styles.active)} onClick={() => toggleOpen(!isOpen)} />
        <div className={styles['toc-list']}>
          <h3>{tableOfContentsHeading}</h3>
          <menu className={styles.nav}>
            {items.map(({ href, textContent, status }, i) => (
              <TocItem href={href} status={status} chapter={i} key={i}>
                {textContent}
              </TocItem>
            ))}
          </menu>
        </div>
      </ReactFocusLock>
    </motion.aside>
  );
};
