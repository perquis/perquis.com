import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@graphql/apollo/apolloClient';
import { ArticlesOrderByInput, Locale } from '@graphql/databases/client';
import { getServerPageArticlesListWiths } from '@graphql/databases/server';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { skip, locale } = req.query;

  const {
    props: {
      data: {
        page: {
          edges,
          pageInfo: { hasNextPage },
        },
      },
    },
  } = await getServerPageArticlesListWiths(
    { variables: { locales: locale === 'en' ? [Locale.En] : [Locale.Pl], orderBy: ArticlesOrderByInput.PublishedDesc, first: 2, skip: Number(skip) } },
    client
  );

  res.json({ articles: edges.map(({ node }) => node), hasNextPage });
};
