import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { Paragraph, Tag } from '@components/globals/atoms';
import { TagsList } from '@components/globals/molecules';
import { articleRoute } from '@data';
import type { Articles } from '@graphql/databases/client';
import { Locale } from '@graphql/databases/client';
import { toLocaleDateString } from '@utils';

import { DateAndTitle, type IDateAndTitle } from '../DateAndTitle/DateAndTitle';
import styles from './Details.module.scss';

export const Details: FC<Record<'details', Articles> & IDateAndTitle> = ({ details: { slug, tags, title, createdAt, introduction }, isLink }) => {
  const { locale } = useRouter();
  const isSetLocale = locale === 'en' ? Locale.En : Locale.Pl;

  return (
    <div className={clsx(styles.details, isLink && styles['is-not-link'])}>
      <DateAndTitle details={{ date: toLocaleDateString(createdAt, isSetLocale), title: String(title), href: `/${articleRoute}/${slug}` }} isLink={isLink ? true : false} />
      <Paragraph>{introduction}</Paragraph>
      <TagsList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsList>
    </div>
  );
};
