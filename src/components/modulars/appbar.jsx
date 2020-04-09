import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
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

import { ThemeProvider } from "@material-ui/core/styles"

import CustomMUI from "../../styles/theme"
import { AppBarStyles } from "../../styles/elemStyles"
import { TitleQuery } from "../../reusables/hooks/compQueries"

export default class HeaderBar extends Component {
    constructor(props) {
        const HeaderStyleSheet = AppBarStyles
        const headerStyles = this.HeaderStyleSheet()
        super(props)
    }

    responseTitleRender() {
        let headerDynamicTitle = useMediaQuery("(min-width:715px)")
            ? headerTitleQuery.title
            : headerTitleQuery.title_secondary
        let headerDynamicAuthor = useMediaQuery("(min-width:445px)")
            ? `| By ${headerTitleQuery.author}`
            : ""
    }

    render() {
        const headerTitleQuery = TitleQuery()
        this.responseTitleRender();
        return (
            <ThemeProvider theme={CustomMUI}>
                <Box component="div" className={this.headerStyles.root}>
                    <AppBar position="absolute" color="primary">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                className={this.headerStyles.menuButton}
                                aria-la bel="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                className={this.headerStyles.appTitle}
                            >
                                {`${headerDynamicTitle} ${headerDynamicAuthor}`}
                            </Typography>
                            <Tooltip title="Toggle Dark / Light Mode" arrow>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    className={this.headerStyles.buttonModifiers}
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
                                    className={this.headerStyles.buttonModifiers}
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
}
