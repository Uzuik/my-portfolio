import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        letterSpacing: '1px'
      }
    }
  },
  fonts: {
    heading: `"Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif`,
    body: `"Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Arial", "Yu Gothic", "Meiryo", sans-serif`,
  },
  semanticTokens: {
    colors: {
      // 'chakra-body-text': 'gray.700',
      // 'chakra-body-bg': 'gray.50'
    },
  },
});

export default theme;
