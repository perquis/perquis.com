import type { GetStaticProps } from 'next';
import type { FC } from 'react';

import { HomePage } from '@pages/HomePage';

export interface IHomeProps {
  technologies: string[];
}

const Home: FC<IHomeProps> = ({ technologies }) => {
  return <HomePage technologies={technologies} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(`${process.env.HOST}/api/technologies`);
  const technologies = await data.json();

  return {
    props: { technologies },
  };
};

export default Home;
