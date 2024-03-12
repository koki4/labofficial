import "@/styles/globals.css";
import type { AppProps } from "next/app";

//Setup Chakra ui provider
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="robots" content="noindex" />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
