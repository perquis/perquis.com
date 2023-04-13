import axios from 'axios';

import type { ArticlesListPaginationQuery } from '@graphql/databases/client';

interface FetchAllArticlesListPagination {
  locale: string;
  skip: number;
  title: string;
  tags: string[];
}

export const fetchAllArticlesListPagination = async ({ skip, locale, title, tags }: FetchAllArticlesListPagination): Promise<ArticlesListPaginationQuery['page']> => {
  const { data } = await axios.post(`/api/articles`, { skip, locale, title, tags });
  return data;
};
