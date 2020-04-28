import React, { Fragment, useState } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import AmbicMUI from "../../styles/theme"
import { Helmet } from "react-helmet"
import { UseQueryAuthor } from "../../reusables/hooks/componentsQuerySets"
import PropTypes from "prop-types"
import { HeaderBar } from "../modulars"
import { SwipeableDrawer } from "@material-ui/core"
import { DrawerStyles } from "../../styles/elemStyles"
import { DrawerListContextMain } from "./drawerContexts"

export default function HeaderComponent(props) {
    const SidebarStyleSheet = DrawerStyles
    const MetaData = UseQueryAuthor()
    const sideContentStyles = SidebarStyleSheet()

    const [drawerState, setDrawerState] = useState(false)

    const emitDrawerEvent = (stateRequest) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setDrawerState(stateRequest)
    }

    return (
        <Fragment key={HeaderComponent.name}>
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
                <HeaderBar DrawerHandler={emitDrawerEvent} />
                <Fragment key="SidebarModularComponent">
                    <SwipeableDrawer anchor="left" open={drawerState} width={sideContentStyles.fullListWidth} onOpen={emitDrawerEvent(true)} onClose={emitDrawerEvent(false)}>{ DrawerListContextMain() }</SwipeableDrawer>
                </Fragment>
            </ThemeProvider>
        </Fragment>
    )
}

HeaderComponent.propTypes = {
    titleContentContext: PropTypes.string.isRequired,
    isDrawerRequired: PropTypes.bool,
    drawerContext: PropTypes.node
}

HeaderComponent.defaultProps = {
    titleContentContext: "",
    isDrawerRequired: true,

}