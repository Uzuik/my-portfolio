import { ReactNode } from "react";
import { ThemeProvider } from "@chakra-ui/react";
import theme from "presentation/theme";

export const UITestWrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
