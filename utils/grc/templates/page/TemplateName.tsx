import { ReactElement } from 'react';
import type { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next';

import { NextPageWithLayout } from 'types/app';

type TemplateNameProps = {};

const TemplateNamePage: NextPageWithLayout<TemplateNameProps> = ({}) => {
  return <div>TemplateName Page</div>;
};

TemplateNamePage.getLayout = (page: ReactElement) => {
  // replace to your layout
  return <>{page}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {},
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getServerSideProps: GetServerSideProps = async (_ctx) => {
  return {
    props: {},
  };
};

export default TemplateNamePage;
