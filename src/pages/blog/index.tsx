// Packages
import { GetStaticProps } from "next";
import React from "react";

// Components
import { MainCard } from "../../components";
import { PostsDocument, usePostsQuery } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

// Styles
import { Wrapper } from "./styles";

const BlogPage: React.FC = () => {
  // -------------------------------------------------
  // Graphql queries
  // -------------------------------------------------

  // getall posts
  const [{ data: posts }] = usePostsQuery();
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  console.log(posts);

  return (
    <Wrapper>
      <MainCard />
    </Wrapper>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  await client.query(PostsDocument).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
