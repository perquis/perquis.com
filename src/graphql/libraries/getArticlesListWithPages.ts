import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';

import { client } from '@graphql/apollo/apolloClient';
import { ArticlesOrderByInput } from '@graphql/databases/client';
import type { Articles, Locale, PageInfo } from '@graphql/databases/client';
import { getServerPageArticlesListPagination } from '@graphql/databases/server';

import { shikiOptions } from '@themes/shikiOptions';

import { pageSize } from '@data/presets';

interface Props {
  isEnglish: Locale[];
  first?: number;
  skip?: number;
}

export const fetchArticlesListPagination = async ({ isEnglish, first = pageSize, skip = 0 }: Props): Promise<{ edges: Articles[]; pageInfo: PageInfo }> => {
  const {
    props: {
      data: {
        page: { edges },
      },
    },
  } = await getServerPageArticlesListPagination({ variables: { locales: isEnglish, first, skip, orderBy: ArticlesOrderByInput.CreatedAtDesc, title: '', tags: [] } }, client);
  const mappedEdges = edges.map(({ node }) => ({ ...node })) as unknown as Articles[];
  const serializedEdges = await Promise.all(
    mappedEdges.map(async (node): Promise<Articles> => {
      const introduction = await serialize(node.introduction, {
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, shikiOptions]],
        },
      });

      return { ...node, introduction };
    })
  );

  const {
    props: {
      data: {
        page: { edges: nextEdges },
      },
    },
  } = await getServerPageArticlesListPagination(
    { variables: { locales: isEnglish, orderBy: ArticlesOrderByInput.CreatedAtDesc, first: pageSize, skip: Number(skip) + pageSize, title: '', tags: [] } },
    client
  );

  // @ts-ignore
  return { edges: serializedEdges, pageInfo: { hasNextPage: nextEdges.length > 0 ? Number(skip) + pageSize : false } };
};
