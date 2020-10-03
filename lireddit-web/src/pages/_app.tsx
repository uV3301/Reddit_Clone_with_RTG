import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import React from "react";
import { createClient, Provider } from "urql";
const client = createClient({ url: "https://localhost:5000/graphql" });

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
