import React, { Fragment } from "react"
import DefaultTest from "../components/presets/container"
import { Helmet } from "react-helmet"

export default () => (
    <Fragment>
        <DefaultTest />
        <Helmet title="It's me Bitch." defer={false}>
            <meta charSet="utf-8" />
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    </Fragment>
)
