import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';

import { client } from '@graphql/apollo/apolloClient';
import { ArticlesOrderByInput, Locale } from '@graphql/databases/client';
import { getServerPageArticlesListWiths } from '@graphql/databases/server';

import { shikiOptions } from '@themes/shikiOptions';

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

    const mappedEdges = edges.map(({ node }) => node);
    const serializedEdges = await Promise.all(
      mappedEdges.map(async (node) => {
        const introduction = await serialize(String(node.introduction), {
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, shikiOptions]],
          },
        });

        return { ...node, introduction };
      })
    );

    return res.json({ edges: serializedEdges, pageInfo });
  } catch (err) {
    return res.status(500).send(err);
  }
};
