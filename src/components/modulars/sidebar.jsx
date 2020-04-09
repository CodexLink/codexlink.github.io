import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
import CustomMUI from "../../styles/theme"

// const SideDrawerStyleSheet = makeStyles((InjectElem) => ({
//     list: {
//         width: 250,
//     },
//     fullList: {
//         width: "auto",
//     },
// }))

// @PROMISE - CREATE TYPES FOR WHAT DATA TO SHOW.
// @PROMISE - This requires to query with the use of useStaticQuery.
// @resolving - states and other such
export default function SidebarModularComponent(props) {
        return <SwipeableDrawer></SwipeableDrawer>
}
