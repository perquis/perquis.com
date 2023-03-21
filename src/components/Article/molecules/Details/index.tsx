import { useRouter } from 'next/router';
import type { FC } from 'react';

import { Paragraph } from '@GlobalComponents/atoms/Paragraph';
import { Tag } from '@GlobalComponents/atoms/Tag';
import { TagsList } from '@GlobalComponents/molecules/TagsLits';

import type { PickedDetailsProps } from '@stories/articles';

import { Locale } from '@graphql/databases/client';

import { toLocaleDateString } from '@utils/toLocaleDateString';

import { articleRoute } from '@data/routes';

import type { IDateAndTitle } from '../DateAndTitle';
import { DateAndTitle } from '../DateAndTitle';
import styles from './Details.module.scss';

export const Details: FC<Record<'details', PickedDetailsProps> & IDateAndTitle> = ({ details: { slug, tags, title, createdAt, introduction }, isLink }) => {
  const { locale } = useRouter();
  const isSetLocale = locale === 'en' ? Locale.En : Locale.Pl;

  return (
    <div className={`${styles.details} ${isLink ? styles['is-not-link'] : ''}`}>
      <DateAndTitle details={{ date: toLocaleDateString(createdAt, isSetLocale), title, href: `/${articleRoute}/${slug}` }} isLink={isLink ? true : false} />
      <Paragraph>{introduction}</Paragraph>
      <TagsList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsList>
    </div>
  );
};
