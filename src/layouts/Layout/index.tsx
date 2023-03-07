import Head from 'next/head';
import type { Children, FC } from 'react';

import { Footer } from '@components/global/atoms/Footer';
import Navigation from '@components/Navigation';

import styles from './Layout.module.scss';

export const Layout: FC<Children> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/Logo.svg" />
      </Head>
      <Navigation />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
