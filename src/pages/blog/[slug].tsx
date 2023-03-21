import type { GetStaticPaths, GetStaticProps } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import type { ParsedUrlQuery } from 'querystring';
import type { FC } from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { WavyLines } from '@GlobalComponents/atoms/WavyLines';
import { DetailsWrapper } from '@GlobalComponents/wrappers/DetailsWrapper';
import { DirectionColumn } from '@GlobalComponents/wrappers/DirectionColumn';
import { FullWidthContainer } from '@GlobalComponents/wrappers/FullWidthContainer';
import { StickersList } from '@GlobalComponents/wrappers/StickersList';

import { Details } from '@components/Article/molecules/Details';
import { Author } from '@components/Author';
import { CommentForm } from '@components/CommentForm/organisms/CommentForm';
import { MarkdownToHTML } from '@components/MarkdownToHTML';
import { Resource } from '@components/Resource';
import { Newsletter } from '@components/Sticker';
import { JoinOurCommunity } from '@components/Sticker/organisms/JoinOurCommunity';

import type { PickedDetailsProps } from '@stories/articles';

import { client } from '@graphql/apollo/apolloClient';
import type { Articles, GetStaticAriclePageQuery } from '@graphql/databases/client';
import { Languages, Locale } from '@graphql/databases/client';
import { getServerPageArticlesList, getServerPageGetStaticAricle } from '@graphql/databases/server';

import { options } from '@themes/options';

type BlogPageProps = Record<'edges', GetStaticAriclePageQuery['page']['edges']> & { source: MDXRemoteSerializeResult };
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

  const source = await serialize(String(content), {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options], rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    },
  });

  return {
    props: {
      edges,
      source,
    },
  };
};

const BlogPage: FC<BlogPageProps> = ({ edges, source }) => {
  const [
    {
      node: { slug, thumbnail, createdAt, tags, title, introduction, resources },
    },
  ] = edges;

  const resourcesList = resources.map(({ link, name }, i) => (
    <Resource link={String(link)} key={i}>
      {name}
    </Resource>
  ));

  return (
    <>
      <Author src={String(thumbnail?.url)} alt={String(slug)} />
      <DetailsWrapper>
        <Details details={{ createdAt, slug, tags, title, introduction } as PickedDetailsProps} />
      </DetailsWrapper>
      <FullWidthContainer>
        <MarkdownToHTML {...source} />
        <DirectionColumn isTop>
          <h2>Resources:</h2>
          {resourcesList}
          <div style={{ marginTop: 8 }}>
            <WavyLines />
          </div>
        </DirectionColumn>
        <StickersList>
          <Newsletter />
          <JoinOurCommunity />
        </StickersList>
        <DirectionColumn isTop>
          <div style={{ marginBottom: 8 }}>
            <WavyLines />
          </div>
          <div>
            <h2>Comments:</h2>
            <Paragraph>You will sign in or sign up if you want to comment this article!</Paragraph>
          </div>
          <CommentForm />
        </DirectionColumn>
      </FullWidthContainer>
    </>
  );
};

export default BlogPage;
