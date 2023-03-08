import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import type { FC, HTMLProps } from 'react';
import { TiFilter } from 'react-icons/ti';

import styles from './Select.module.scss';

interface ISelect {
  refs: ExtendedRefs<ReferenceType>;
  getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => Record<string, unknown>;
}

export const Select: FC<ISelect> = ({ refs, getReferenceProps }) => {
  return (
    <button className={styles.select} role="option" aria-selected ref={refs.setReference} {...getReferenceProps()}>
      <span>All Technologies</span>
      <TiFilter size={19} />
    </button>
  );
};
