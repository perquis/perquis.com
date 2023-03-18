import { AnimatePresence } from 'framer-motion';

import { Select } from '@components/SearchBar/atoms/Select';
import { SelectOptions } from '@components/SearchBar/molecules/SelectOptions';

import { useFilterInteractions } from '@hooks/useFilterInteractions';

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
