import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { MutableRefObject } from 'react';
import { useRef } from 'react';
import ReactFocusLock from 'react-focus-lock';

import { TocItem } from '@components/TableOfContents/molecules/TocItem';

import { useTOCStore } from '@stories/toc';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './TableOfContents.module.scss';

export const TableOfContents = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { tableOfContentsHeading } = useInternationalizedRouting('global');
  const [items, toggleToc, updateToggleToc] = useTOCStore((state) => [state.items, state.toggleToc, state.updateToggleToc]);

  useKey('Escape', () => updateToggleToc(false), { when: toggleToc });
  useOutsideClick(ref as unknown as MutableRefObject<HTMLElement>, () => updateToggleToc(false), toggleToc);

  return (
    <motion.aside
      ref={ref}
      exit={{ x: 'calc(100% - 2.4rem)' }}
      initial={{ x: 'calc(100% - 2.4rem)' }}
      animate={!toggleToc ? { x: 560 } : { x: 0 }}
      className={clsx(styles.toc, toggleToc && styles['toc-active'])}
      transition={{ duration: 0.15 }}
    >
      <ReactFocusLock disabled={!toggleToc}>
        <button className={clsx(styles.button, toggleToc && styles.active)} onClick={() => updateToggleToc(!toggleToc)} />
        <div className={styles['toc-list']}>
          <h3>{tableOfContentsHeading}</h3>
          <nav>
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
