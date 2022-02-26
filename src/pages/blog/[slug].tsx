// Packages
import React from "react";

// Query generated
import { PostDocument, usePostQuery } from "../../generated/graphql";

// Urql client
import { client, ssrCache } from "../../lib/urql";

// Types
import { GetStaticPaths, GetStaticProps } from "next";

interface IPostSelectedPageProps {
  slug: string;
}

const PostSelectedPage: React.FC<IPostSelectedPageProps> = ({ slug }) => {
  // -------------------------------------------------
  // Graphql queries
  // -------------------------------------------------
  const [{ data }] = usePostQuery({
    variables: {
      slug,
    },
  });
  console.log(data);

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
      slug: params?.slug,
    },
  };
};
