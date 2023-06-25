import { type FC, type HTMLProps, useMemo } from 'react';
import { TiFilter } from 'react-icons/ti';

import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import { useInternationalizedRouting } from '@hooks';
import { useGlobalStore } from '@stories';

import styles from './Select.module.scss';

interface ISelect {
  refs: ExtendedRefs<ReferenceType>;
  getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => Record<string, unknown>;
}

export const Select: FC<ISelect> = ({ refs, getReferenceProps }) => {
  const t = useInternationalizedRouting('home');
  const [technologies] = useGlobalStore(({ selected }) => [selected]);
  const isTechnologies = useMemo(() => technologies.length > 0, [technologies]);

  return (
    <button className={styles.select} role="option" aria-selected ref={refs.setReference} {...getReferenceProps()} style={{ paddingLeft: isTechnologies ? '1rem' : '2rem' }}>
      {isTechnologies ? null : <span>{t.postsListTechnologies}</span>}
      <TiFilter size={19} />
    </button>
  );
};
