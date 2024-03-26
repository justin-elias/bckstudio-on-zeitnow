import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import {Hidden, Typography} from "@material-ui/core";
import { BckAppProps } from "../../index";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import PrimaryContainedButton from "../Buttons/PrimaryContainedButton";

const useStyles = makeStyles((theme) => createStyles({
    bannerAd: {
        backgroundColor: "white",
        width: "100vw",
        marginTop: "4.5rem",
        position: "absolute",
        zIndex: 3,
        "&:hover": {
            //backgroundColor: "black",
            //color: "white",
            //textColor: "white",
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
    },
    link: {
        color: "white",
    }
}));

export default function Banner() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Hidden smDown>
                    <Toolbar className={classes.bannerAd}>
                        <Typography variant={"h4"} className={classes.text}>Join Us for a Workshop with Visiting Artist Megan Sprenger</Typography>
                        <PrimaryContainedButton><a href={'https://bckstudio-book-now.as.me/schedule.php?appointmentType=category%3AVisiting+Artist'} target={'_blank'}>Sign Up for Megan's Workshop</a></PrimaryContainedButton>

                    </Toolbar>
            </Hidden>
            <Hidden mdUp>
                    <Toolbar className={classes.bannerAd}>
<                       Typography variant={"h4"} className={classes.text}>Join Us for a Workshop with Visiting Artist Megan Sprenger</Typography>
                        <PrimaryContainedButton><a className={classes.link} href={'https://bckstudio-book-now.as.me/schedule.php?appointmentType=category%3AVisiting+Artist'} target={'_blank'}>Sign Up for Megan's Workshop</a></PrimaryContainedButton>
                    </Toolbar>
            </Hidden>
        </React.Fragment>
    );
}
