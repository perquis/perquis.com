/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { Children, FC } from 'react';

import { client } from '@graphql/apollo/apolloClient';

import { Layout } from '@layouts/Layout';
import { WaviesLayout } from '@layouts/WaviesLayout';

import { GlobalLayout } from '@fonts/GlobalLayout';

export const Provider: FC<Children & { session: any }> = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <GlobalLayout>
          <WaviesLayout>
            <Layout>
              <ApolloProvider client={client}>{children}</ApolloProvider>
            </Layout>
          </WaviesLayout>
        </GlobalLayout>
      </ThemeProvider>
    </SessionProvider>
  );
};
