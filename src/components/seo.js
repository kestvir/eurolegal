import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        siteUrl
        siteTitle: title
      }
    }
  }
`
const SEO = () => {
  const { site } = useStaticQuery(query)
  const { siteDesc, siteTitle } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={siteTitle}>
      <meta name="description" content={siteDesc} />
    </Helmet>
  )
}

export default SEO
