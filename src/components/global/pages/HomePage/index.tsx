// @ts-ignore
import type { IHomePageProps } from '@types/pages';

import { useEffect } from 'react';
import type { FC } from 'react';

import Author from '@components/Author';
import { WavyLines } from '@components/global/atoms/WavyLines';
import PostsList from '@components/PostsList';

import type { RequiredArticle } from '@stories/articles';
import { useArticlesStore } from '@stories/articles';
import { useTechnologiesStore } from '@stories/technologies';

export const HomePage: FC<Record<'stories', IHomePageProps>> = ({ stories: { articles, technologies } }) => {
  const [updateArticlesList, updateHasNextPage] = useArticlesStore((state) => [state.updateArticlesList, state.updateHasNextPage]);
  const [updateTechnologiesList] = useTechnologiesStore((state) => [state.updateTechnologiesList]);

  useEffect(() => {
    updateHasNextPage(articles.pageInfo.hasNextPage);
    updateTechnologiesList(technologies);
    updateArticlesList(articles.edges as unknown as RequiredArticle[]);
  }, [articles, technologies, updateTechnologiesList, updateArticlesList, updateHasNextPage]);

  return (
    <>
      <Author />
      <WavyLines />
      <PostsList />
    </>
  );
};
