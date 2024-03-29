/* eslint-disable @typescript-eslint/no-explicit-any */
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { Children, FC } from 'react';
import { useState } from 'react';

import { client } from '@apollo';
import { ApolloProvider } from '@apollo/client';
import { usePersistLocaleCookie } from '@hooks';
import { GlobalLayout, Layout, WaviesLayout } from '@layouts';
import { ThemeServiceProvider } from '@providers';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const GlobalProvider: FC<Children & { session: any; pageProps: any }> = ({ children, session, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());
  usePersistLocaleCookie();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ApolloProvider client={client}>
          <SessionProvider session={session}>
            <ThemeProvider>
              <ThemeServiceProvider>
                <GlobalLayout>
                  <WaviesLayout>
                    <Layout>{children}</Layout>
                  </WaviesLayout>
                </GlobalLayout>
              </ThemeServiceProvider>
            </ThemeProvider>
          </SessionProvider>
        </ApolloProvider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
};
