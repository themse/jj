import { ReactElement } from 'react';

import { NextPageWithLayout } from 'types/app';

const Home: NextPageWithLayout = () => {
  return <div>Home Page</div>;
};

Home.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export default Home;
