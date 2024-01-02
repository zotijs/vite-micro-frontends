import { Counter } from "./components";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      height: "100vh",
      width: "100vw",
      gap: "1rem",
    }}
  >
    <p>Hello Counter</p>
    <Counter />
  </div>
);

export default App;
