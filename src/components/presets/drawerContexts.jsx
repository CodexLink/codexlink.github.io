import React, { useState } from "react"
import { Box, List, ListItem, ListItemText, ListItemIcon, ListSubheader, Divider, Collapse } from "@material-ui/core"
import { AccountTree, ContactMail, ExpandLess, ExpandMore, GroupWork, Home, Info, NaturePeople, Note, School, Work } from "@material-ui/icons"
import { DrawerStyles } from "../../styles/elemStyles"

export const DrawerListContextMain = () => {
    const DrawerStyleSheet = DrawerStyles
    const drawerStyles = DrawerStyleSheet()
    const [showCaseExpandState, setShowCaseExpandState] = useState(false)
    const [categoryExpandState, setCategoryState] = useState(false)

    const emitShowcaseExpandEvent = () => {
        setShowCaseExpandState(!showCaseExpandState)
    }
    const emitCategoryExpandEvent = () => {
        setCategoryState(!categoryExpandState)
    }

    return (
        <List role="presentation">
            <Divider />
            <List subheader={<ListSubheader>Page Menu</ListSubheader>}>
                <ListItem button>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Note />
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" />
                </ListItem>
                <ListItem button onClick={emitShowcaseExpandEvent}>
                    <ListItemIcon>
                        <AccountTree />
                    </ListItemIcon>
                    <ListItemText primary="Project Showcase" />
                    {showCaseExpandState ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={showCaseExpandState} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={drawerStyles.NestedLevelOne}>
                            <ListItemIcon>
                                <GroupWork />
                            </ListItemIcon>
                            <ListItemText primary="Collaborations" />
                        </ListItem>
                        <ListItem button className={drawerStyles.NestedLevelOne}>
                            <ListItemIcon>
                                <School />
                            </ListItemIcon>
                            <ListItemText primary="School Projects" />
                        </ListItem>
                        <ListItem button className={drawerStyles.NestedLevelOne}>
                            <ListItemIcon>
                                <Work />
                            </ListItemIcon>
                            <ListItemText primary="School Works" />
                        </ListItem>
                        <ListItem button className={drawerStyles.NestedLevelOne}>
                            <ListItemIcon>
                                <NaturePeople />
                            </ListItemIcon>
                            <ListItemText primary="Personal Projects" />
                        </ListItem>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List subheader={<ListSubheader>Blogging</ListSubheader>}>
                <ListItem button>
                    <ListItemIcon>
                        <NaturePeople />
                    </ListItemIcon>
                    <ListItemText primary="Feed Timeline" />
                </ListItem>
                <ListItem button onClick={emitCategoryExpandEvent}>
                    <ListItemIcon>
                        <NaturePeople />
                    </ListItemIcon>
                    <ListItemText primary="Direct Categories" />
                    {categoryExpandState ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={categoryExpandState} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={drawerStyles.NestedLevelOne}>
                            <ListItemIcon>
                                <NaturePeople />
                            </ListItemIcon>
                            <ListItemText primary="Tweet Longer" />
                        </ListItem>
                        <ListItem button className={drawerStyles.NestedLevelOne}>
                            <ListItemIcon>
                                <NaturePeople />
                            </ListItemIcon>
                            <ListItemText primary="Diary" />
                        </ListItem>
                        <ListItem button className={drawerStyles.NestedLevelOne}>
                            <ListItemIcon>
                                <NaturePeople />
                            </ListItemIcon>
                            <ListItemText primary="Research" />
                        </ListItem>
                        <ListItem button className={drawerStyles.NestedLevelOne}>
                            <ListItemIcon>
                                <NaturePeople />
                            </ListItemIcon>
                            <ListItemText primary="Opinions" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />
                <List subheader={<ListSubheader>About</ListSubheader>}>
                    <ListItem button>
                        <ListItemIcon>
                            <Info />
                        </ListItemIcon>
                        <ListItemText primary="About Me" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ContactMail />
                        </ListItemIcon>
                        <ListItemText primary="Contacts" />
                    </ListItem>
                </List>
            </List>
        </List>
    )
}