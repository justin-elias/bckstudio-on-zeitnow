import React from "react";
// nodejs library to set properties for components
// @material-ui/core components
import {createStyles, makeStyles} from "@material-ui/core/styles";
import Grid, {GridProps} from "@material-ui/core/Grid";

const useStyles = makeStyles(() => createStyles({
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
}));

export default function GridItem(props: GridProps) {
  const classes = useStyles(props);
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};

