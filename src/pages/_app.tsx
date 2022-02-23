import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

globalStyles();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
