import type { FC } from 'react';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Resource } from '@components/Resource';

import type { GetStaticAriclePageQuery } from '@graphql/databases/client';

import { useInternationalizedRouting } from '@hooks/useInternationalizedRouting';

type ResourcesListProps = FC<Record<'resources', GetStaticAriclePageQuery['page']['edges'][0]['node']['resources']>>;

export const ResourcesList: ResourcesListProps = ({ resources }) => {
  const { resourcesListsTitle } = useInternationalizedRouting('global');

  return (
    <DirectionColumn isTop>
      <h2>{resourcesListsTitle}</h2>
      {resources.map(({ link, name }, i) => (
        <Resource link={String(link)} key={i}>
          {name}
        </Resource>
      ))}
    </DirectionColumn>
  );
};
