import theme from "../theme";

const drawerWidth = 260;

const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const containerFluid = {
  paddingRight: "0.938em",
  paddingLeft: "0.938em",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%"
};
const container = {
  ...containerFluid,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100vw"
  },
  [theme.breakpoints.only("md")]: {
    maxWidth: "100vw"
  },
  [theme.breakpoints.only("lg")]: {
    maxWidth: "100vw"
  },
  [theme.breakpoints.only("xl")]: {
    maxWidth: "87.5em"
  }
};

const boxShadow = {
  boxShadow:
      "0 0.625em 1.875em -0.75em rgba(0, 0, 0, 0.42), 0 0.25em 1.563em 0em rgba(0, 0, 0, 0.12), 0 0.5em 0.625em -0.313em rgba(0, 0, 0, 0.2)"
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "1.563em 0",
  boxShadow: "0 0.063em 0.25em 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "0.188em",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#fff"
};

const primaryColor = "#416e80";
const secondaryColor = "#B8D8DA";
const primaryFontColor = "#444";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

const defaultFont = {
  fontFamily: '"Lato","Helvetica","Arial","Lucida",sans-serif;',
  fontWeight: "400",
  lineHeight: "1.5rem",
  fontSize: "1em",
  color: primaryFontColor
};
const brandFont = {
  fontFamily: "Merriweather Sans, sans-serif",
  fontWeight: 700,
  color: "#333"
};
const primaryBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(65, 110, 128, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(65, 110, 128, 0.2)"
};
const secondaryBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(184, 216, 218, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(184, 216, 218, 0.2)"
};
const infoBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(0, 188, 212, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(0, 188, 212, 0.2)"
};
const successBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(76, 175, 80, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(76, 175, 80, 0.2)"
};
const warningBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(255, 152, 0, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(255, 152, 0, 0.2)"
};
const dangerBoxShadow = {
  boxShadow:
      "0 0.75em 1.25em -0.625em rgba(244, 67, 54, 0.28), 0 0.25em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.438em 0.5em -0.313em rgba(244, 67, 54, 0.2)"
};
const roseBoxShadow = {
  boxShadow:
      "0 0.25em 1.25em 0em rgba(0, 0, 0, 0.14), 0 0.438em 0.625em -0.313em rgba(233, 30, 99, 0.4)"
};

const warningCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ffa726, #fb8c00)",
  ...warningBoxShadow
};
const successCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #66bb6a, #43a047)",
  ...successBoxShadow
};
const dangerCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ef5350, #e53935)",
  ...dangerBoxShadow
};
const infoCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #26c6da, #00acc1)",
  ...infoBoxShadow
};
const primaryCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
  ...primaryBoxShadow
};
const roseCardHeader = {
  color: "#fff",
  background: "linear-gradient(60deg, #ec407a, #d81b60)",
  ...roseBoxShadow
};
const cardActions = {
  margin: "0 1.25em 0.625em",
  paddingTop: "0.625em",
  borderTop: "0.063em solid #eeeeee",
  height: "auto",
  ...defaultFont
};

const cardHeader = {
  margin: "-1.875em 0.938em 0",
  borderRadius: "0.188em",
  padding: "0.938em"
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "0.188em",
  boxShadow:
      "0 0.625em 1.25em -0.75em rgba(0, 0, 0, 0.42), 0 0.188em 1.25em 0em rgba(0, 0, 0, 0.12), 0 0.5em 0.625em -0.313em rgba(0, 0, 0, 0.2)",
  padding: "0.625em 0",
  transition: "all 150ms ease 0s"
};

const title = {
  margin: "1.75rem 0 0.875rem",
  marginBottom: "1rem",
  marginTop: "2rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontWeight: "bold",
  fontFamily: 'Asap, sans-serif'
};

const cardTitle = {
  ...title,
  marginTop: ".625rem"
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

const cardSubtitle = {
  marginBottom: "0",
  marginTop: "-.375rem"
};

const mainElement = {
  background: "#FFFFFF",
  position: "relative",
  zIndex: "3",
  margin: "-3.75em 1.875em 0em",
  borderRadius: "0.375em",
  boxShadow: "0 1em 1.5em 0.125em rgba(0, 0, 0, 0.14), 0 0.375em 1.875em 0.313em rgba(0, 0, 0, 0.12), 0 0.5em 0.625em -0.313em rgba(0, 0, 0, 0.2)"
};
const playBrand = {
  color: theme.palette.primary.main,
};

const dividerBar = {
  backgroundColor: theme.palette.secondary.main,
  height: "2vh"
};

const clp_exclaim = {
  ...playBrand,
  fontSize: "0.85em"
};
export {
  //variables
  drawerWidth,
  transition,
  container,
  containerFluid,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardLink,
  cardSubtitle,
  secondaryBoxShadow,
  secondaryColor,
  primaryFontColor,
  brandFont,
  mainElement,
  playBrand,
  dividerBar,
  clp_exclaim,
};
