import React, {useState} from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Menu from "@material-ui/icons/Menu";
import styles from "src/assets/jss/nextjs-material-kit/components/headerStyle.js";
import BookServiceDialog from "../BookServiceDialog/BookServiceDialog";
import LogoButton from "../Buttons/LogoButton";

const style = {
  ...styles,
};
const useStyles = makeStyles(style);

function SmallHeader(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { rightLinks, fixed, absolute, color, size } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.color]: color
  });

  return (
      <div>
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        <LogoButton href={"/"} width={"143px"} height={"40px"} src={"https://media.graphassets.com/XMAKIRSSVyM1QPf2Y8hG"}/>
        <BookServiceDialog className={classNames(classes.heroButton)} buttonText={"Book Now"} size={size}/>
      </Toolbar>
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {rightLinks}
          </div>
        </Drawer>
    </AppBar>
      </div>
  );
}

SmallHeader.defaultProp = {
  color: "white"
};

export default SmallHeader;
