// Packages
import React from "react";

// Query generated
import { PostDocument } from "../../generated/graphql";

// Urql client
import { client, ssrCache } from "../../lib/urql";

// Types
import { GetStaticPaths, GetStaticProps } from "next";

const PostSelectedPage: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <div />;
};

export default PostSelectedPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  client.query(PostDocument, { slug: params?.slug }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
