import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(metaDataQuery)

    const {
        mainTitle,
        githubUsername,
        tagline,
        aboutDescription,
        ownerName,
        ownerEmail,
        siteVersion
    } = site.siteMetadata

    const seo = {
        mainTitle: title || mainTitle
        githubUsername:
        tagline:
        aboutDescription:
        ownerName:
        ownerEmail:
        siteVersion:

        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
      }

    return null
}

export default SEO

const metaDataQuery = graphql`
    query SEOQuery {
        site {
            siteMetadata {
                mainTitle
                githubUsername
                tagline
                aboutDescription
                ownerName
                ownerEmail
                siteVersion
            }
        }
    }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: "CodexLink",
  description: "No Description",
  image: null,
  article: false,
}