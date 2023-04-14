import clsx from 'clsx';
// import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { Tag } from '@GlobalComponents/atoms/Tag';
import { TagsList } from '@GlobalComponents/molecules/TagsLits';

// import { components } from '@components/MarkdownToHTML/components/components';
import type { Articles } from '@graphql/databases/client';
import { Locale } from '@graphql/databases/client';

import { toLocaleDateString } from '@utils/toLocaleDateString';

import { articleRoute } from '@data/routes';

import type { IDateAndTitle } from '../DateAndTitle';
import { DateAndTitle } from '../DateAndTitle';
import styles from './Details.module.scss';

export const Details: FC<Record<'details', Articles> & IDateAndTitle> = ({ details: { slug, tags, title, createdAt }, isLink }) => {
  const { locale } = useRouter();
  const isSetLocale = locale === 'en' ? Locale.En : Locale.Pl;

  return (
    <div className={clsx(styles.details, isLink && styles['is-not-link'])}>
      <DateAndTitle details={{ date: toLocaleDateString(createdAt, isSetLocale), title: String(title), href: `/${articleRoute}/${slug}` }} isLink={isLink ? true : false} />
      {/* <MDXRemote {...introduction} components={components} /> */}
      <TagsList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsList>
    </div>
  );
};
