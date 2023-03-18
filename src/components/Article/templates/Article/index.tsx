import { useRouter } from 'next/router';
import type { FC, KeyboardEvent } from 'react';

import { Content } from '@components/Article/organisms/Content';
import { NotFoundContent } from '@components/Article/organisms/NotFoundContent';
import { Loader } from '@components/Loader/molecules/Loader';

import type { PickedArticleProps } from '@stories/articles';

import styles from './Article.module.scss';

type IArticleProps = {
  isNewArticle?: boolean;
  isNotFoundArticle?: boolean;
  isLoadingAnimation?: boolean;
} & Partial<Record<'article', PickedArticleProps>>;

const articleInitialState = { slug: '', tags: [''], createdAt: '', introduction: '', title: '', thumbnail: { url: '' } } as unknown as PickedArticleProps;

export const Article: FC<IArticleProps> = ({ article = articleInitialState, isNewArticle, isNotFoundArticle, isLoadingAnimation }) => {
  const { push } = useRouter();
  const changeRoute = () => push(`/articles/${article.slug}`);
  const handlePushingArticlesSlug = (e: KeyboardEvent<HTMLElement>) => e.key === 'Enter' && changeRoute();

  const isNewArticleCondition = isNewArticle ? styles['new-article'] : '';
  const className = `${styles.article} ${isNewArticleCondition}`;

  return (
    <article className={className} onKeyDown={handlePushingArticlesSlug} role="button" tabIndex={0}>
      {isLoadingAnimation ? <Loader /> : isNotFoundArticle ? <NotFoundContent /> : <Content article={article} />}
    </article>
  );
};
