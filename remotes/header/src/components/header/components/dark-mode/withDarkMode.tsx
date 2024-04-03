import { type ComponentType, useState } from "react";

export const withDarkMode =
  <P,>(Component: ComponentType<P>) =>
  (props: Omit<P, "darkMode" | "toggleDarkMode">) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      const newMode = !darkMode;

      setDarkMode(newMode);

      window.postMessage({ type: "DARK_MODE", payload: newMode }, "*");
    };

    return (
      <Component
        {...(props as P)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    );
  };
