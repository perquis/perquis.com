import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@graphql/apollo/apolloClient';
import { ArticlesOrderByInput, Locale } from '@graphql/databases/client';
import { getServerPageArticlesListWiths } from '@graphql/databases/server';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { first, skip, locale } = req.query;

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
      { variables: { locales: locale === 'en' ? [Locale.En] : [Locale.Pl], orderBy: ArticlesOrderByInput.CreatedAtDesc, first: Number(first), skip: Number(skip) } },
      client
    );

    res.json({ articles: edges.map(({ node }) => node), hasNextPage });
  } catch (err) {
    res.send(err);
  }
};
