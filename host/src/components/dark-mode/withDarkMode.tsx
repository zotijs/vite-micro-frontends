import { type ComponentType, useState } from "react";

export const withDarkMode =
  <P,>(Component: ComponentType<P>) =>
  (props: P) => {
    const [darkMode, setDarkMode] = useState(false);

    window.addEventListener("message", (event) => {
      if (event.data.type === "DARK_MODE") {
        setDarkMode(event.data.payload);
      }
    });

    return <Component {...props} darkMode={darkMode} />;
  };
