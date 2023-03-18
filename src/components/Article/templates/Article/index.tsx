import { useRouter } from 'next/router';
import type { FC, KeyboardEvent } from 'react';

import { Content } from '@components/Article/organisms/Content';
import { Loader } from '@components/Loader/molecules/Loader';

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
      {isLoadingAnimation ? <Loader /> : <Content article={article} />}
    </article>
  );
};
