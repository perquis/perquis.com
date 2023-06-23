import type { AppProps } from 'next/app';

import { Provider } from '@providers/Provider';
import '@styles/main.scss';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <Provider session={session} pageProps={pageProps}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
