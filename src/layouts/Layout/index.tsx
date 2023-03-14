import Head from 'next/head';
import type { Children, FC } from 'react';
import { useBlurStore } from 'src/stories/blur';

import { Blur } from '@components/global/atoms/Blur';
import { Footer } from '@components/global/atoms/Footer';
import Navigation from '@components/Navigation';

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
