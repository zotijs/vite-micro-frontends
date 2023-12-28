import { Header } from "remoteHeader/Header";
import { Footer } from "remoteFooter/Footer";

const APP_NAME = "Module Federations Example";
const LOGO_URL =
  "https://microfrontend.dev/_astro/microfrontendsdevlogocode.7728bb45.svg";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    }}
  >
    <Header logoSrc={LOGO_URL} appName={APP_NAME} />
    <p>This is the only content that belongs to the host application</p>
    <Footer appName={APP_NAME} />
  </div>
);

export default App;
