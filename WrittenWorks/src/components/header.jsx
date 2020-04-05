import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import { fade, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import CustomMUI from "../styles/theme";

// TODO: ADD FUNCTIONALITY AND CLASS ES6 CODE STYLE.
// @PROMISE - ATTEMPT TO MAKE ONE STYLESHEET IN ONE PLACE.

const HeaderStyleSheet = makeStyles((InjectionElem) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: InjectionElem.spacing(2),
	},
	appTitle: {
		flexGrow: 1,
	},
}));

export default ({ prop, children }) => {
	console.log(prop);
	console.log("prop Done");
	console.log(children);
	console.log("children Done");
	const headerStyles = HeaderStyleSheet();
	const headerTitleQuery = useStaticQuery(graphql`
	query {
		site {
			siteMetadata {
				title
				author
			}
		}
	}
	`);

	return (
		<ThemeProvider theme={CustomMUI}>
			<Box component="div" className={headerStyles.root}>
				<AppBar position="absolute" color="primary">
					<Toolbar>
						<IconButton edge="start" color="inherit" className={headerStyles.menuButton} aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={headerStyles.appTitle}>
							{`${headerTitleQuery.site.siteMetadata.title} | By ${headerTitleQuery.site.siteMetadata.author}`}
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</ThemeProvider>
	);
};
