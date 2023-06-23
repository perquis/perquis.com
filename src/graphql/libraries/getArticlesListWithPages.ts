import { client } from '@apollo';
import { pageSize } from '@data';
import type { Articles, Locale, PageInfo } from '@graphql/databases/client';
import { ArticlesOrderByInput } from '@graphql/databases/client';
import { getServerPageArticlesListPagination } from '@graphql/databases/server';

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
  return { edges: mappedEdges, pageInfo: { hasNextPage: nextEdges.length > 0 ? Number(skip) + pageSize : false } };
};
