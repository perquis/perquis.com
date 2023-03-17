import type { ExtendedRefs, ReferenceType } from '@floating-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { FC, HTMLProps } from 'react';
import { TiFilter } from 'react-icons/ti';
import { useTechnologiesStore } from 'src/stories/technologies';

import { useArticlesStore } from '@stories/articles';

import styles from './Select.module.scss';

interface ISelect {
  refs: ExtendedRefs<ReferenceType>;
  getReferenceProps: (userProps?: HTMLProps<Element> | undefined) => Record<string, unknown>;
}

export const Select: FC<ISelect> = ({ refs, getReferenceProps }) => {
  const [updateIsLoading, updateSearchedForArticlesList] = useArticlesStore((state) => [state.updateIsLoading, state.updateSearchedForArticlesList]);
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);
  const isTechnologies = technologies.length > 0;
  const { t } = useTranslation('home');
  const span = t('posts-list.technologies');
  const { locale } = useRouter();

  useEffect(() => {
    if (technologies.length === 0) {
      updateIsLoading(false);
      updateSearchedForArticlesList([]);
    } else updateIsLoading(true);
  }, [technologies, updateIsLoading, updateSearchedForArticlesList]);

  useEffect(() => {
    if (technologies.length > 0) {
      fetch(`/api/articles/search?locale=${locale}&type=tags&tags=${encodeURIComponent(technologies.join(' '))}`)
        .then((response) => response.json())
        .then((data) => {
          updateIsLoading(false);
          updateSearchedForArticlesList(data);
        });
    }
  }, [locale, technologies, updateIsLoading, updateSearchedForArticlesList]);

  return (
    <button className={styles.select} role="option" aria-selected ref={refs.setReference} {...getReferenceProps()} style={{ paddingLeft: isTechnologies ? '1rem' : '2rem' }}>
      {isTechnologies ? null : <span>{span}</span>}
      <TiFilter size={19} />
    </button>
  );
};
