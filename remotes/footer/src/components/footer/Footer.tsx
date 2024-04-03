import { clsx } from "clsx";

import { withDarkMode } from "./components";
import styles from "./Footer.module.css";

export type FooterProps = {
  appName: string;
  extraStyles?: string;
  darkMode: boolean;
};

export const BaseFooter = ({ appName, extraStyles, darkMode }: FooterProps) => (
  <footer
    className={clsx(styles.container, extraStyles, {
      [styles.darkMode]: darkMode,
    })}
  >
    {appName} | Copyright:&nbsp;<strong>{new Date().getFullYear()}</strong>
  </footer>
);

export const Footer = withDarkMode(BaseFooter);
