import React from "react"
import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
} from "@material-ui/core"
import {
    Menu,
    MoreVert,
    Brightness4,
    Flare,
    GitHub,
} from "@material-ui/icons"
import PropTypes from "prop-types"

import { AppBarStyles } from "../../styles/elemStyles"
import { UseQueryAuthor } from "../../reusables/hooks/componentsQuerySets"

export default function AppBarModularComponent(props) {
    const HeaderStyleSheet = AppBarStyles
    const headerStyles = HeaderStyleSheet()
    const headerTitleQuery = UseQueryAuthor()

    const titleDisplay = useMediaQuery("(min-width:500px)") ? headerTitleQuery.title : headerTitleQuery.title_secondary

    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={props.DrawerHandler(true)}
                    className={headerStyles.menuButton}
                    aria-label="menu"
                >
                    <Menu />
                </IconButton>
                <Typography
                    variant="h6"
                    className={headerStyles.appTitle}
                >
                    {titleDisplay}
                </Typography>
                <Tooltip title="Toggle Dark / Light Mode" arrow>
                    <IconButton
                        edge="start"
                        color="inherit"
                        className={
                            headerStyles.buttonModifiers
                        }
                        aria-label="theme-toggler"
                    >
                        <Flare />
                    </IconButton>
                </Tooltip>
                <Tooltip
                    title="Open Github Repo Of This Web App"
                    arrow
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        target="__target"
                        rel="noopener noreferrer"
                        href="https://github.com/CodexLink/codexlink.github.io"
                        className={
                            headerStyles.buttonModifiers
                        }
                        aria-label="repo-redirector"
                    >
                        <GitHub />
                    </IconButton>
                </Tooltip>
                <Tooltip title="More..." arrow>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="web-app-info-spreader"
                    >
                        <MoreVert />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    )
}

AppBarModularComponent.propTypes = {
    DrawerHandler: PropTypes.func.isRequired
}

AppBarModularComponent.defaultProps = {
    //
}