// @ts-ignore
import type { IHomePageProps } from '@types/pages';

import { useEffect } from 'react';
import type { FC } from 'react';

import { WavyLines } from '@GlobalComponents/atoms/WavyLines';

import { AboutMe, Author } from '@components/Author';
import { PostsList } from '@components/PostsList';

import { useTechnologiesStore } from '@stories/technologies';

export const HomePage: FC<Record<'stories', IHomePageProps>> = ({ stories: { technologies } }) => {
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
