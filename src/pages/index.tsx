// @ts-ignore
import type { IHomePageProps } from '@types/pages';

import type { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import type { FC } from 'react';

import { HomePage } from '@GlobalComponents/pages/HomePage';

import { Locale } from '@graphql/databases/client';
import { fetchArticlesListWithPages } from '@graphql/libraries/getArticlesListWithPages';
import { fetchTechnologiesList } from '@graphql/libraries/getTechnologiesListValues';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const isEnglish = locale === 'en' ? [Locale.En] : [Locale.Pl];

  const technologies = await fetchTechnologiesList();
  const articles = await fetchArticlesListWithPages({ isEnglish });

  return {
    props: { technologies, articles },
  };
};

const Home: FC<IHomePageProps> = ({ ...props }) => {
  const { t } = useTranslation('home');
  const title = t('meta-title'),
    description = t('meta-description');

  return (
    <>
      <Head>
        <title>{title + ` | PerQuis&apos;s Blog`}</title>
        <meta name="description" content={description} />
      </Head>
      <HomePage stories={props} />
    </>
  );
};

export default Home;
