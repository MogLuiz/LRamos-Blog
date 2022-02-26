// Packages
import { GetStaticProps } from "next";
import React from "react";
import { PostDocument } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

const PostSelectedPage: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <div />;
};

export default PostSelectedPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  client.query(PostDocument, { slug: params?.slug }).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};
