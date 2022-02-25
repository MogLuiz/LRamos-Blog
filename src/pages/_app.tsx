// Components
import { Header } from "../components";

// Types
import type { AppProps } from "next/app";

// Providers
import { Provider } from "urql";
import { client, ssrCache } from "../lib/urql";

// Stitches Global Style
import { globalStyles } from "../styles/global";

globalStyles();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Reaproveitando cache do server-side pro client-side
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <Provider value={client}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
