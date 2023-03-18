/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { NextApiRequest, NextApiResponse } from 'next';

import { client } from '@graphql/apollo/apolloClient';
import { ArticlesOrderByInput, Locale } from '@graphql/databases/client';
import { getServerPageSearchForArticlesList, getServerPageSearchForArticlesListByTags, getServerPageSearchForArticlesListWithTags } from '@graphql/databases/server';

import { splittedTags } from './../../../../utils/splittedTags';

// const getTagValue = (tagName: keyof typeof Tags) => Tags[tagName];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { type, tags, search, locale } = req.query;
    const isEnglish = locale === 'en' ? [Locale.En] : [Locale.Pl];

    if (type === 'search') {
      const {
        props: {
          data: { schemaArticles },
        },
      } = await getServerPageSearchForArticlesList({ variables: { search: search as string, locales: isEnglish, orderBy: ArticlesOrderByInput.CreatedAtDesc } }, client);

      return search!.length > 3 ? res.send(schemaArticles) : res.send([]);
    }

    if (type === 'tags' && typeof tags === 'string') {
      const tagsContainsSome = splittedTags(tags);

      const {
        props: {
          data: { schemaArticles },
        },
      } = await getServerPageSearchForArticlesListByTags({ variables: { tagsContainsSome, locales: isEnglish, orderBy: ArticlesOrderByInput.CreatedAtDesc } }, client);

      return res.send(schemaArticles);
    }

    if (type === 'search-tags' && typeof tags === 'string') {
      const tagsContainsSome = splittedTags(tags);

      const {
        props: {
          data: { schemaArticles },
        },
      } = await getServerPageSearchForArticlesListWithTags(
        { variables: { search: search as string, tagsContainsSome, locales: isEnglish, orderBy: ArticlesOrderByInput.CreatedAtDesc } },
        client
      );

      return res.send(schemaArticles);
    }

    res.send(null);
  } catch (err) {
    res.send(err);
  }
};
