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
  const [items, toggleToc, updateToggleToc] = useTOCStore(({ items, toggleToc, updateToggleToc }) => [items, toggleToc, updateToggleToc]);

  useKey('Escape', () => updateToggleToc(true), { when: !toggleToc });

  return (
    <motion.aside
      ref={ref}
      exit={{ x: 'calc(100% - 2.4rem)' }}
      initial={{ x: 'calc(100% - 2.4rem)' }}
      animate={toggleToc ? { x: 560 } : { x: 0 }}
      className={clsx(styles.toc, !toggleToc && styles['toc-active'])}
      transition={{ duration: 0.15 }}
    >
      <ReactFocusLock disabled={toggleToc}>
        <button className={clsx(styles.button, !toggleToc && styles.active)} onClick={() => updateToggleToc(!toggleToc)} />
        <div className={styles['toc-list']}>
          <h3>{tableOfContentsHeading}</h3>
          <nav className={styles.nav}>
            <ul>
              {items.map(({ chapter, href, textContent, position, nextChapterPosition }, i) => (
                <TocItem
                  href={href}
                  chapter={chapter}
                  status={position <= 0 && nextChapterPosition >= 0 ? 'visible' : position <= 0 && nextChapterPosition <= 0 ? 'read' : 'hidden'}
                  key={i}
                >
                  {textContent}
                </TocItem>
              ))}
            </ul>
          </nav>
        </div>
      </ReactFocusLock>
    </motion.aside>
  );
};
