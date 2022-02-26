// Packages
import { GetStaticProps } from "next";
import React from "react";

// Components
import { MainCard } from "../../components";
import { PageDocument } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

// Styles
import { Wrapper } from "../styles";

const BlogPage: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Wrapper>
      <MainCard />
    </Wrapper>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  await client.query(PageDocument, { slug: "home" }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
