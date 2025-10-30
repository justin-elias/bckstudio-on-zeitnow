import React from "react";
// @material-ui/core components
import Grid, {GridProps} from "@material-ui/core/Grid";

export default function GridContainer(props: GridProps) {

  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={className}>
      {children}
    </Grid>
  );
}
