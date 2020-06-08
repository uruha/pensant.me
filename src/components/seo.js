/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

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
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const imageUrl = shareImagePath
    ? `${site.siteMetadata.siteUrl}${shareImagePath}`
    : `${site.siteMetadata.siteUrl}${site.siteMetadata.social.image}`
  console.log(imageUrl);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imageUrl,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:site`,
          content: site.siteMetadata.social.twitter,
        },
        {
          property: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: imageUrl,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `ja`,
  meta: [],
  description: ``,
  shareImagePath: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
