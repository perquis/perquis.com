// @ts-ignore
import type { HomePageViewProps } from '@types/pages';

import type { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import type { FC } from 'react';

import { HomePageView } from '@components/globals/views';
import { Locale } from '@graphql/databases/client';
import { fetchArticlesListPagination } from '@graphql/libraries/getArticlesListWithPages';
import { fetchTechnologiesList } from '@graphql/libraries/getTechnologiesListValues';
import { dehydrate, QueryClient } from '@tanstack/react-query';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const isEnglish = locale === 'en' ? [Locale.En] : [Locale.Pl];
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({ queryKey: ['articles', locale, '', []], queryFn: () => fetchArticlesListPagination({ isEnglish }) });

  const technologies = await fetchTechnologiesList();

  return {
    props: { technologies, dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))) },
  };
};

const Home: FC<HomePageViewProps> = ({ technologies }) => {
  const { t } = useTranslation('home');
  const title = t('meta-title'),
    description = t('meta-description');

  return (
    <>
      <Head>
        <title>{title + ` | PerQuis's Blog`}</title>
        <meta name="description" content={description} />
      </Head>
      <HomePageView stories={{ technologies }} />
    </>
  );
};

export default Home;
