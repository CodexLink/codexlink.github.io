import React, { Fragment } from "react"
import { CssBaseline } from "@material-ui/core"
import {
    Container as ContentContainer,
    Header as AppHeader,
} from "../components/presets/"
import { graphql } from "gatsby"

import "typeface-roboto-mono"

export const queryIndexMeta = graphql`
query pageQueryIndex {
    site {
        ...minimumSiteMeta
    }
}
`

export default function IndexPage(data) {
    return (
        <Fragment>
            <CssBaseline />
            <AppHeader titleContentContext={data.data.site.siteMetadata.title} />
            <ContentContainer>Hellow World</ContentContainer>
        </Fragment>
    )

}