import axios from 'axios';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import type { BlogPageViewProps } from 'src/pages/blog/[slug]';

import { NewsletterObserver } from '@components/globals/observers';
import { Stickers } from '@components/globals/stickers/index';
import { DetailsWrapper, FullWidthContainer } from '@components/globals/wrappers';
import { Details, ReadingTime } from '@components/locals/Article';
import { Author } from '@components/locals/Author';
import { components, MarkdownRenderer } from '@components/locals/MarkdownRenderer';
import { TableOfContents } from '@components/locals/TableOfContents';
import { newsletterModalPattern } from '@data';
import type { Articles } from '@graphql/databases/client';
import { useGlobalStore } from '@stories';
import { hasCookie } from '@utils';

import { CommentsList, ResourcesList, StickyHelpersList } from './templates';

export const BlogPageView: FC<Record<'stories', BlogPageViewProps>> = ({ stories: { node, source, negativeSlug } }) => {
  const { slug, thumbnail, createdAt, tags, title, resources, introduction, content, socials, metaDescription } = node;

  const [updatePostId] = useGlobalStore(({ updatePostId }) => [updatePostId]);
  const { query } = useRouter();

  const [updatePostTitleInAlternateLanguage] = useGlobalStore(({ updatePostTitleInAlternateLanguage }) => [updatePostTitleInAlternateLanguage]);

  useEffect(() => {
    if (hasCookie(newsletterModalPattern)) document.cookie = `newsletter-modal=true;max-age=2592000;`;
  }, []);

  useEffect(() => updatePostTitleInAlternateLanguage(negativeSlug ?? ''), [negativeSlug, updatePostTitleInAlternateLanguage]);

  useEffect(() => {
    axios.get<PrismaPost>(`/api/posts/${query.slug}`).then(({ data }) => updatePostId(data.id));
  }, [updatePostId, query.slug]);

  const { ref, inView } = useInView();
  const markdownContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref(markdownContainerRef?.current?.querySelector('.toc'));
  }, [inView, markdownContainerRef, ref]);

  return (
    <>
      <Head>
        <title>{title + ` | PerQuis's Blog`}</title>
        <meta name="description" content={metaDescription ?? ''} />
      </Head>
      <NewsletterObserver />
      <Author src={String(thumbnail?.url)} alt={String(slug)} />
      <DetailsWrapper>
        <Details details={{ createdAt, slug, tags, title, introduction } as Articles} />
        <ReadingTime content={content?.text ?? ''} />
      </DetailsWrapper>
      <FullWidthContainer>
        <StickyHelpersList socials={socials} />
        <div ref={markdownContainerRef}>
          <MarkdownRenderer>
            <MDXRemote {...source} components={components} />
          </MarkdownRenderer>
        </div>
        <ResourcesList resources={resources} />
        <Stickers />
        <CommentsList />
        <TableOfContents />
      </FullWidthContainer>
    </>
  );
};
