/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, title, shareImagePath }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            social {
              twitter
              image
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const imageUrl = shareImagePath
    ? `${site.siteMetadata.siteUrl}${shareImagePath}`
    : `${site.siteMetadata.siteUrl}${site.siteMetadata.social.image}`;
  const titleTemplate = `${title} / ${site.siteMetadata.title}`;

  return (
    <Helmet
      titleTemplate={titleTemplate}
    >
      <html
        lang={lang}
        prefix="og: http://ogp.me/ns# website: http://ogp.me/ns/website#"
      />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={imageUrl} />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={titleTemplate}
      />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.social.twitter} />
      <meta name="twitter:site" content={title} />
      <meta
        name="twitter:title"
        content={titleTemplate}
      />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
  shareImagePath: null,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
