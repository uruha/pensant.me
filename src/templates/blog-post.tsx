import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  BlogPostBySlugQuery,
  MarkdownRemarkEdge
} from '../../types/graphql-types';

type BlogPostIProps = {
  data: BlogPostBySlugQuery;
  pageContext: MarkdownRemarkEdge;
  location: Location;
};

const BlogPostTemplate: React.FC<BlogPostIProps> = ({
  data,
  pageContext,
  location
}) => {
  const post = data.markdownRemark;

  return (
    <>
      <SEO
        title={post?.frontmatter?.title}
        description={post?.frontmatter?.description || post?.excerpt}
        shareImagePath={
          post?.frontmatter?.featuredImage?.childImageSharp?.original?.src
        }
      />
      <Layout
        location={location}
        title={post?.frontmatter?.title}
        pageContext={pageContext}
      >
        <article>
          <header>
            <h1>{post?.frontmatter?.title}</h1>
            <time dateTime={post?.frontmatter?.date}>
              {post?.frontmatter?.date}
            </time>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post?.html || '' }} />
        </article>
      </Layout>
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    }
  }
`;
