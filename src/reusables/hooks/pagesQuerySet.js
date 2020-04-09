import { graphql } from "gatsby"

export const indexQuery = graphql`
    query pageQueryIndex {
        site {
            ...minimumSiteMeta
        }
    }
`