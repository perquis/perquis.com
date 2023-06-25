import type { AppProps } from 'next/app';

import { GlobalProvider } from '@providers';
import '@styles/main.scss';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <GlobalProvider session={session} pageProps={pageProps}>
      <Component {...pageProps} />
    </GlobalProvider>
  );
};

export default App;
