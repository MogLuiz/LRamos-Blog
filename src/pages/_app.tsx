// Components
import { Header, MainCard } from "../components";

// Types
import type { AppProps } from "next/app";

// Stitches Global Style
import { globalStyles } from "../styles/global";

globalStyles();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <>
      <Header />
      <MainCard />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
