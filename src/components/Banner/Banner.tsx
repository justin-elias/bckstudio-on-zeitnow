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
            marginTop: "7.5rem",
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

export default function Banner(props: BckAppProps) {
    const classes = useStyles();
    const {} = props
    return (
        <React.Fragment>
            <Hidden smDown>
                <Link href={"/holiday-specials/"} passHref>
                    <Toolbar className={classes.bannerAd}>
                        <Typography variant={"h4"} className={classes.text}>Click here to checkout our Black Friday Sales!</Typography>
                    </Toolbar>
                </Link>
            </Hidden>
            <Hidden mdUp>
                <Link href={"/holiday-specials/"} passHref>
                    <Toolbar className={classes.bannerAd}>
                        <Typography variant={"h4"} className={classes.text}>Tap for Black Friday Sales!</Typography>
                    </Toolbar>
                </Link>
            </Hidden>
        </React.Fragment>
    );
}
