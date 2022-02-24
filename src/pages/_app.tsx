// Components
import Header from "../components/Header";

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
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
