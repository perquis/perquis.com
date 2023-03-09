import type { FC } from 'react';
import { useEffect } from 'react';
import type { IHomeProps } from 'src/pages';

import Author from '@components/Author';
import { WavyLines } from '@components/global/atoms/WavyLines';
import PostsList from '@components/PostsList';

import { useTechnologiesStore } from '@store/technologies';

export const HomePage: FC<IHomeProps> = ({ technologies }) => {
  const [updateTechnologiesList] = useTechnologiesStore((state) => [state.updateTechnologiesList]);

  useEffect(() => updateTechnologiesList(technologies), [technologies, updateTechnologiesList]);

  return (
    <>
      <Author />
      <WavyLines />
      <PostsList />
    </>
  );
};
