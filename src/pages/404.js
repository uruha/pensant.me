import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title="404: Not Found" />
      <Layout location={location} title={siteTitle} pageContext={pageContext}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
