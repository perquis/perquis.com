import type { GetStaticPaths, GetStaticProps } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { ParsedUrlQuery } from 'querystring';
import type { FC } from 'react';

import { BlogPage } from '@GlobalComponents/pages/BlogPage';

import { client } from '@graphql/apollo/apolloClient';
import type { Articles, GetStaticAriclePageQuery } from '@graphql/databases/client';
import { Languages, Locale } from '@graphql/databases/client';
import { getServerPageArticlesList, getServerPageGetStaticAricle } from '@graphql/databases/server';

import { serializedContent } from '@utils/serializedContent';

export type BlogPageProps = Record<'edges', GetStaticAriclePageQuery['page']['edges']> & { source: MDXRemoteSerializeResult };
type TypeArticles = Articles & { locale: string };
interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
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

  const articles = [...polishEdges.map(({ node }) => ({ locale: 'pl', ...node })), ...englishEdges.map(({ node }) => ({ locale: 'en', ...node }))] as TypeArticles[];
  const paths = articles.map(({ slug, locale }) => ({ params: { slug: String(slug) }, locale: String(locale) }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as Params;
  const locales = locale === 'en' ? [Locale.En] : [Locale.Pl];
  const {
    props: {
      data: {
        page: { edges },
      },
    },
  } = await getServerPageGetStaticAricle({ variables: { slug, locales } }, client);

  const [
    {
      node: { content },
    },
  ] = edges;

  const source = await serializedContent(content);

  return {
    props: {
      edges,
      source,
    },
  };
};

const Blog: FC<BlogPageProps> = (stories) => <BlogPage stories={stories} />;

export default Blog;
