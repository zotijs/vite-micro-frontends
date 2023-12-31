import { Counter } from "./components";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100vh",
      width: "100vw",
    }}
  >
    <p
      style={{
        height: "100%",
      }}
    >
      Hello Counter
    </p>
    <Counter />
  </div>
);

export default App;
