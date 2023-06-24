// @ts-ignore
import type { IHomePageProps } from '@types/pages';

import type { FC } from 'react';
import { useEffect } from 'react';

import { WavyLines } from '@components/globals/atoms';
import { AboutMe, Author } from '@components/locals/Author';
import { PostsList } from '@components/locals/PostsList';
import { useGlobalStore } from '@stories';

export const HomePageView: FC<Record<'stories', IHomePageProps>> = ({ stories: { technologies } }) => {
  const [updateAllItems] = useGlobalStore(({ updateAllItems }) => [updateAllItems]);

  useEffect(() => {
    updateAllItems(technologies);
  }, [technologies, updateAllItems]);

  return (
    <>
      <Author src="/images/thumbnail.gif" alt="Thumbnail" />
      <AboutMe />
      <WavyLines />
      <PostsList />
    </>
  );
};
