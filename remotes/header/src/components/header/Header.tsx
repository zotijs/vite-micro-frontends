import { clsx } from "clsx";

import { withDarkMode } from "./components";
import styles from "./Header.module.css";

export type HeaderProps = {
  logoSrc: string;
  appName: string;
  extraStyles?: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// TODO: implement injectable theming and replace the inline styles
const BaseHeader = ({
  logoSrc,
  appName,
  extraStyles,
  darkMode,
  toggleDarkMode,
}: HeaderProps) => (
  <header
    className={clsx(styles.container, extraStyles, {
      [styles.darkMode]: darkMode,
    })}
  >
    <div className={styles.logoContainer}>
      <img className={styles.logoImage} src={logoSrc} alt={`${appName} logo`} />
      <h4>{appName}</h4>
    </div>
    <button
      className={clsx(styles.modeButton, { [styles.modeButtonDark]: darkMode })}
      onClick={toggleDarkMode}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  </header>
);

export const Header = withDarkMode(BaseHeader);
