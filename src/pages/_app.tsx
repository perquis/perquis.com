import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { WaviesLayout } from '@layouts/WaviesLayout';

import '@styles/globals.scss';

import { GlobalLayout } from '@fonts/GlobalLayout';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <GlobalLayout>
          <WaviesLayout>
            <Component {...pageProps} />
          </WaviesLayout>
        </GlobalLayout>
      </ThemeProvider>
    </SessionProvider>
  );
}
