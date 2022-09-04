import { ComponentPropsWithChildren } from 'types/app';
import styles from './TemplateName.module.scss';

type HeaderProps = ComponentPropsWithChildren & {};

export const Header = ({}: HeaderProps) => {
  return <div className={styles.templateName__header}>Header component</div>;
};
