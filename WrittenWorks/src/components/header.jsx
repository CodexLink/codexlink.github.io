import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { fade, makeStyles } from "@material-ui/styles";
// ! import CustomTheme from "../styles/theme";

const HeaderStyleSheet = makeStyles((CustomTheme) => ({
	root: {
		flexGrow: 1,
	},
	// menuButton: {
	// 	marginRight: CustomTheme.spacing(2),
	//   },
	title: {
		flexGrow: 1,
	},
}));

export default ({ prop, children }) => {
	const headerStyles = HeaderStyleSheet();
	return (
		<AppBar position="absolute" color="primary">
			<Toolbar>
				<IconButton edge="start" color="inherit" className={headerStyles.menuButton} aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={headerStyles.title}>
					Welcome!
					</Typography>
				<Button color="inherit">Login</Button>
			</Toolbar>
		</AppBar>
	);
};
