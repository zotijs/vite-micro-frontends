import { Header } from "remoteHeader/Header";
import { Footer } from "remoteFooter/Footer";
import { WrappedCounter as Counter } from "remoteCounter/Counter";

import styles from "./App.module.css";

const APP_NAME = "Module Federations Example";
const LOGO_URL =
  "https://microfrontend.dev/_astro/microfrontendsdevlogocode.7728bb45.svg";

const App = () => (
  <div className={styles.container}>
    <Header logoSrc={LOGO_URL} appName={APP_NAME} />
    <main>
      <p>
        This paragraph is the only content that belongs to the host application
      </p>
      <Counter />
    </main>
    <Footer appName={APP_NAME} />
  </div>
);

export default App;
