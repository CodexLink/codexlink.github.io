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
export const SideBarStyles = makeStyles((SideProps) => ({
    root: {
        flexGrow: 1,
    },
}))

// ! Card StyleSheet Injection
export const CardStyles = makeStyles((GivenProps) => ({
    root: {
        flexGrow: 1,
    },
}))
