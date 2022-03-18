// Components
import { Header } from "@/components";

// Types
import type { AppProps } from "next/app";

// Providers
import { Provider } from "urql";
import { client, ssrCache } from "@/lib/urql";

import dark from "../styles/themes/dark";
import { ThemeProvider } from "styled-components";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Reaproveitando cache do server-side pro client-side
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <ThemeProvider theme={dark}>
      <Provider value={client}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
