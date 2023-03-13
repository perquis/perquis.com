import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { getApolloClient as client } from '@graphql/apolloClient';

import { Layout } from '@layouts/Layout';
import { WaviesLayout } from '@layouts/WaviesLayout';

import '@styles/globals.scss';

import { GlobalLayout } from '@fonts/GlobalLayout';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <GlobalLayout>
          <WaviesLayout>
            <Layout>
              <ApolloProvider client={client}>
                <Component {...pageProps} />
              </ApolloProvider>
            </Layout>
          </WaviesLayout>
        </GlobalLayout>
      </ThemeProvider>
    </SessionProvider>
  );
}
