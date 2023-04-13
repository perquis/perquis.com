/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';

import { client } from '@graphql/apollo/apolloClient';
import { ArticlesOrderByInput, Locale } from '@graphql/databases/client';
import { getServerPageArticlesListPagination } from '@graphql/databases/server';

import { shikiOptions } from '@themes/shikiOptions';

import { pageSize } from '@data/presets';

export const searchForArticles = async (req: NextApiRequest, res: NextApiResponse) => {
  const { skip, locale, title, tags } = req.body;
  if (!skip && !locale && !title && !tags) return res.status(400).send({ message: 'Bad request.' });

  try {
    const {
      props: {
        data: {
          page: { edges },
        },
      },
    } = await getServerPageArticlesListPagination(
      { variables: { locales: locale === 'en' ? [Locale.En] : [Locale.Pl], orderBy: ArticlesOrderByInput.CreatedAtDesc, first: pageSize, skip: Number(skip), title, tags } },
      client
    );

    const {
      props: {
        data: {
          page: { edges: nextEdges },
        },
      },
    } = await getServerPageArticlesListPagination(
      {
        variables: {
          locales: locale === 'en' ? [Locale.En] : [Locale.Pl],
          orderBy: ArticlesOrderByInput.CreatedAtDesc,
          first: pageSize,
          skip: Number(skip) + pageSize,
          title,
          tags,
        },
      },
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

    const intSkip = Number(skip) + pageSize;

    return res.json({ edges: serializedEdges, pageInfo: { hasNextPage: nextEdges.length > 0 ? intSkip : false, pageSize: nextEdges.length } });
  } catch (err) {
    return res.status(500).send(err);
  }
};
