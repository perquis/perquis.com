/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApolloProvider } from '@apollo/client';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import type { Children, FC } from 'react';

import { client } from '@graphql/apollo/apolloClient';

import { GlobalLayout } from '@layouts/GlobalLayout';
import { Layout } from '@layouts/Layout';
import { WaviesLayout } from '@layouts/WaviesLayout';

export const Provider: FC<Children & { session: any; pageProps: any }> = ({ children, session, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ApolloProvider client={client}>
          <SessionProvider session={session}>
            <ThemeProvider>
              <GlobalLayout>
                <WaviesLayout>
                  <Layout>{children}</Layout>
                </WaviesLayout>
              </GlobalLayout>
            </ThemeProvider>
          </SessionProvider>
        </ApolloProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};
