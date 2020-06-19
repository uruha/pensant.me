import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  NotFoundDataQuery,
  MarkdownRemarkEdge
} from '../../types/graphql-types';

type NotFoundIProps = {
  data: NotFoundDataQuery;
  location: Location;
  pageContext: MarkdownRemarkEdge;
};

const NotFoundPage: React.FC<NotFoundIProps> = ({
  data,
  location,
  pageContext
}) => {
  const notFoundTitle = 'ページが見つかりません';
  const siteTitle = data.site?.siteMetadata?.title || notFoundTitle;

  return (
    <>
      <SEO title={notFoundTitle} />
      <Layout location={location} title={siteTitle} pageContext={pageContext}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
