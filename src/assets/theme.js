import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import {blueGrey, red} from "@material-ui/core/colors";

// Brand Palette
export const primaryColor = "#406d7f";
export const secondaryColor = "#bbdcdd"
export const hoverGray = blueGrey.A400;
export const warningColor = "#ff9800";
export const dangerColor = "#f44336";
export const successColor = "#4caf50";
export const infoColor = "#00acc1";
export const roseColor = "#e91e63";
export const grayColor = "#999999";

// Create a theme instance.
const themeBase = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            light: "#6f9bae",
            dark: "#0e4253",
            contrastText: "#fff"
        },
        secondary: {
            main: secondaryColor,
            light: "#eeffff",
            dark: "#8baaab",
            contrastText: "#333"
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
    typography: {
        fontFamily: ["Lato", "Helvetica", "Arial", "Lucida", "sans-serif"].join(","),
        h1: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h2: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h3: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h4: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h5: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
        h6: {
            fontFamily: ["Asap", "sans-serif"].join(","),
            fontWeight: "700",
            color: "#333"
        },
    }
});

const theme = responsiveFontSizes(themeBase);
theme.typography.h1 = {
    fontSize: "3rem",
    [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
    },
};
theme.typography.h2 = {
    fontSize: "2.25rem",
    [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
    },
};
theme.typography.h3 = {
    fontSize: "1.755rem",
    [theme.breakpoints.down("xs")]: {
        fontSize: "1.17rem",
    },
};
export default theme;

