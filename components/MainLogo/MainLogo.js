import styles from "assets/jss/nextjs-material-kit/components/mainLogoStyle"
import {Hidden, makeStyles} from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import kilnLogo from "../../assets/img/bck/svg/bckHorizontalLogo.svg";
import React from "react";
import classNames from "classnames";
import ScheduleDialog from "../ScheduleDialog/ScheduleDialog";


const style = {
    ...styles,
    heroButton: {
        position: "sticky",
    }
};
const useStyles = makeStyles(style);

export default function MainLogo(props) {
    const {} = props;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Hidden smDown implementation={"js"}>
                        <img src={kilnLogo} alt={"Kiln Logo"} height={"197px"}/>
                    </Hidden>
                    <Hidden mdUp implementation={"js"}>
                        <ScheduleDialog className={classNames(classes.heroButton)} mobile={"true"}/>
                    </Hidden>
                </GridItem>
            </GridContainer>
        </div>
    )
}
