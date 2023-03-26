import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useArticlesStore } from '@stories/articles';
import { useSearchBarStore } from '@stories/searchbar';
import { useTechnologiesStore } from '@stories/technologies';

export const useSearchingForArticles = () => {
  const [updateIsLoading, updateSearchedForArticlesList] = useArticlesStore((state) => [state.updateIsLoading, state.updateSearchedForArticlesList]);
  const [technologies] = useTechnologiesStore((state) => [state.technologies]);
  const isTechnologies = technologies.length > 0;
  const { locale } = useRouter();

  const [status, keywords] = useSearchBarStore((state) => [state.status, state.keywords]);
  const isSearchingArticles = status === '';

  useEffect(() => {
    if (isSearchingArticles) {
      updateIsLoading(false);
      updateSearchedForArticlesList([]);
    } else updateIsLoading(true);
  }, [isSearchingArticles, updateIsLoading, updateSearchedForArticlesList]);

  useEffect(() => {
    if (!isSearchingArticles) {
      fetch(`/api/articles/search?locale=${locale}&type=${status}&tags=${encodeURIComponent(technologies.join(' '))}&search=${keywords}`)
        .then((response) => response.json())
        .then((data) => {
          updateIsLoading(false);
          Array.isArray(data) ? updateSearchedForArticlesList(data) : updateSearchedForArticlesList([]);
        });
    }
  }, [isSearchingArticles, status, locale, keywords, technologies, updateIsLoading, updateSearchedForArticlesList]);

  return { isTechnologies };
};
