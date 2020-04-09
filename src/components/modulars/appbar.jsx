import React, { Component } from "react"
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

import { ThemeProvider } from "@material-ui/core/styles"

import { AppBarStyles } from "../../styles/elemStyles"
import { UseQueryAuthor } from "../../reusables/hooks/componentsQuerySet"

// ! IMPLEMENT STATE HERE
// function responseStateTitleRender() {
// }

export default function AppBarModularComponent() {
    const HeaderStyleSheet = AppBarStyles
    const headerStyles = HeaderStyleSheet()
    const headerTitleQuery = UseQueryAuthor()
    let headerDynamicTitle = useMediaQuery("(min-width:715px)")
        ? headerTitleQuery.title
        : headerTitleQuery.title_secondary
    let headerDynamicAuthor = useMediaQuery("(min-width:445px)")
        ? `| By ${headerTitleQuery.author}`
        : ""

    return (
        // <ThemeProvider theme={CustomMUI}>
        <Box component="div" className={headerStyles.root}>
            <AppBar position="absolute" color="primary">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        className={headerStyles.menuButton}
                        aria-label="menu"
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={headerStyles.appTitle}
                    >
                        {`${headerDynamicTitle} ${headerDynamicAuthor}`}
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
        </Box>
        // </ThemeProvider>
    )
}
