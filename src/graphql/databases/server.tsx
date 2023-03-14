/* eslint-disable */
import type * as Apollo from '@apollo/client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';
import type { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import type React from 'react';

import * as Operations from './client';

export async function getServerPageArticlesList(
  options: Omit<Apollo.QueryOptions<Operations.ArticlesListQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.ArticlesListQuery>({ ...options, query: Operations.ArticlesListDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageArticlesListComp = React.FC<{ data?: Operations.ArticlesListQuery; error?: Apollo.ApolloError }>;
export const withPageArticlesList =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.ArticlesListQuery, Operations.ArticlesListQueryVariables>) =>
  (WrappedComponent: PageArticlesListComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.ArticlesListDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrArticlesList = {
  getServerPage: getServerPageArticlesList,
  withPage: withPageArticlesList,
};
export async function getServerPageArticlesListWiths(
  options: Omit<Apollo.QueryOptions<Operations.ArticlesListWithPagesQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.ArticlesListWithPagesQuery>({ ...options, query: Operations.ArticlesListWithPagesDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageArticlesListWithsComp = React.FC<{ data?: Operations.ArticlesListWithPagesQuery; error?: Apollo.ApolloError }>;
export const withPageArticlesListWiths =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.ArticlesListWithPagesQuery, Operations.ArticlesListWithPagesQueryVariables>) =>
  (WrappedComponent: PageArticlesListWithsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.ArticlesListWithPagesDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrArticlesListWiths = {
  getServerPage: getServerPageArticlesListWiths,
  withPage: withPageArticlesListWiths,
};
