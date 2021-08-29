import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Hidden, Typography } from "@material-ui/core";
import { BckAppProps } from "../../index";

const useStyles = makeStyles(() => createStyles({
    bannerAd: {
        backgroundColor: "white",
        width: "100vw",
        marginTop: "4.5rem",
        position: "absolute",
        zIndex: 1,
    },
    text: {
        margin: "auto",
        align: "center",
        justify: "center"
    }
}));

export default function Banner(props: BckAppProps) {
    const classes = useStyles();
    const {} = props
    return (
        <React.Fragment>
            <Hidden smDown>
                <Toolbar className={classes.bannerAd}><Typography variant={"h4"} className={classes.text}>Sale Finale! Smash Party, Raffle & Silent Auction on August 28, 9am-6:30pm</Typography></Toolbar>
            </Hidden>
        </React.Fragment>
    );
}
