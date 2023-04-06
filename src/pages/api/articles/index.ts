import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@graphql/apollo/apolloClient';
import { ArticlesOrderByInput, Locale } from '@graphql/databases/client';
import { getServerPageArticlesListWiths } from '@graphql/databases/server';

import { pageSize } from '@data/presets';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { skip, locale } = req.query;
  if (!skip && !locale) return res.status(400).send({ message: 'Bad request.' });

  try {
    const {
      props: {
        data: {
          page: { edges, pageInfo },
        },
      },
    } = await getServerPageArticlesListWiths(
      { variables: { locales: locale === 'en' ? [Locale.En] : [Locale.Pl], orderBy: ArticlesOrderByInput.CreatedAtDesc, first: pageSize, skip: Number(skip) } },
      client
    );

    return res.json({ edges: edges.map(({ node }) => node), pageInfo });
  } catch (err) {
    return res.status(500).send(err);
  }
};
