import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import FlareIcon from "@material-ui/icons/Flare"
import GitHubIcon from "@material-ui/icons/GitHub"
import MoreVertIcon from "@material-ui/icons/MoreVert"

import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import CustomMUI from "../styles/theme"

// TODO: ADD FUNCTIONALITY AND CLASS ES6 CODE STYLE.
// @PROMISE - ATTEMPT TO MAKE ONE STYLESHEET IN ONE PLACE.
// @PROMISE - ADD RESPONSIVENESS BY HIDING TITLE ON LOW-RES DEVICES.

const HeaderStyleSheet = makeStyles(InjectElem => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: InjectElem.spacing(2),
    },
    buttonModifiers: {
        marginRight: InjectElem.spacing(2),
    },
    appTitle: {
        flexGrow: 1,
    },
}))

// ! Deconstructing this function is not viable. Though, not very complex to do so.
export default ({ prop, children }) => {
    const headerTitleQuery = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    title_secondary
                    author
                }
            }
        }
    `)

    let headerDynamicTitle = useMediaQuery("(min-width:670px)")
        ? headerTitleQuery.site.siteMetadata.title
        : headerTitleQuery.site.siteMetadata.title_secondary
    let headerDynamicAuthor = useMediaQuery("(min-width:445px)")
        ? `| By ${headerTitleQuery.site.siteMetadata.author}`
        : ""

    const headerStyles = HeaderStyleSheet()

    return (
        <ThemeProvider theme={CustomMUI}>
            <Box component="div" className={headerStyles.root}>
                <AppBar position="absolute" color="primary">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            className={headerStyles.menuButton}
                            aria-label="menu"
                        >
                            <MenuIcon />
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
                                className={headerStyles.buttonModifiers}
                                aria-label="theme-toggler"
                            >
                                <FlareIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Open Github Repo Of This Web App" arrow>
                            <IconButton
                                edge="start"
                                color="inherit"
                                target="__target"
                                rel="noopener noreferrer"
                                href="https://github.com/CodexLink/codexlink.github.io"
                                className={headerStyles.buttonModifiers}
                                aria-label="repo-redirector"
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="More..." arrow>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="web-app-info-spreader"
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}
