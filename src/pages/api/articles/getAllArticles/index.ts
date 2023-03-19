import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@graphql/apollo/apolloClient';
import { Languages, Locale } from '@graphql/databases/client';
import { getServerPageArticlesList } from '@graphql/databases/server';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      props: {
        data: {
          page: { edges: polishEdges },
        },
      },
    } = await getServerPageArticlesList({ variables: { locales: [Locale.Pl], lng: Languages.Pl } }, client);

    const {
      props: {
        data: {
          page: { edges: englishEdges },
        },
      },
    } = await getServerPageArticlesList({ variables: { locales: [Locale.En], lng: Languages.En } }, client);

    const articles = [...polishEdges.map(({ node }) => ({ locale: 'pl', ...node })), ...englishEdges.map(({ node }) => ({ locale: 'en', ...node }))];

    res.json(articles);
  } catch (err) {
    res.send(err);
  }
};
