import { client } from '@graphql/apollo/apolloClient';
import { ArticlesOrderByInput } from '@graphql/databases/client';
import type { Articles, Locale, PageInfo } from '@graphql/databases/client';
import { getServerPageArticlesListWiths } from '@graphql/databases/server';

import { pageSize } from '@data/presets';

interface Props {
  isEnglish: Locale[];
  first?: number;
  skip?: number;
}

export const fetchArticlesListWithPages = async ({ isEnglish, first = pageSize, skip = 0 }: Props): Promise<{ edges: Articles[]; pageInfo: PageInfo }> => {
  const {
    props: {
      data: {
        page: { edges, pageInfo },
      },
    },
  } = await getServerPageArticlesListWiths({ variables: { locales: isEnglish, first, skip, orderBy: ArticlesOrderByInput.CreatedAtDesc } }, client);
  return { edges: edges.map(({ node }) => ({ ...node })) as Articles[], pageInfo };
};
