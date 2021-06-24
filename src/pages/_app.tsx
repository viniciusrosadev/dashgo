import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawnerProvider } from "../contexts/SidebarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawnerProvider>
        <Component {...pageProps} />
      </SidebarDrawnerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
