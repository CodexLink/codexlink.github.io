import React, { Fragment } from "react";
import Container from "../components/container";
import { Helmet } from "react-helmet";
import { Button, CssBaseline } from "@material-ui/core";
import AppHeader from '../components/header';
import { graphql } from "gatsby";
import "typeface-roboto-mono";

export default ({ data }) => (
  <Fragment>
    <CssBaseline />
    <Container>
      <Helmet title={`${data.site.siteMetadata.title} | By CodexLink`} charSet="utf-8" defer={false}>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Helmet>
      <AppHeader/>
    </Container>
  </Fragment>
)

export const query = graphql`
query FrontWelcomeQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`