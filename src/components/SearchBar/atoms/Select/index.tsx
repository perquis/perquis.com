import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import type { FC, HTMLProps } from 'react';
import { TiFilter } from 'react-icons/ti';

import { useSearchingForArticles } from '@hooks/useSearchingForArticles';

import styles from './Select.module.scss';

interface ISelect {
  refs: ExtendedRefs<ReferenceType>;
  getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => Record<string, unknown>;
}

export const Select: FC<ISelect> = ({ refs, getReferenceProps }) => {
  const { span, isTechnologies } = useSearchingForArticles();

  return (
    <button className={styles.select} role="option" aria-selected ref={refs.setReference} {...getReferenceProps()} style={{ paddingLeft: isTechnologies ? '1rem' : '2rem' }}>
      {isTechnologies ? null : <span>{span}</span>}
      <TiFilter size={19} />
    </button>
  );
};