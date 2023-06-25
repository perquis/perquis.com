import { AnimatePresence } from 'framer-motion';
import type { MutableRefObject } from 'react';
import { useRef, useState } from 'react';

import { Select } from '@components/locals/SearchBar/atoms';
import { SelectOptions } from '@components/locals/SearchBar/molecules';
import { flip, offset, shift, useClick, useFloating, useInteractions } from '@floating-ui/react';
import useKey from '@rooks/use-key';
import useOutsideClick from '@rooks/use-outside-click';

import styles from './SelectTechnology.module.scss';

export const SelectTechnology = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;

  const toggleOpen = () => setIsOpen(!isOpen);

  const { y, refs, context } = useFloating({ open: isOpen, onOpenChange: setIsOpen, placement: 'bottom-end', middleware: [offset(16), flip(), shift()] });
  const click = useClick(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  useKey('Escape', toggleOpen, { when: isOpen });
  useOutsideClick(dialogRef, toggleOpen, isOpen);

  return (
    <div className={styles.wrapper} ref={dialogRef}>
      <Select refs={refs} getReferenceProps={getReferenceProps} />
      <AnimatePresence>{isOpen && <SelectOptions options={{ y, refs, getFloatingProps }} />}</AnimatePresence>
    </div>
  );
};
