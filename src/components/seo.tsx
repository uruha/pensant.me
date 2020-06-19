/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import { MetaDataQuery } from "../../types/graphql-types";

type SEOIProps = {
  description?: string | null;
  lang?: string;
  title?: string | null;
  shareImagePath?: string | null;
};

const SEO: React.FC<SEOIProps> = (
  { lang, title, description, shareImagePath } = {
    lang: `ja`,
    title: "",
    description: "",
    shareImagePath: null,
  }
) => {
  const { site }: MetaDataQuery = useStaticQuery(
    graphql`
      query MetaData {
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
  );

  const metaDescription = description || site?.siteMetadata?.description || "";
  const imageUrl = shareImagePath
    ? `${site?.siteMetadata?.siteUrl}${shareImagePath}`
    : `${site?.siteMetadata?.siteUrl}${site?.siteMetadata?.social?.image}`;
  const titleTemplate = `${title} / ${site?.siteMetadata?.title}`;
  const twitterAccount = `${site?.siteMetadata?.social?.twitter}` || "";

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html
        lang={lang}
        prefix="og: http://ogp.me/ns# website: http://ogp.me/ns/website#"
      />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleTemplate} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={twitterAccount} />
      <meta name="twitter:title" content={titleTemplate} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;
