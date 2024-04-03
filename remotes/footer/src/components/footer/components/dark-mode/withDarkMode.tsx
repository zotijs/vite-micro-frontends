import { type ComponentType, useState } from "react";

export const withDarkMode =
  <P,>(Component: ComponentType<P>) =>
  (props: Omit<P, "darkMode">) => {
    const [darkMode, setDarkMode] = useState(false);

    window.addEventListener("message", (event) => {
      if (event.data.type === "DARK_MODE") {
        setDarkMode(event.data.payload);
      }
    });

    return <Component {...(props as P)} darkMode={darkMode} />;
  };
