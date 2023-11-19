import { Footer } from "./components";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
    }}
  >
    <p
      style={{
        height: "100%",
      }}
    >
      Hello Footer
    </p>
    <Footer appName="Footerious" />
  </div>
);

export default App;
