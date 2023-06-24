/* eslint-disable */
import type { NextPage } from 'next';
import { type NextRouter, useRouter } from 'next/router';
import type React from 'react';

import type * as Apollo from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';
import { type QueryHookOptions, useQuery } from '@apollo/client';

import * as Operations from './client';

export async function getServerPageArticlesListPagination(
  options: Omit<Apollo.QueryOptions<Operations.ArticlesListPaginationQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.ArticlesListPaginationQuery>({ ...options, query: Operations.ArticlesListPaginationDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageArticlesListPaginationComp = React.FC<{ data?: Operations.ArticlesListPaginationQuery; error?: Apollo.ApolloError }>;
export const withPageArticlesListPagination =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.ArticlesListPaginationQuery, Operations.ArticlesListPaginationQueryVariables>) =>
  (WrappedComponent: PageArticlesListPaginationComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.ArticlesListPaginationDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrArticlesListPagination = {
  getServerPage: getServerPageArticlesListPagination,
  withPage: withPageArticlesListPagination,
};
export async function getServerPageGetStaticAricle(
  options: Omit<Apollo.QueryOptions<Operations.GetStaticAriclePageQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.GetStaticAriclePageQuery>({ ...options, query: Operations.GetStaticAriclePageDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetStaticAricleComp = React.FC<{ data?: Operations.GetStaticAriclePageQuery; error?: Apollo.ApolloError }>;
export const withPageGetStaticAricle =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.GetStaticAriclePageQuery, Operations.GetStaticAriclePageQueryVariables>) =>
  (WrappedComponent: PageGetStaticAricleComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetStaticAriclePageDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetStaticAricle = {
  getServerPage: getServerPageGetStaticAricle,
  withPage: withPageGetStaticAricle,
};
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
export async function getServerPageGetSlugFromNegativeLocale(
  options: Omit<Apollo.QueryOptions<Operations.GetSlugFromNegativeLocaleQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.GetSlugFromNegativeLocaleQuery>({ ...options, query: Operations.GetSlugFromNegativeLocaleDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetSlugFromNegativeLocaleComp = React.FC<{ data?: Operations.GetSlugFromNegativeLocaleQuery; error?: Apollo.ApolloError }>;
export const withPageGetSlugFromNegativeLocale =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.GetSlugFromNegativeLocaleQuery, Operations.GetSlugFromNegativeLocaleQueryVariables>) =>
  (WrappedComponent: PageGetSlugFromNegativeLocaleComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetSlugFromNegativeLocaleDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetSlugFromNegativeLocale = {
  getServerPage: getServerPageGetSlugFromNegativeLocale,
  withPage: withPageGetSlugFromNegativeLocale,
};
export async function getServerPageGetArticleSlugs(
  options: Omit<Apollo.QueryOptions<Operations.GetArticleSlugsQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.GetArticleSlugsQuery>({ ...options, query: Operations.GetArticleSlugsDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetArticleSlugsComp = React.FC<{ data?: Operations.GetArticleSlugsQuery; error?: Apollo.ApolloError }>;
export const withPageGetArticleSlugs =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.GetArticleSlugsQuery, Operations.GetArticleSlugsQueryVariables>) =>
  (WrappedComponent: PageGetArticleSlugsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetArticleSlugsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetArticleSlugs = {
  getServerPage: getServerPageGetArticleSlugs,
  withPage: withPageGetArticleSlugs,
};
