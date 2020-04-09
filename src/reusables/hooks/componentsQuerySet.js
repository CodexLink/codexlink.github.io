import { useStaticQuery, graphql } from "gatsby"

export const UseQueryAuthor = () => {
    const { site } = useStaticQuery(
      graphql`
        query metaBasicQuery {
          site {
            ...minimumSiteMeta
          }
        }
      `
    )
    return site.siteMetadata
  }