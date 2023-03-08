import { flip, offset, shift, useClick, useFloating, useInteractions } from '@floating-ui/react';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';
import { AnimatePresence, motion } from 'framer-motion';
import type { MutableRefObject } from 'react';
import { useRef, useState } from 'react';
import { TiFilter } from 'react-icons/ti';

import { vars } from '@animations/pop-up';

import { technologies } from '@data/technologies';

import styles from './SelectTechnology.module.scss';

export const SelectTechnology = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  const toggleOpen = () => setIsOpen(!isOpen);

  const { x, y, refs, context } = useFloating({ open: isOpen, onOpenChange: setIsOpen, placement: 'bottom', middleware: [offset(16), flip(), shift()] });
  const click = useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  useKey('Escape', toggleOpen, { when: isOpen });
  useOutsideClick(ref, toggleOpen, isOpen);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={styles.select} role="option" aria-selected ref={refs.setReference} {...getReferenceProps()}>
        <span>All Technologies</span>
        <TiFilter size={19} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={refs.setFloating}
            {...getFloatingProps()}
            style={{ top: y ?? 0, right: x ?? 0 }}
            className={styles['pop-up']}
            variants={vars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {technologies.map((technology) => (
              <button key={technology}>
                <span>{technology}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
