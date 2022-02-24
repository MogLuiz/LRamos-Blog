import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

// Components
import Header from "../components/Header";

globalStyles();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
