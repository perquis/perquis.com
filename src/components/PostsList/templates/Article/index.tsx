import { useRouter } from 'next/router';
import type { FC, KeyboardEvent } from 'react';

import { Thumbnail } from '@components/Author/atoms/Thumbnail';
import { StyledLink } from '@components/global/atoms/StyledLink';
import { Details } from '@components/PostsList/organisms/Details';

import styles from './Article.module.scss';

interface IArticle {
  isNewArticle: boolean;
}

export const Article: FC<Partial<IArticle>> = ({ isNewArticle }) => {
  const { push } = useRouter();

  const comeInArticle = (e: KeyboardEvent<HTMLElement>) => e.key === 'Enter' && push('/');

  return (
    <article className={`${styles.article} ${isNewArticle ? styles['new-article'] : ''}`} tabIndex={0} role="button" onKeyDown={comeInArticle}>
      <StyledLink href="/">
        <Thumbnail src="/images/article.png" alt="peace" />
      </StyledLink>
      <Details />
    </article>
  );
};
