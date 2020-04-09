import React, { Fragment } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import AmbicMUI from "../../styles/theme"
import { Helmet } from "react-helmet"
import { UseQueryAuthor } from "../../reusables/hooks/componentsQuerySet"
import PropTypes from "prop-types"
import { HeaderBar } from "../modulars"

// @promise | Create Enum Class To Which What Kind of Content To Init.
export default function HeaderComponent(props) {
    const MetaData = UseQueryAuthor()
    return (
        <Fragment>
            <Helmet
                title={`${props.titleContentContext} | By ${MetaData.author}`}
                charSet="utf-8"
                defer={false}
            >
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Helmet>
            <ThemeProvider theme={AmbicMUI}>
                <HeaderBar />
                {props.children}
            </ThemeProvider>
        </Fragment>
    )
}

HeaderComponent.propTypes = {
    titleContentContext: PropTypes.string,
    children: PropTypes.node
}