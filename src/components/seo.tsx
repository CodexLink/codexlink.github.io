import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql, GatsbyGraphQLType } from "gatsby"
import { ExportedMetaData, EnsuredMetaDataHeader } from "../helpers/typing/interfaces"
import { contentContexts as ContentType } from "../helpers/typing/types"

const metaDataQuery = graphql`
    query SEOQuery {
        site {
            siteMetadata {
                urlSite
                aboutSite
                tagline
                userInfo {
                    ownerName
                    githubInfo
                    siteVersion
                }
                contentTitle {
                    genericContext
                    blogContext
                    portfolioContext
                }
            }
        }
    }
`

const SEO = ({ title, contextType, description }: { title: string, contextType: ContentType, description: string }): JSX.Element => {

    const { pathname: urlPath } = useLocation()
    const { site: siteContext } = useStaticQuery(metaDataQuery)

    const {
        urlSite,
        aboutSite,
        tagline,
        userInfo,
        contentTitle
    } = siteContext.siteMetadata as ExportedMetaData

    const metaHeader: EnsuredMetaDataHeader = {
        title: title,
        tagline: tagline,
        description: description,
        aboutTheSite: aboutSite,
        userInfo: `${userInfo.ownerName} (${userInfo.githubInfo})`,
        url: new URL(`${urlSite}/${urlPath})`)
    }

    // todo: Implement More Complex Meta tags.
    // ! Read more here: https://neilpatel.com/blog/open-graph-meta-tags/
    // ! And another one: https://css-tricks.com/essential-meta-tags-social-media/
    return (
        <Helmet title={metaHeader.title} titleTemplate={contextType === "blog" ? (contentTitle.blogContext, title) : (contextType === "portfolio" ? contentTitle.portfolioContext : contentTitle.genericContext)} defer={false}>
            <meta property="og:title" content={metaHeader.title} />
            <meta property="og:description" content={metaHeader.description} />
            {/* <meta property="og:type" content="article" /> */} // ! Check classifiers than Article.

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            // * I don't know what to do on these for now.
            {/* <meta name="twitter:creator" content={post.author.twitter} /> */}
            {/* <meta property="og:image" content={seo.image} /> */}
            {/* {image && <meta name="twitter:image" content={image} />} */}
        </Helmet>
    )
}

SEO.propTypes = {
    title: PropTypes.string.isRequired,
    contextType: PropTypes.oneOf(["blog", "portfolio", "generic"]).isRequired,
    description: PropTypes.string.isRequired,
}

export default SEO
