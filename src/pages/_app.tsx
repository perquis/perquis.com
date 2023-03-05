<<<<<<< HEAD
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
=======
import type { AppProps } from 'next/app';
>>>>>>> c88880c (Introduced fixes to application.)

import '@styles/globals.scss';

import { GlobalLayout } from '@fonts/GlobalLayout';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
