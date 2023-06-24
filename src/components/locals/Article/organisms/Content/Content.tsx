import { type FC, useMemo } from 'react';

import { StyledLink, Thumbnail } from '@components/globals/atoms';
import { Details } from '@components/locals/Article/molecules';
import { articleRoute } from '@data';
import type { Articles } from '@graphql/databases/client';

type IContentProps = Record<'article', Articles>;

export const Content: FC<IContentProps> = ({ article }) => {
  const { slug, thumbnail } = article;
  const href = useMemo(() => `/${articleRoute}/${slug}`, [slug]);

  return (
    <>
      <StyledLink href={href}>
        <Thumbnail src={thumbnail?.url ?? ''} alt={slug ?? ''} />
      </StyledLink>
      <Details details={{ ...article }} isLink />
    </>
  );
};
