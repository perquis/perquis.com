import Head from 'next/head';
import type { Children, FC } from 'react';
import { useBlurStore } from 'src/stories/blur';

import { Blur } from '@GlobalComponents/atoms/Blur';
import { Footer } from '@GlobalComponents/atoms/Footer';

import { Navigation } from '@components/Navigation';

import styles from './Layout.module.scss';

export const Layout: FC<Children> = ({ children }) => {
  const [isBlur] = useBlurStore((state) => [state.isBlur]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/Logo.svg" />
      </Head>
      {isBlur && <Blur />}
      <Navigation />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
