import { clsx } from "clsx";

import styles from "./Footer.module.css";

export type FooterProps = {
  appName: string;
  extraStyles?: string;
};

// TODO: implement injectable theming and replace the inline styles
export const Footer = ({ appName, extraStyles }: FooterProps) => (
  <footer className={clsx(styles.container, extraStyles)}>
    {appName} copyright: <strong>{new Date().getFullYear()} </strong>
  </footer>
);
