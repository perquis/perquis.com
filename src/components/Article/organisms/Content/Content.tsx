import type { FC } from 'react';

import { Details } from '@components/Article/molecules';
import { StyledLink, Thumbnail } from '@components/globals/atoms';
import { articleRoute } from '@data';
import type { Articles } from '@graphql/databases/client';

type IContentProps = Record<'article', Articles>;

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
