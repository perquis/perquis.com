import type { GetStaticPaths, GetStaticProps } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { ParsedUrlQuery } from 'querystring';
import type { FC } from 'react';

import { BlogPage } from '@GlobalComponents/pages/BlogPage';

import { client } from '@graphql/apollo/apolloClient';
import type { Articles, ArticlesEdge } from '@graphql/databases/client';
import { Locale } from '@graphql/databases/client';
import { getServerPageGetArticleSlugs, getServerPageGetSlugFromNegativeLocale, getServerPageGetStaticAricle } from '@graphql/databases/server';

import { prismaClient } from 'prisma/prismaClient';

import { serializedContent } from '@utils/serializedContent';

export type BlogPageProps = Record<'node', ArticlesEdge['node']> & { source: MDXRemoteSerializeResult } & { negativeSlug?: string | null };
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
  } = await getServerPageGetArticleSlugs({ variables: { locales: [Locale.Pl] } }, client);

  const {
    props: {
      data: {
        page: { edges: englishEdges },
      },
    },
  } = await getServerPageGetArticleSlugs({ variables: { locales: [Locale.En] } }, client);

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
  const negativeLocales = locale !== 'en' ? [Locale.En] : [Locale.Pl];
  const {
    props: {
      data: {
        page: { edges },
      },
    },
  } = await getServerPageGetStaticAricle({ variables: { slug, locales } }, client);

  const [
    {
      node: { content, id },
    },
  ] = edges;

  const source = await serializedContent(content?.text.replace(/\\n/g, '\n'));

  const {
    props: {
      data: {
        page: { edges: negativeEdges },
      },
    },
  } = await getServerPageGetSlugFromNegativeLocale({ variables: { id, locales: negativeLocales } }, client);

  const [
    {
      node: { slug: negativeSlug },
    },
  ] = negativeEdges;

  // If database doesn't have existed post, it'll add new post
  const posts = await prismaClient.post.findMany({ where: { articleId: slug } });
  if (posts.length === 0) await prismaClient.post.create({ data: { articleId: slug } });

  return {
    props: {
      node: edges[0].node,
      source,
      negativeSlug,
    },
  };
};

const Blog: FC<BlogPageProps> = (stories) => <BlogPage stories={stories} />;

export default Blog;
