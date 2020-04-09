import { useStaticQuery, graphql } from "gatsby"

export const TitleQuery = () => {
    const { siteData } = useStaticQuery(
    graphql`
        query {
            site {
                siteMetadata {
                    title
                    title_secondary
                    author
                }
            }
        }
        `
    )
    return siteData.siteMetadata
}