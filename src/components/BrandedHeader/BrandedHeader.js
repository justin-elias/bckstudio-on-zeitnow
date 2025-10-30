import classNames from "classnames";
import React from "react";
import {brandFont} from "../../assets/jss/nextjs-material-kit";
import {makeStyles} from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

const style = (theme) => ({
    mainContentRaised: {
        zIndex: "3",
        paddingBottom: "2.5rem",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "auto",
            marginRight: "auto",
        },
        backgroundColor: theme.palette.secondary.main,
        position: "relative",
        textAlign: "center",
    },
    brandFont,
    smMainContentRaised: {
        zIndex: "3",
        marginTop: "7.7rem",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        "@media (max-width: 830px)": {
            marginLeft: "auto",
            marginRight: "auto",
        },
        backgroundColor: theme.palette.secondary.main,
        position: "relative",
        textAlign: "center"
    }

});

const useStyles = makeStyles(style);
export default function BrandedHeader(props) {
    const classes = useStyles();
    return (
        <div>
            <Hidden smDown>
                <div className={classNames(classes.mainContentRaised)}>
                    {props.children}
                </div>
            </Hidden>
            <Hidden mdUp>
                <div className={classNames(classes.smMainContentRaised)}>
                    {props.children}
                </div>
            </Hidden>
        </div>
    )
}
