import { useRouter } from 'next/router';
import type { FC, KeyboardEvent } from 'react';

import { StyledLink } from '@components/global/atoms/StyledLink';
import { Thumbnail } from '@components/global/atoms/Thumbnail';
import { Details } from '@components/PostsList/organisms/Details';

import type { PickedArticleProps } from '@stories/articles';

import styles from './Article.module.scss';

type IArticleProps = {
  isNewArticle?: boolean;
} & Record<'article', PickedArticleProps>;

export const Article: FC<IArticleProps> = ({ article, isNewArticle }) => {
  const { push } = useRouter();
  const { slug, thumbnail } = article;
  const comeInArticle = (e: KeyboardEvent<HTMLElement>) => e.key === 'Enter' && push(`/articles/${article.slug}`);

  return (
    <article className={`${styles.article} ${isNewArticle ? styles['new-article'] : ''}`} tabIndex={0} role="button" onKeyDown={comeInArticle}>
      <StyledLink href={`/articles/${slug}`}>
        <Thumbnail src={thumbnail?.url ?? ''} alt={slug ?? ''} />
      </StyledLink>
      <Details details={{ ...article }} />
    </article>
  );
};
