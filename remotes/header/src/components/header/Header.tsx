import { clsx } from "clsx";

import { withDarkMode } from "./components";
import darkIcon from "./images/dark.svg";
import lightIcon from "./images/light.svg";
import styles from "./Header.module.css";

export type HeaderProps = {
  logoSrc: string;
  appName: string;
  extraStyles?: string;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
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
    <img src={logoSrc} alt={`${appName} logo`} />
    <h4>{appName}</h4>
    <button onClick={toggleDarkMode}>
      {darkMode ? (
        <img src={lightIcon} alt="toggle light" />
      ) : (
        <img src={darkIcon} alt="toggle dark" />
      )}
    </button>
  </header>
);

export const Header = withDarkMode(BaseHeader);
