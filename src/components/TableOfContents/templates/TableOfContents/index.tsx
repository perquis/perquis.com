import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { MutableRefObject } from 'react';
import { useRef } from 'react';

import { TocItem } from '@components/TableOfContents/molecules/TocItem';

import { useTOCStore } from '@stories/toc';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

import styles from './TableOfContents.module.scss';

export const TableOfContents = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { tableOfContentsHeading } = useInternationalizedRouting('global');
  const [slugs, toggleToc, updateToggleToc] = useTOCStore((state) => [state.slugs, state.toggleToc, state.updateToggleToc]);

  useKey('Escape', () => updateToggleToc(true), { when: !toggleToc });
  useOutsideClick(ref as unknown as MutableRefObject<HTMLElement>, () => updateToggleToc(true), !toggleToc);

  return (
    <motion.aside
      ref={ref}
      exit={{ x: 'calc(100% - 2.4rem)' }}
      initial={{ x: 'calc(100% - 2.4rem)' }}
      animate={!toggleToc ? { x: -536 } : { x: 24 }}
      transition={{ ease: 'easeInOut' }}
      className={clsx(styles.toc, !toggleToc && styles['toc-active'])}
    >
      <button className={clsx(styles.button, !toggleToc && styles.active)} onClick={() => updateToggleToc(!toggleToc)} />
      <div className={styles['toc-list']}>
        <h3>{tableOfContentsHeading}</h3>
        <nav>
          <ul>
            {slugs.map(({ href, textContent, position, nextChapterPosition }, i) => (
              <TocItem href={href} index={i} status={position <= 0 && nextChapterPosition >= 0 ? 'visible' : position <= 0 && nextChapterPosition <= 0 ? 'read' : 'hidden'} key={i}>
                {textContent}
              </TocItem>
            ))}
          </ul>
        </nav>
      </div>
    </motion.aside>
  );
};
