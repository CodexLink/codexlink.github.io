import React, { Component } from "react";
//import compQueries from ".../reusables/hooks/compQueries"
import { ThemeProvider } from "@material-ui/core/styles"
import AmbicMUI from "../../styles/theme"
import { TitleQuery } from "../../reusables/hooks/compQueries"
import { Helmet } from "react-helmet"

// @promise | Create Enum Class To Which What Kind of Content To Init.
export default class LiteralHeader extends Component {
    constructor(props) {
        super(props)
        this.initMetaData(props)
    }

    initMetaData({ props }) {
        const MetaData = TitleQuery()
        return (
            <Helmet
                title={`${MetaData.title} | By ${MetaData.author}`}
                charSet="utf-8"
                defer={false}
            >
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Helmet>
        )
    }

    render() {
        return (
            <ThemeProvider theme={AmbicMUI}>

            </ThemeProvider>
        )
    }
}
