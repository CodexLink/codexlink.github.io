import { makeStyles } from "@material-ui/core/styles"

// ! AppBar StyleSheet Injection
export const AppBarStyles = makeStyles((ElemProps) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: ElemProps.spacing(2),
    },
    buttonModifiers: {
        marginRight: ElemProps.spacing(2),
    },
    appTitle: {
        flexGrow: 1,
    },
}))

// ! SideBar StyleSheet Injection
export const DrawerStyles = makeStyles((ElemeProps) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: ElemeProps.palette.background.paper,
    },
    sideBarWidth: {
        width: 280,
    },
    fullListWidth: {
        width: 'auto',
    },
    NestedLevelOne: {
        paddingLeft: ElemeProps.spacing(4),
    }
}))

// ! Card StyleSheet Injection
export const CardStyles = makeStyles((ElemProps) => ({
    root: {
        flexGrow: 1,
    },
}))
