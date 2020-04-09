import React, { Fragment } from "react"
import { CssBaseline } from "@material-ui/core"
import {
    Container as ContentContainer,
    Header as AppHeader,
} from "../components/presets/"
import { indexQuery } from "../reusables/hooks/pagesQuerySet"
import "typeface-roboto-mono"

const queryIndexMeta = indexQuery

export default function IndexPage(data) {
    console.log(data)
    return (
        <Fragment>
            <CssBaseline />
            <AppHeader titleContentContext={data.data.site.siteMetadata.title} />
            {/* <AppHeader titleContentContext="Test" /> */}
            <ContentContainer>Hellow World</ContentContainer>
        </Fragment>
    )

}

// export const query = graphql`
// query pageTempQuery {
//     site {
//         ...minimumSiteMeta
//     }
// }
//`
