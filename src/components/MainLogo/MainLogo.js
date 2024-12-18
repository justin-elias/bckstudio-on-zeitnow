import styles from "src/assets/jss/nextjs-material-kit/components/mainLogoStyle"
import {Hidden, makeStyles} from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import React from "react";
import Image from "next/image";

const style = {
    ...styles,
    heroButton: {
        position: "sticky",
    }
};
const useStyles = makeStyles(style);

export default function MainLogo() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                    <Hidden smDown>
                        <Image src={"https://media.graphassets.com/XMAKIRSSVyM1QPf2Y8hG"} alt={"Bozeman Community Kiln"} height={"197"} width={"704"}/>
                    </Hidden>
                </GridItem>
            </GridContainer>
        </div>
    )
}
