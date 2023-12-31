import { clsx } from "clsx";

import styles from "./Header.module.css";

export type HeaderProps = {
  logoSrc: string;
  appName: string;
  extraStyles?: string;
};

// TODO: implement injectable theming and replace the inline styles
export const Header = ({ logoSrc, appName, extraStyles }: HeaderProps) => (
  <header className={clsx(styles.container, extraStyles)}>
    <img src={logoSrc} alt={`${appName} logo`} />
    <h4>{appName}</h4>
  </header>
);
