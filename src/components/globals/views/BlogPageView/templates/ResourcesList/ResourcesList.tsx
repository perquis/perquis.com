import type { FC } from 'react';

import { DirectionColumn } from '@components/globals/wrappers/DirectionColumn/DirectionColumn';
import { Resource } from '@components/locals/Resource';
import type { GetStaticAriclePageQuery } from '@graphql/databases/client';
import { useInternationalizedRouting } from '@hooks';

type ResourcesListProps = FC<Record<'resources', GetStaticAriclePageQuery['page']['edges'][0]['node']['resources']>>;

export const ResourcesList: ResourcesListProps = ({ resources }) => {
  const { resourcesListsTitle } = useInternationalizedRouting('global');

  if (resources.length === 0) return null;

  return (
    <DirectionColumn isTop style={{ marginBottom: 48 }}>
      <h2 id="resources">{resourcesListsTitle}</h2>
      {resources.map(({ link, name }, i) => (
        <Resource link={String(link)} key={i}>
          {name}
        </Resource>
      ))}
    </DirectionColumn>
  );
};
