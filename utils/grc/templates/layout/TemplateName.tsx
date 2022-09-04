import Head from 'next/head';

import styles from './TemplateName.module.scss';
import { Header } from './Header';
import { Footer } from './Footer';
import { ComponentPropsWithChildren } from 'types/app';
import { HeadMetadata } from 'common/HeadMetadata';

type TemplateNameProps = ComponentPropsWithChildren & {
  title?: string;
};

export const TemplateNameLayout = ({
  children,
  title = 'TemplateName',
}: TemplateNameProps) => {
  return (
    <>
      <Head>
        <HeadMetadata title={title} />
      </Head>

      <div className={styles.templateName} data-testid="templateNameLayout">
        <Header />

        <main className={styles.templateName__main}>{children}</main>

        <Footer />
      </div>
    </>
  );
};
