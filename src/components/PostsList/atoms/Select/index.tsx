import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import useTranslation from 'next-translate/useTranslation';
import type { FC, HTMLProps } from 'react';
import { TiFilter } from 'react-icons/ti';

import { useTechnologiesStore } from '@store/technologies';

import styles from './Select.module.scss';

interface ISelect {
  refs: ExtendedRefs<ReferenceType>;
  getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => Record<string, unknown>;
}

export const Select: FC<ISelect> = ({ refs, getReferenceProps }) => {
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);
  const isTechnologies = technologies.length > 0;
  const { t } = useTranslation('home');
  const span = t('posts-list.technologies');

  return (
    <button className={styles.select} role="option" aria-selected ref={refs.setReference} {...getReferenceProps()} style={{ paddingLeft: isTechnologies ? '1rem' : '2rem' }}>
      {isTechnologies ? null : <span>{span}</span>}
      <TiFilter size={19} />
    </button>
  );
};
