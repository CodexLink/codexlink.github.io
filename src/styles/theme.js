import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { amber, orange, red } from '@material-ui/core/colors';

let theme = createMuiTheme({
    palette: {
        primary: amber,
        secondary: red,
    },
    status: {
        danger: orange,
    },
    typography: {
        fontFamily: [
            '"Roboto Mono"',
        ].join(',')
    },
    title: {
        flexGrow: 1,
    },
});

export default theme = responsiveFontSizes(theme);

// TODO: Provide Font Variants for Specific Use Case.
// @o | https://material-ui.com/customization/typography/