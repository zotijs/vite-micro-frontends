import { clsx } from "clsx";

// Remotes
import { Header } from "remoteHeader/Header";
import { Footer } from "remoteFooter/Footer";
import { Counter } from "remoteCounter/Counter";

import { withDarkMode } from "./components";
import Logo from "./mf.svg";

import styles from "./App.module.css";

const APP_NAME = "Module Federations Example";

type Props = {
  darkMode: boolean;
};

const BaseApp = ({ darkMode }: Props) => (
  <div className={clsx(styles.container, { [styles.darkMode]: darkMode })}>
    <Header logoSrc={Logo} appName={APP_NAME} />
    <main>
      <p>This paragraph belongs to the host application</p>
      <Counter />
    </main>
    <Footer appName={APP_NAME} />
  </div>
);

const App = withDarkMode(BaseApp);

export default App;
