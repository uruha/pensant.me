import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  NotFoundDataQuery,
  MarkdownRemarkEdge
} from '../../types/graphql-types';

type NotFoundIProps = {
  data?: NotFoundDataQuery;
  location: Location;
  pageContext: MarkdownRemarkEdge;
};

const NotFoundPage: React.FC<NotFoundIProps> = ({
  data,
  location,
  pageContext
}) => {
  const notFoundTitle = '404';

  return (
    <>
      <SEO title={notFoundTitle} />
      <Layout location={location} title={notFoundTitle} pageContext={pageContext}>
        <h1>URIに対応するページは現在ございません。</h1>
        <p>
          今後の更新で表示されるかもしれませんが、<br/>
          現在のところその予定はありません。
        </p>
        <p>悪しからず。</p>
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
