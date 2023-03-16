import { useRouter } from 'next/router';
import type { FC, KeyboardEvent } from 'react';

import { Loader } from '@components/PostsList/molecules/Loader';
import { ArticleContent } from '@components/PostsList/organisms/ArticleContent';

import type { PickedArticleProps } from '@stories/articles';

import styles from './Article.module.scss';

type IArticleProps = {
  isNewArticle?: boolean;
  isLoadingAnimation?: boolean;
} & Record<'article', PickedArticleProps>;

export const Article: FC<IArticleProps> = ({ article, isNewArticle, isLoadingAnimation }) => {
  const { push } = useRouter();
  const changeRoute = () => push(`/articles/${article.slug}`);
  const handlePushingArticlesSlug = (e: KeyboardEvent<HTMLElement>) => e.key === 'Enter' && changeRoute();

  const isNewArticleCondition = isNewArticle ? styles['new-article'] : '';
  const className = `${styles.article} ${isNewArticleCondition}`;

  return (
    <article className={className} onKeyDown={handlePushingArticlesSlug} onTouchEnd={changeRoute} role="button" tabIndex={0}>
      {isLoadingAnimation ? <Loader /> : <ArticleContent article={article} />}
    </article>
  );
};
