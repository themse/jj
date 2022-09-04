import { ComponentPropsWithChildren } from 'types/app';
import styles from './TemplateName.module.scss';

type FooterProps = ComponentPropsWithChildren & {};

export const Footer = ({}: FooterProps) => {
  return <div className={styles.templateName__footer}>Footer component</div>;
};
