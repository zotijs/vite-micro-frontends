export type FooterProps = {
  appName: string;
};

// TODO: implement injectable theming and replace the inline styles
export const Footer = ({ appName }: FooterProps) => (
  <footer
    style={{
      height: 24,
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "black",
      borderTop: "1px solid white",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    }}
  >
    {appName} copyright: <strong>{new Date().getFullYear()} </strong>
  </footer>
);
