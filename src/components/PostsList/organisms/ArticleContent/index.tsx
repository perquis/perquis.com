import type { FC } from 'react';

import { StyledLink } from '@components/global/atoms/StyledLink';
import { Thumbnail } from '@components/global/atoms/Thumbnail';
import { Details } from '@components/PostsList/molecules/Details';

import type { PickedArticleProps } from '@stories/articles';

type IArticleContentProps = Record<'article', PickedArticleProps>;

export const ArticleContent: FC<IArticleContentProps> = ({ article }) => {
  const { slug, thumbnail } = article;

  return (
    <>
      <StyledLink href={`/articles/${slug}`}>
        <Thumbnail src={thumbnail?.url ?? ''} alt={slug ?? ''} />
      </StyledLink>
      <Details details={{ ...article }} />
    </>
  );
};
