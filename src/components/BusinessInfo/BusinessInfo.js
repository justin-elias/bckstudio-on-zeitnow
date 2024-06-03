import React from "react";
import classNames from "classnames";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import styles from "src/assets/jss/nextjs-material-kit/components/businessInfoStyle";
import {Hidden} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

const useStyles = makeStyles(() => createStyles({
    ...styles,
    vertCones: {
        marginTop: "2rem"
    },
    horizCones: {
        marginTop: "2rem"
    },
    phone: {
        display: "inline",
    },
    phoneLink: {
        display: "inline",
    },
    center: {
        maxWidth: "12rem",
        margin: "auto"
    }
}));

export default function BusinessInfo(props) {
    const classes = useStyles(props);

    return (
        <div>
            <div className={classes.dividerBar}/>
            <GridContainer spacing={0} justifyContent={"center"}>
                <GridItem xs={12} sm={12} md={3}>
                    <h2 className={classNames(classes.title, classes.centered)}>Gallery Hours</h2>
                    <Typography variant={"body1"} className={classes.centered}>
                       Tuesday - Friday 2:00pm - 5:30PM
                        <br/>
                        Gallery Closed Saturday - Monday
                    </Typography>
                </GridItem>
                <Hidden smDown>
                    <div className={classes.vertCones}>
                        <Image src={"https://media.graphassets.com/hfaJUnYBRIC8AySsGbkB"} alt={"Vertical divider which shows temperature cones at various stages of drooping"} height={"160"} width={"12"}/>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <div className={classes.horizCones}>
                        <Image src={"https://media.graphassets.com/MFyMrP7IQisembYJM4k6"} alt={"Horizontal divider which shows temperature cones at various stages of drooping"} height={"32"} width={"240"}/>
                    </div>
                </Hidden>
                <GridItem xs={12} sm={12} md={3}>
                    <h2 className={classNames(classes.title, classes.centered)} align={"center"}>Location</h2>
                    <Typography variant={"body1"} className={classes.centered} align={"center"}>608 Griffin Dr<br/>
                        Unit A<br/>
                        Bozeman, Montana 59715
                    </Typography>
                    <div className={classes.center}>
                        <Typography variant={"h6"} component={"p"} className={classNames(classes.title, classes.phone)} align={"center"} justify={"center"}>
                            Phone:
                        </Typography>
                        <Typography variant={"body1"} className={classes.phoneLink} align={"center"}>
                            <a href={"tel:+14062249229"}> (406)224-9229</a>
                        </Typography>
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
}
