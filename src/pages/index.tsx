// Gatsby supports TypeScript natively!
import * as React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { IndexDataQuery, MarkdownRemarkEdge } from '../../types/graphql-types';

type BlogIndexIProps = {
  data: IndexDataQuery;
  location: Location;
  pageContext: MarkdownRemarkEdge;
};

const BlogIndex: React.FC<BlogIndexIProps> = ({
  data,
  location,
  pageContext
}) => {
  const siteTitle = data.site?.siteMetadata?.title || '思考';
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <Layout location={location} title={siteTitle} pageContext={pageContext}>
        <SEO title="一覧" />
        {posts.map(({ node }, i) => {
          const title = node.frontmatter?.title || node.fields?.slug;
          return (
            <article key={node.fields?.slug || i}>
              <header>
                <h2>
                  {node.fields?.slug && (
                    <Link to={node.fields?.slug}>{title}</Link>
                  )}
                </h2>
                <time dateTime={node.frontmatter?.date}>
                  {node.frontmatter?.date}
                </time>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter?.description || node.excerpt || ''
                  }}
                />
              </section>
            </article>
          );
        })}
      </Layout>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexData {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
