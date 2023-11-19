import { Header } from "./components";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    }}
  >
    <Header logoSrc="/vite.svg" appName="Header Example" />
    Hello Header
  </div>
);

export default App;
