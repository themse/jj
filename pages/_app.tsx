import type { AppProps } from 'next/app';

import { NextPageWithLayout } from 'types/app';

import '../styles/globals.scss';

type MyAppProps = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: MyAppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
