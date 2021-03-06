import React from "react";

import style from "../../assets/jss/nextjs-material-kit/components/acuityStyles";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(style);

export default function AcuityScheduler(props) {
    const { src } = props;
    const classes = useStyles();

    const source = src ? src : "https://bckstudio-book-now.as.me/";
    return (
        <div className={classes.container} >
            <iframe src={source} width="100%" height="1400" frameBorder="0"/>
            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"/>
        </div>

    )
}
