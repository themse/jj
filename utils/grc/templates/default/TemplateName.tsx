import { ComponentPropsWithChildren } from 'types/app';

import styles from './TemplateName.module.scss';

type TemplateNameProps = ComponentPropsWithChildren & {};

export const TemplateName = ({}: TemplateNameProps) => {
  return (
    <div className={styles.templateName} data-testid="templateName">
      TemplateName Component
    </div>
  );
};
