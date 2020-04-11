import { graphql } from "gatsby"

// ! Fragment for Querying MetaData
export const metaBasics = graphql`
    fragment minimumSiteMeta on Site {
        siteMetadata {
            title
            title_secondary
            author
        }
    }
`