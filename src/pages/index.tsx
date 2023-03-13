import type { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import type { FC } from 'react';

import { HomePage } from '@pages/HomePage';

import { fetchTechnologiesList } from '@graphql/queries/getTechnologiesListValues';

export interface IHomeProps {
  technologies: string[];
}

const Home: FC<IHomeProps> = ({ technologies }) => {
  const { t } = useTranslation('home');
  const title = t('meta-title'),
    description = t('meta-description');

  return (
    <>
      <Head>
        <title>{title + ` | PerQuis&apos;s Blog`}</title>
        <meta name="description" content={description} />
      </Head>
      <HomePage technologies={technologies} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const technologiesList = await fetchTechnologiesList();
  const technologies = technologiesList.map(({ name }) => name);

  return {
    props: { technologies },
  };
};

export default Home;
