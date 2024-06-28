import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./theme";
import "./index.scss";

const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
