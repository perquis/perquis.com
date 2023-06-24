import { AnimatePresence } from 'framer-motion';

import { Select } from '@components/locals/SearchBar/atoms';
import { SelectOptions } from '@components/locals/SearchBar/molecules';
import { useFilterInteractions } from '@hooks';

import styles from './SelectTechnology.module.scss';

export const SelectTechnology = () => {
  const { y, dialogRef, refs, isOpen, getFloatingProps, getReferenceProps } = useFilterInteractions();

  return (
    <div className={styles.wrapper} ref={dialogRef}>
      <Select refs={refs} getReferenceProps={getReferenceProps} />
      <AnimatePresence>{isOpen && <SelectOptions options={{ y, refs, getFloatingProps }} />}</AnimatePresence>
    </div>
  );
};
