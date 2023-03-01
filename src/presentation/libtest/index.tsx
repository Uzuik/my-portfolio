import { ThemeProvider } from "@chakra-ui/react";
import theme from "presentation/theme";

export const UITestWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
