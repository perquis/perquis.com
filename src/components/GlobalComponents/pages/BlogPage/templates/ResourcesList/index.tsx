import useTranslation from 'next-translate/useTranslation';
import type { FC } from 'react';

import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';

import { Resource } from '@components/Resource';

import type { GetStaticAriclePageQuery } from '@graphql/databases/client';

export const ResourcesList: FC<Record<'resources', GetStaticAriclePageQuery['page']['edges'][0]['node']['resources']>> = ({ resources }) => {
  const { t } = useTranslation('global');
  const resourcesTitle = t('resources');

  return (
    <DirectionColumn isTop>
      <h2>{resourcesTitle}</h2>
      {resources.map(({ link, name }, i) => (
        <Resource link={String(link)} key={i}>
          {name}
        </Resource>
      ))}
    </DirectionColumn>
  );
};
