import type { FC } from 'react';

import { StyledLink } from '@GlobalComponents/atoms/StyledLink';
import { Thumbnail } from '@GlobalComponents/atoms/Thumbnail';

import { Details } from '@components/Article/molecules/Details';

import type { PickedArticleProps } from '@stories/articles';

import { articleRoute } from '@data/routes';

type IContentProps = Record<'article', PickedArticleProps>;

export const Content: FC<IContentProps> = ({ article }) => {
  const { slug, thumbnail } = article;

  return (
    <>
      <StyledLink href={`/${articleRoute}/${slug}`}>
        <Thumbnail src={thumbnail?.url ?? ''} alt={slug ?? ''} />
      </StyledLink>
      <Details details={{ ...article }} isLink />
    </>
  );
};
