export type HeaderProps = {
  logoSrc: string;
  appName: string;
};

// TODO: implement injectable theming and replace the inline styles
export const Header = ({ logoSrc, appName }: HeaderProps) => (
  <header
    style={{
      height: 48,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: "black",
      borderBottom: "1px solid white",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: 16,
    }}
  >
    <img src={logoSrc} alt={`${appName} logo`} style={{ height: 32 }} />
    <h4>{appName}</h4>
  </header>
);
