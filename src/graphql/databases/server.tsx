/* eslint-disable */
import type * as Apollo from '@apollo/client';
import { QueryHookOptions, useQuery } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';
import type { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router';
import type React from 'react';

import * as Operations from './client';

export async function getServerPageSearchForArticlesList(
  options: Omit<Apollo.QueryOptions<Operations.SearchForArticlesListQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.SearchForArticlesListQuery>({ ...options, query: Operations.SearchForArticlesListDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageSearchForArticlesListComp = React.FC<{ data?: Operations.SearchForArticlesListQuery; error?: Apollo.ApolloError }>;
export const withPageSearchForArticlesList =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.SearchForArticlesListQuery, Operations.SearchForArticlesListQueryVariables>) =>
  (WrappedComponent: PageSearchForArticlesListComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.SearchForArticlesListDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrSearchForArticlesList = {
  getServerPage: getServerPageSearchForArticlesList,
  withPage: withPageSearchForArticlesList,
};
export async function getServerPageSearchForArticlesListByTags(
  options: Omit<Apollo.QueryOptions<Operations.SearchForArticlesListByTagsQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.SearchForArticlesListByTagsQuery>({ ...options, query: Operations.SearchForArticlesListByTagsDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageSearchForArticlesListByTagsComp = React.FC<{ data?: Operations.SearchForArticlesListByTagsQuery; error?: Apollo.ApolloError }>;
export const withPageSearchForArticlesListByTags =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.SearchForArticlesListByTagsQuery, Operations.SearchForArticlesListByTagsQueryVariables>) =>
  (WrappedComponent: PageSearchForArticlesListByTagsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.SearchForArticlesListByTagsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrSearchForArticlesListByTags = {
  getServerPage: getServerPageSearchForArticlesListByTags,
  withPage: withPageSearchForArticlesListByTags,
};
export async function getServerPageSearchForArticlesListWithTags(
  options: Omit<Apollo.QueryOptions<Operations.SearchForArticlesListWithTagsQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.SearchForArticlesListWithTagsQuery>({ ...options, query: Operations.SearchForArticlesListWithTagsDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageSearchForArticlesListWithTagsComp = React.FC<{ data?: Operations.SearchForArticlesListWithTagsQuery; error?: Apollo.ApolloError }>;
export const withPageSearchForArticlesListWithTags =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.SearchForArticlesListWithTagsQuery, Operations.SearchForArticlesListWithTagsQueryVariables>) =>
  (WrappedComponent: PageSearchForArticlesListWithTagsComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.SearchForArticlesListWithTagsDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrSearchForArticlesListWithTags = {
  getServerPage: getServerPageSearchForArticlesListWithTags,
  withPage: withPageSearchForArticlesListWithTags,
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

export async function getServerPageGetAllCommentsList(
  options: Omit<Apollo.QueryOptions<Operations.GetAllCommentsListQueryVariables>, 'query'>,
  apolloClient: Apollo.ApolloClient<NormalizedCacheObject>
) {
  const data = await apolloClient.query<Operations.GetAllCommentsListQuery>({ ...options, query: Operations.GetAllCommentsListDocument });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState: apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageGetAllCommentsListComp = React.FC<{ data?: Operations.GetAllCommentsListQuery; error?: Apollo.ApolloError }>;
export const withPageGetAllCommentsList =
  (optionsFunc?: (router: NextRouter) => QueryHookOptions<Operations.GetAllCommentsListQuery, Operations.GetAllCommentsListQueryVariables>) =>
  (WrappedComponent: PageGetAllCommentsListComp): NextPage =>
  (props) => {
    const router = useRouter();
    const options = optionsFunc ? optionsFunc(router) : {};
    const { data, error } = useQuery(Operations.GetAllCommentsListDocument, options);
    return <WrappedComponent {...props} data={data} error={error} />;
  };
export const ssrGetAllCommentsList = {
  getServerPage: getServerPageGetAllCommentsList,
  withPage: withPageGetAllCommentsList,
};
