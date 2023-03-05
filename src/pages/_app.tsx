<<<<<<< HEAD
<<<<<<< HEAD
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
=======
=======
import { ThemeProvider } from 'next-themes';
>>>>>>> 9f3cede (Introduced Navigation component to application.)
import type { AppProps } from 'next/app';
>>>>>>> c88880c (Introduced fixes to application.)

import '@styles/globals.scss';

import { GlobalLayout } from '@fonts/GlobalLayout';

export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  return <Component {...pageProps} />
=======
  return (
    <ThemeProvider>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </ThemeProvider>
  );
>>>>>>> 9f3cede (Introduced Navigation component to application.)
}
