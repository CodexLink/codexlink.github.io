import React, { Fragment } from "react"
import Container from "../components/presets/container"
import { CssBaseline } from "@material-ui/core"
import LiteralHeader from "../components/presets/header"
import { graphql } from "gatsby"

import "typeface-roboto-mono"

export default ({ data }) => (
    <Fragment>
        <CssBaseline />
        <LiteralHeader />
        <Container>

        </Container>
    </Fragment>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`
