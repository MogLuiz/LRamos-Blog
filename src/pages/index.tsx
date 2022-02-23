import type { NextPage } from "next";
import Head from "next/head";

// Components
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blog | LRamos</title>
      </Head>
      <Header />
    </>
  );
};

export default Home;
