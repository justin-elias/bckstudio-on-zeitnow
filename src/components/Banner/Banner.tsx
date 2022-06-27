import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import {Hidden, Typography} from "@material-ui/core";
import { BckAppProps } from "../../index";
import Link from "next/link";

const useStyles = makeStyles((theme) => createStyles({
    bannerAd: {
        backgroundColor: "white",
        width: "100vw",
        marginTop: "4.5rem",
        position: "absolute",
        zIndex: 3,
        "&:hover": {
            backgroundColor: "black",
            color: "white",
        },
        [theme.breakpoints.down("sm")]:{
            marginTop: "-0.5rem",
            paddingTop: "0.5rem",
        },
        [theme.breakpoints.between("md", "lg")]:{
            marginTop: "3.5rem",
        },
    },
    text: {
        margin: "auto",
        align: "center",
        justify: "center",
    }
}));

export default function Banner() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Hidden smDown>
                    <Toolbar className={classes.bannerAd}>
                        <Typography variant={"h4"} className={classes.text}>We have Moved locations!</Typography>
                        <br/>
                        <Typography variant={"body1"} className={classes.text}>608 Griffin Dr<br/>
                        Unit A<br/>
                        Bozeman, Montana 59715</Typography>
                    </Toolbar>
            </Hidden>
            <Hidden mdUp>
                    <Toolbar className={classes.bannerAd}>
                        <Typography variant={"h4"} className={classes.text}>Tap for Black Friday Sales!</Typography>
                    </Toolbar>
            </Hidden>
        </React.Fragment>
    );
}
