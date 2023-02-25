import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "presentation/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>薄 岳洋のポートフォリオ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
