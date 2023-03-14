import { useRouter } from 'next/router';
import type { FC } from 'react';

import { Paragraph } from '@components/PostsList/atoms/Paragraph';
import { Tag } from '@components/PostsList/atoms/Tag';
import { DateAndTitle } from '@components/PostsList/molecules/DateAndTitle';
import { TagsList } from '@components/PostsList/molecules/TagsLits';

import type { PickedDetailsProps } from '@stories/articles';

import { Locale } from '@graphql/databases/client';

import { toLocaleDateString } from '@utils/toLocaleDateString';

import styles from './Details.module.scss';

export const Details: FC<Record<'details', PickedDetailsProps>> = ({ details: { slug, tags, title, published, introduction } }) => {
  const { locale } = useRouter();
  const isSetLocale = locale === 'en' ? Locale.En : Locale.Pl;

  return (
    <div className={styles.details}>
      <DateAndTitle details={{ date: toLocaleDateString(published, isSetLocale), title, href: `/articles/${slug}` }} />
      <Paragraph>{introduction}</Paragraph>
      <TagsList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsList>
    </div>
  );
};
