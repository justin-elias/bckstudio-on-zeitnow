import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import {Hidden, Typography} from "@material-ui/core";
import { BckAppProps } from "../../index";
import Link from "next/link";

const useStyles = makeStyles(() => createStyles({
    bannerAd: {
        backgroundColor: "white",
        '&:hover': {
            backgroundColor: "black",
        },
        width: "100vw",
        marginTop: "4.5rem",
        position: "absolute",
        zIndex: 1,

    },
    text: {
        margin: "auto",
        align: "center",
        justify: "center",
        color: "black", "&:hover": {
            color: "white",
        },
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
        </React.Fragment>
    );
}
