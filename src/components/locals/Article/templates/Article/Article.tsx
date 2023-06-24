import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { FC, KeyboardEvent } from 'react';

import { Content, NotFoundContent } from '@components/locals/Article/organisms';
import { PostLoader } from '@components/locals/Loader';
import { articleRoute } from '@data';
import type { Articles } from '@graphql/databases/client';

import styles from './Article.module.scss';

type IArticleProps = {
  isNewArticle?: boolean;
  isNotFoundArticle?: boolean;
  isLoadingAnimation?: boolean;
} & Partial<Record<'article', Articles>>;

const articleInitialState = { slug: '', tags: [''], createdAt: '', introduction: '', title: '', thumbnail: { url: '' } } as unknown as Articles;

export const Article: FC<IArticleProps> = ({ article = articleInitialState, isNewArticle, isNotFoundArticle, isLoadingAnimation }) => {
  const { push } = useRouter();
  const changeRoute = () => push(`/${articleRoute}/${article.slug}#`);
  const handlePushingArticlesSlug = (e: KeyboardEvent<HTMLElement>) => e.key === 'Enter' && changeRoute();

  return (
    <article className={clsx(styles.article, isNewArticle && styles['new-article'])} onKeyDown={handlePushingArticlesSlug} role="button" tabIndex={0}>
      {isLoadingAnimation ? <PostLoader /> : isNotFoundArticle ? <NotFoundContent /> : <Content article={article} />}
    </article>
  );
};
