<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
=======
=======
=======
import { SessionProvider } from 'next-auth/react';
>>>>>>> 921af30 (Introduced fixes to Navigation component.)
import { ThemeProvider } from 'next-themes';
>>>>>>> 9f3cede (Introduced Navigation component to application.)
import type { AppProps } from 'next/app';
>>>>>>> c88880c (Introduced fixes to application.)

import '@styles/globals.scss';

import { GlobalLayout } from '@fonts/GlobalLayout';

<<<<<<< HEAD
export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return <Component {...pageProps} />
=======
=======
export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
>>>>>>> 921af30 (Introduced fixes to Navigation component.)
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ThemeProvider>
    </SessionProvider>
  );
>>>>>>> 9f3cede (Introduced Navigation component to application.)
}
