// @ts-ignore
import type { IHomePageProps } from '@types/pages';

import type { FC } from 'react';
import { useEffect } from 'react';

import { AboutMe, Author } from '@components/Author';
import { WavyLines } from '@components/globals/atoms';
import { PostsList } from '@components/PostsList';
import { useTechnologiesStore } from '@stories';

export const HomePageView: FC<Record<'stories', IHomePageProps>> = ({ stories: { technologies } }) => {
  const [updateTechnologiesList] = useTechnologiesStore((state) => [state.updateTechnologiesList]);

  useEffect(() => {
    updateTechnologiesList(technologies);
  }, [technologies, updateTechnologiesList]);

  return (
    <>
      <Author src="/images/thumbnail.gif" alt="Thumbnail" />
      <AboutMe />
      <WavyLines />
      <PostsList />
    </>
  );
};
