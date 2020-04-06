import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
    SwipeableDrawer,
    IconButton,
    Typography,
    useMediaQuery,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,

} from "@material-ui/core"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import CustomMUI from "../styles/theme"

const SideDrawerStyleSheet = makeStyles(InjectElem => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
}))

// ! PROMISES - CREATE TYPES FOR WHAT DATA TO SHOW.
export default ({ props, children }) => {
    const DrawerQuery = useStaticQuery(graph`
    query handleDrawerSetTypes {

    }
    `)
    return (
        <ThemeProvider theme={CustomMUI}>
            <SwipeableDrawer
            >
            </SwipeableDrawer>
        </ThemeProvider>
    )
}
